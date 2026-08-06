'use client'

import { DEFAULT_5DAYS_MENU, type MenuItem } from '@/lib/menu-defaults'

export { DEFAULT_5DAYS_MENU }
export type { MenuItem }

const STORE_KEY_5DAYS = 'wanfu_5days_menu_v5'

export function getStored5DaysMenu(): MenuItem[] {
  if (typeof window === 'undefined') return DEFAULT_5DAYS_MENU
  try {
    const raw = localStorage.getItem(STORE_KEY_5DAYS)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length === 5) {
        return parsed
      }
    }
  } catch (e) {
    console.error('Failed to load stored 5days menu', e)
  }
  return DEFAULT_5DAYS_MENU
}

/**
 * 保存の結果。呼び出し側で成否を出し分けるために返す。
 * 以前は結果を捨てていたため、クラウドに保存できていなくても
 * 管理画面には「保存しました」と出てしまっていた。
 */
export interface SaveResult {
  ok: boolean
  error?: string
}

export async function saveStored5DaysMenu(menu: MenuItem[]): Promise<SaveResult> {
  if (typeof window === 'undefined') return { ok: false, error: 'ブラウザ以外からは保存できません' }

  // 手元の控えは先に更新しておく（通信に失敗しても入力内容は消えない）
  try {
    localStorage.setItem(STORE_KEY_5DAYS, JSON.stringify(menu))
    window.dispatchEvent(new Event('wanfu_menu_updated'))
  } catch (e) {
    console.error('Failed to save 5days menu locally', e)
  }

  const payload = JSON.stringify(menu)

  // 画像は data URL のまま1件のレコードに詰め込むので、5日分では
  // Upstash の1リクエスト上限(1MB)に届きうる。届いてから謎のエラーを
  // 見せるより、手前で何をすればよいか伝える
  if (payload.length > 900_000) {
    const mb = (payload.length / 1_048_576).toFixed(1)
    return {
      ok: false,
      error: `画像の合計が大きすぎます（約${mb}MB）。写真を数枚、プリセット画像に戻すか、小さめの写真をお使いください`,
    }
  }

  try {
    const res = await fetch('/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
    })
    if (!res.ok) {
      const detail = await res.json().catch(() => null)
      return { ok: false, error: detail?.error ?? `保存に失敗しました (${res.status})` }
    }
    return { ok: true }
  } catch (e) {
    console.error('Failed to save 5days menu to cloud', e)
    return { ok: false, error: '通信に失敗しました。電波の状態をご確認ください' }
  }
}

export async function fetchRemoteMenu(): Promise<MenuItem[]> {
  try {
    const res = await fetch('/api/menu', { cache: 'no-store' })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        if (typeof window !== 'undefined') {
          localStorage.setItem(STORE_KEY_5DAYS, JSON.stringify(data))
        }
        return data
      }
    }
  } catch (e) {
    console.error('Failed to fetch remote menu', e)
  }
  return getStored5DaysMenu()
}

export function resetStored5DaysMenu(): MenuItem[] {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORE_KEY_5DAYS)
      window.dispatchEvent(new Event('wanfu_menu_updated'))
    } catch (e) {
      console.error('Failed to reset menu', e)
    }
  }
  return DEFAULT_5DAYS_MENU
}
