/**
 * 実店舗で撮影した写真のレジストリ。
 *
 * 写真を追加するときは `scripts/optimize_photos.py` で書き出したファイルを
 * `public/images/photos/` に置き、このリストに 1 行足すだけでよい。
 * 並び順がそのままギャラリーの表示順になる。
 */

export type PhotoCategory = 'seats' | 'exterior' | 'cuisine' | 'kitchen'

export type PhotoRatio = 'portrait' | 'landscape' | 'square' | 'wide'

export interface ShopPhoto {
  /** public/ からのパス */
  src: string
  /** 代替テキスト。読み上げ・画像非表示時に使われるため必ず具体的に書く */
  alt: string
  /** ギャラリーのキャプション見出し。省略時は alt が使われる */
  title?: string
  /** 補足の一文。省略可 */
  caption?: string
  category: PhotoCategory
  /** グリッド内での縦横比。元画像の比率に近いものを選ぶ */
  ratio: PhotoRatio
  /** 大きく見せたい写真。ギャラリー先頭とトップページの抜粋に使われる */
  featured?: boolean
}

export const photoCategories: { id: PhotoCategory; label: string; en: string }[] = [
  { id: 'seats', label: '席・空間', en: 'SEATS' },
  { id: 'exterior', label: '外観・入口', en: 'EXTERIOR' },
  { id: 'cuisine', label: 'お料理', en: 'CUISINE' },
  { id: 'kitchen', label: '厨房・作り手', en: 'KITCHEN' },
]

export const ratioClass: Record<PhotoRatio, string> = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
}

/**
 * 実写真に差し替えるまでの暫定リスト。
 * 撮影データが入り次第、この配列をまるごと置き換える。
 */
export const shopPhotos: ShopPhoto[] = [
  {
    src: '/images/interior-entry.png',
    alt: '暖簾をくぐった先に広がる萬福の店内',
    title: '暖簾の奥に広がる店内',
    caption: '木の温もりを感じる、落ち着いた空間。',
    category: 'seats',
    ratio: 'portrait',
    featured: true,
  },
  {
    src: '/images/interior-tables.png',
    alt: '萬福のゆったりとしたテーブル席',
    title: 'ゆったりとしたテーブル席',
    caption: 'ご家族から仕事仲間とのお食事まで。',
    category: 'seats',
    ratio: 'landscape',
    featured: true,
  },
  {
    src: '/images/interior-zashiki.png',
    alt: '萬福のお座敷席',
    title: '寛ぎのお座敷',
    caption: '小さなお子様連れにも人気のお席です。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/interior-collage.png',
    alt: '長テーブルを設営した宴会時の萬福店内',
    title: '宴会にも対応',
    caption: '長テーブルの設営にも柔軟に対応します。',
    category: 'seats',
    ratio: 'square',
  },
  {
    src: '/images/interior-counter.png',
    alt: '萬福のカウンター席',
    title: '気軽なカウンター席',
    caption: 'お一人でのランチや晩酌にも。',
    category: 'seats',
    ratio: 'landscape',
  },
]

/** そのカテゴリの写真が 1 枚でもある場合のみタブとして出す */
export function availableCategories(photos: ShopPhoto[] = shopPhotos) {
  return photoCategories.filter(c => photos.some(p => p.category === c.id))
}

export function photosByCategory(category: PhotoCategory, photos: ShopPhoto[] = shopPhotos) {
  return photos.filter(p => p.category === category)
}

export function featuredPhotos(limit: number, photos: ShopPhoto[] = shopPhotos) {
  const featured = photos.filter(p => p.featured)
  // featured が足りない場合は先頭から補う
  return [...featured, ...photos.filter(p => !p.featured)].slice(0, limit)
}
