'use client'

import React, { useState, useEffect } from 'react'
import { SiteShell } from '@/components/site-shell'
import { ChineseDivider, ChineseFrame } from '@/components/chinese-frame'
import { Button } from '@/components/ui/button'
import { img } from '@/lib/site-data'
import {
  MenuItem,
  getStored5DaysMenu,
  fetchRemoteMenu,
  saveStored5DaysMenu,
  resetStored5DaysMenu
} from '@/lib/menu-store'

const PRESET_IMAGES = [
  { label: '四川麻婆豆腐', url: img.mapo },
  { label: '油淋鶏定食', url: img.teishoku1 },
  { label: '回鍋肉定食', url: img.teishoku2 },
  { label: '東北黒酢豚', url: img.guobaorou },
  { label: '炒飯＆点心', url: img.chahan },
  { label: '四川水煮牛肉', url: img.shuizhu },
  { label: '手包み小籠包', url: img.shoronpo }
]

function compressImageFile(file: File, maxWidth = 800, quality = 0.75): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const imgObj = new Image()
      imgObj.onload = () => {
        const canvas = document.createElement('canvas')
        let width = imgObj.width
        let height = imgObj.height

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width)
          width = maxWidth
        }

        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(imgObj, 0, 0, width, height)
          const dataUrl = canvas.toDataURL('image/jpeg', quality)
          resolve(dataUrl)
        } else {
          resolve(e.target?.result as string)
        }
      }
      imgObj.onerror = (err) => reject(err)
      imgObj.src = e.target?.result as string
    }
    reader.onerror = (err) => reject(err)
    reader.readAsDataURL(file)
  })
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passError, setPassError] = useState(false)

  const [menu5Days, setMenu5Days] = useState<MenuItem[]>([])
  const [toastMessage, setToastMessage] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [isLoadingRemote, setIsLoadingRemote] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    // Check if session is already authenticated
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('wanfu_admin_auth')
      if (auth === 'true') {
        setIsAuthenticated(true)
      }
    }
    // まず手元の控えを出して待ち時間を減らし、そのあとデータベースの内容で上書きする。
    // 控えだけを見て編集すると、別の端末で更新された内容を古い内容で潰してしまう
    setMenu5Days(getStored5DaysMenu())
    fetchRemoteMenu()
      .then(remote => {
        if (Array.isArray(remote) && remote.length > 0) setMenu5Days(remote)
      })
      .catch(() => showToast('⚠️ 最新のメニューを読み込めませんでした。電波の状態をご確認ください。'))
      .finally(() => setIsLoadingRemote(false))
  }, [])

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordInput === '123') {
      setIsAuthenticated(true)
      setPassError(false)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('wanfu_admin_auth', 'true')
      }
    } else {
      setPassError(true)
    }
  }

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3500)
  }

  const handle5DaysChange = (index: number, field: keyof MenuItem, value: string) => {
    const updated = [...menu5Days]
    updated[index] = { ...updated[index], [field]: value }
    setMenu5Days(updated)
  }

  const handleFileUpload = async (index: number, file: File) => {
    if (!file) return
    setIsUploading(true)
    try {
      const compressedDataUrl = await compressImageFile(file)
      handle5DaysChange(index, 'image', compressedDataUrl)
      showToast(`📁 【${menu5Days[index].day}】の画像を最適化して読み込みました！`)
    } catch (e) {
      console.error('Image compression failed', e)
      showToast('⚠️ 画像の読み込みに失敗しました。別の画像をお試しください。')
    } finally {
      setIsUploading(false)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    const result = await saveStored5DaysMenu(menu5Days)
    setIsSaving(false)
    if (result.ok) {
      showToast('✅ 月〜金 5日間の定食メニューを保存しました。サイトに反映されています。')
    } else {
      // 保存できていないのに成功と伝えると、更新したつもりのまま古い内容が出続ける
      showToast(`⚠️ 保存できませんでした：${result.error ?? '原因不明のエラー'}`)
    }
  }

  const handleReset = () => {
    const defaultData = resetStored5DaysMenu()
    setMenu5Days(defaultData)
    showToast('↺ メニューを初期状態（油淋鶏・麻婆豆腐・回鍋肉・黒酢豚・担々麺）にリセットしました！')
  }

  // 1. PASSWORD PROTECTION MODAL IF NOT AUTHENTICATED
  if (!isAuthenticated) {
    return (
      <SiteShell>
        <section className="bg-[#FBF9F5] py-24 select-none min-h-[70vh] flex items-center justify-center">
          <div className="w-full max-w-md px-4">
            <ChineseFrame borderColor="gold">
              <div className="text-center space-y-6">
                <div className="w-12 h-12 border-2 border-[#9E2A22] rounded flex items-center justify-center p-1 bg-white mx-auto shadow">
                  <span className="font-serif text-xs font-extrabold text-[#9E2A22] leading-tight">
                    萬福<br />管理
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-extrabold text-[#1A1816]">
                    管理者認証
                  </h3>
                  <p className="text-xs text-[#8C867D] font-serif mt-1">
                    パスワードを入力してログインしてください
                  </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">
                      パスワード（初期: 123）
                    </label>
                    <input
                      type="password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="パスワードを入力"
                      className="w-full p-3 border-2 border-[#C69A56] rounded text-center text-lg font-mono focus:ring-2 focus:ring-[#9E2A22]"
                      autoFocus
                    />
                    {passError && (
                      <p className="text-xs font-serif text-[#9E2A22] font-bold mt-1.5 text-center">
                        ⚠️ パスワードが正しくありません。
                      </p>
                    )}
                  </div>

                  <Button variant="vermilion" size="md" className="w-full">
                    <span>ログイン</span>
                    <span>🔓</span>
                  </Button>
                </form>
              </div>
            </ChineseFrame>
          </div>
        </section>
      </SiteShell>
    )
  }

  // 2. UNLOCKED ADMIN PANEL
  return (
    <SiteShell>
      <section className="bg-[#FBF9F5] pt-10 pb-20 select-none relative min-h-screen">
        <div className="container-site relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <ChineseDivider title="萬福 メニュー管理者パネル" subtitle="ADMIN MANAGEMENT PANEL" />
          <p className="mt-2 text-center text-sm text-[#4A4640] max-w-xl mx-auto font-sans">
            月〜金曜日の日替わり定食（主菜名・サイド料理①・サイド料理②・価格・補足小字）を自由編集できます。
          </p>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="mt-4 p-3 bg-[#1E5647] text-white font-serif text-sm font-bold text-center rounded border-2 border-[#C69A56] shadow-lg animate-bounce">
              {toastMessage}
            </div>
          )}

          {/* Form */}
          <div className="mt-10 space-y-8">
            {/* スマートフォンでは横一列に収まらないので、見出しの下に操作を折り返す */}
            <div className="flex flex-col gap-4 border-b-2 border-[#9E2A22] pb-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-serif text-lg font-bold text-[#1A1816] sm:text-xl">
                月曜日〜金曜日 日替わり定食メニュー編集（全5日）
              </h3>
              <div className="flex flex-shrink-0 items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="whitespace-nowrap rounded border border-gray-400 bg-gray-200 px-4 py-2 font-serif text-xs font-bold text-[#1A1816] transition-colors hover:bg-gray-300"
                >
                  ↺ 初期化
                </button>
                <Button variant="vermilion" size="md" onClick={handleSave} disabled={isUploading || isSaving || isLoadingRemote} className="flex-1 whitespace-nowrap sm:flex-initial">
                  <span>保存してサイトに反映</span>
                  <span>💾</span>
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {menu5Days.map((item, idx) => (
                <div key={item.day} className="bg-white p-6 rounded-lg border-2 border-[#C69A56] shadow-md text-left space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1A1816]/10 pb-2">
                    <span className="font-serif text-lg font-bold text-[#9E2A22]">
                      【{item.day}】
                    </span>
                    <span className="text-xs font-serif text-[#8C867D]">
                      ID: {item.shortDay}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-12 gap-4 items-start">
                    {/* Photo Preview & Local Upload */}
                    <div className="md:col-span-5 space-y-3">
                      <label className="block text-xs font-serif font-bold text-[#1A1816]">料理画像プレビュー</label>
                      <div className="w-full aspect-[4/3] rounded border-2 border-[#C69A56] overflow-hidden bg-gray-100 shadow-inner relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>

                      {/* Local File Upload Button */}
                      <div className="p-3 bg-[#F8F5EE] border border-[#C69A56] rounded text-left space-y-2">
                        <label className="block text-xs font-serif font-bold text-[#9E2A22]">
                          📁 本地（PC/スマホ）から画像を選択
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleFileUpload(idx, e.target.files[0])
                            }
                          }}
                          className="block w-full text-xs text-[#4A4640] file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-bold file:bg-[#9E2A22] file:text-white hover:file:bg-[#8B1E17] cursor-pointer"
                        />
                        <span className="text-[10px] text-[#8C867D] block">
                          ※スマホやカメラの写真（大容量）も自動でWeb最適化圧縮されます。
                        </span>
                      </div>

                      {/* Presets */}
                      <div className="space-y-1">
                        <span className="text-[11px] text-[#8C867D] font-serif block">プリセット画像選択:</span>
                        <div className="flex flex-wrap gap-1">
                          {PRESET_IMAGES.map((preset) => (
                            <button
                              key={preset.label}
                              type="button"
                              onClick={() => handle5DaysChange(idx, 'image', preset.url)}
                              className="text-[10px] bg-[#F8F5EE] hover:bg-[#C69A56]/20 border border-[#C69A56] px-1.5 py-0.5 rounded text-[#1A1816]"
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Fields: 主菜名, サイド料理①, サイド料理②, 価格, 補足注記①, 補足注記② */}
                    <div className="md:col-span-7 space-y-3">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">主菜名（メイン料理タイトル）</label>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => handle5DaysChange(idx, 'title', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif focus:ring-2 focus:ring-[#9E2A22]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">価格（税込表示）</label>
                          <input
                            type="text"
                            value={item.price}
                            onChange={(e) => handle5DaysChange(idx, 'price', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">サイド料理①</label>
                          <input
                            type="text"
                            value={item.side1 || ''}
                            onChange={(e) => handle5DaysChange(idx, 'side1', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif"
                            placeholder="例：手作り水餃子（2個）"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">サイド料理②</label>
                          <input
                            type="text"
                            value={item.side2 || ''}
                            onChange={(e) => handle5DaysChange(idx, 'side2', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif"
                            placeholder="例：ザーサイ・スープ"
                          />
                        </div>
                      </div>

                      {/* Optional 2-Line Sub-notes (留空则前台不显示) */}
                      <div className="p-3 bg-[#F8F5EE] rounded border border-[#C69A56]/60 space-y-2">
                        <span className="block text-xs font-serif font-bold text-[#9E2A22]">
                          【任意】サイド料理下の補足小字（留空なら非表示）
                        </span>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={item.note1 || ''}
                            onChange={(e) => handle5DaysChange(idx, 'note1', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-xs font-serif bg-white"
                            placeholder="補足1（例：※ライスおかわり自由）"
                          />
                          <input
                            type="text"
                            value={item.note2 || ''}
                            onChange={(e) => handle5DaysChange(idx, 'note2', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-xs font-serif bg-white"
                            placeholder="補足2（例：※セルフコーヒー1杯無料）"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button variant="vermilion" size="lg" onClick={handleSave} disabled={isUploading || isSaving || isLoadingRemote}>
                <span>月〜金 全5日間の変更を保存</span>
                <span>💾</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
