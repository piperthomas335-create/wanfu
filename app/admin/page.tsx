'use client'

import React, { useState, useEffect } from 'react'
import { SiteShell } from '@/components/site-shell'
import { ChineseDivider } from '@/components/chinese-frame'
import { Button } from '@/components/ui/button'
import { img } from '@/lib/site-data'
import {
  MenuItem,
  getStored5DaysMenu,
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
  const [menu5Days, setMenu5Days] = useState<MenuItem[]>([])
  const [toastMessage, setToastMessage] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    setMenu5Days(getStored5DaysMenu())
  }, [])

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

  const handleSave = () => {
    saveStored5DaysMenu(menu5Days)
    showToast('✅ 月〜金 5日間の定食メニュー（主菜・小菜①・小菜②・価格）を保存・更新しました！')
  }

  const handleReset = () => {
    const defaultData = resetStored5DaysMenu()
    setMenu5Days(defaultData)
    showToast('↺ メニューを初期状態（油淋鶏・麻婆豆腐・回鍋肉・黒酢豚・担々麺）にリセットしました！')
  }

  return (
    <SiteShell>
      <section className="bg-[#FBF9F5] pt-10 pb-20 select-none relative min-h-screen">
        <div className="container-site relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <ChineseDivider title="萬福 メニュー管理者パネル" subtitle="ADMIN MANAGEMENT PANEL" />
          <p className="mt-2 text-center text-sm text-[#4A4640] max-w-xl mx-auto font-sans">
            月〜金曜日の日替わり定食（主菜名・小菜①・小菜②・価格・画像）を自由に編集できます。
          </p>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="mt-4 p-3 bg-[#1E5647] text-white font-serif text-sm font-bold text-center rounded border-2 border-[#C69A56] shadow-lg animate-bounce">
              {toastMessage}
            </div>
          )}

          {/* Form */}
          <div className="mt-10 space-y-8">
            <div className="flex items-center justify-between border-b-2 border-[#9E2A22] pb-3">
              <h3 className="font-serif text-xl font-bold text-[#1A1816]">
                月曜日〜金曜日 日替わり定食メニュー編集（全5日）
              </h3>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-[#1A1816] font-serif text-xs font-bold rounded border border-gray-400 transition-colors"
                >
                  ↺ 初期化（リセット）
                </button>
                <Button variant="vermilion" size="md" onClick={handleSave} disabled={isUploading}>
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

                    {/* Fields: 主菜名, 小菜①, 小菜②, 価格, タグ */}
                    <div className="md:col-span-7 space-y-3">
                      <div>
                        <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">主菜名（メイン料理タイトル）</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handle5DaysChange(idx, 'title', e.target.value)}
                          className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif focus:ring-2 focus:ring-[#9E2A22]"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">小菜①（セット料理1）</label>
                          <input
                            type="text"
                            value={item.side1 || ''}
                            onChange={(e) => handle5DaysChange(idx, 'side1', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif"
                            placeholder="例：手作り水餃子（2個）"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">小菜②（セット料理2）</label>
                          <input
                            type="text"
                            value={item.side2 || ''}
                            onChange={(e) => handle5DaysChange(idx, 'side2', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif"
                            placeholder="例：ザーサイ・スープ"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">価格（税込表示）</label>
                          <input
                            type="text"
                            value={item.price}
                            onChange={(e) => handle5DaysChange(idx, 'price', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-serif font-bold text-[#1A1816] mb-1">特徴タグ</label>
                          <input
                            type="text"
                            value={item.tag || ''}
                            onChange={(e) => handle5DaysChange(idx, 'tag', e.target.value)}
                            className="w-full p-2 border border-[#C69A56] rounded text-sm font-serif"
                            placeholder="例：月曜日人気No.1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button variant="vermilion" size="lg" onClick={handleSave} disabled={isUploading}>
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
