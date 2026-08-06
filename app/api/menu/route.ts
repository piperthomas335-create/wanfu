import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'
import { DEFAULT_5DAYS_MENU, type MenuItem } from '@/lib/menu-defaults'

export type { MenuItem }

export const dynamic = 'force-dynamic'
export const revalidate = 0

function getRedisClient() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN

  if (url && token) {
    return new Redis({ url, token })
  }
  return null
}

const REDIS_KEY = 'wanfu_5days_menu_v1'


export async function GET() {
  try {
    const redis = getRedisClient()
    if (redis) {
      const data = await redis.get<MenuItem[]>(REDIS_KEY)
      if (data && Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data)
      }
    }
  } catch (e) {
    console.error('Redis GET error:', e)
  }
  return NextResponse.json(DEFAULT_5DAYS_MENU)
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: '本文を解釈できませんでした' }, { status: 400 })
  }

  if (!Array.isArray(body) || body.length === 0) {
    return NextResponse.json({ success: false, error: 'メニューの形式が不正です' }, { status: 400 })
  }

  const redis = getRedisClient()
  if (!redis) {
    // ここで success を返すと、保存できていないのに保存済みの表示が出てしまう。
    // 保管先が無いことを呼び出し側にはっきり伝える
    console.error('Upstash の接続情報が未設定のため、メニューを保存できません')
    return NextResponse.json(
      { success: false, error: 'データベース未接続のため保存できませんでした' },
      { status: 503 },
    )
  }

  try {
    await redis.set(REDIS_KEY, body)
    return NextResponse.json({ success: true, menu: body })
  } catch (error) {
    console.error('Redis POST error:', error)
    return NextResponse.json(
      { success: false, error: 'データベースへの保存に失敗しました' },
      { status: 500 },
    )
  }
}
