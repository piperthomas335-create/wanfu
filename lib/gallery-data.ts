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

/**
 * 撮影済みの写真の全件。ここに載っていてもページに出るとは限らない。
 * 実際に並ぶのは下の `curatedPhotos`（= `featured` を付けたもの）だけ。
 */
export const shopPhotos: ShopPhoto[] = [
  // ── 席・空間 ────────────────────────────────────────────
  {
    src: '/images/photos/dsc07163.jpg',
    alt: '障子の間から見える、生花と茶器を飾った棚',
    title: '設えに宿る、四川の面影',
    caption: '螺鈿の四季飾り、円窓の飾り棚、季節の花。細部まで整えてお迎えします。',
    category: 'seats',
    ratio: 'landscape',
    featured: true,
  },
  {
    src: '/images/photos/dsc07128.jpg',
    alt: '春夏秋冬の螺鈿飾りを掛けた壁際の掘りごたつ座敷',
    title: '春夏秋冬を掛けた座敷',
    caption: '掘りごたつでゆったり。足を伸ばしてお過ごしいただけます。',
    category: 'seats',
    ratio: 'landscape',
    featured: true,
  },
  {
    src: '/images/photos/dsc07226.jpg',
    alt: '座布団を並べた宴会用の長テーブル座敷',
    title: '宴会の大広間',
    caption: '襖を開け放てば一続きの大広間に。最大85名様までの宴会を承ります。',
    category: 'seats',
    ratio: 'landscape',
    featured: true,
  },
  {
    src: '/images/photos/dsc07121.jpg',
    alt: '生花を飾った棚と6番テーブルの掘りごたつ座敷',
    title: '落ち着いたお座敷',
    caption: '少人数のお食事に。仕切りを立てれば半個室としてもお使いいただけます。',
    category: 'seats',
    ratio: 'portrait',
  },
  {
    src: '/images/photos/dsc07138.jpg',
    alt: '障子越しに覗く、生花と京劇人形を飾った棚',
    title: '障子の向こうに',
    caption: '格子の隙間からのぞく、静かな設え。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07031.jpg',
    alt: '簾と障子で仕切られた掘りごたつ座敷の通路',
    title: '簾で仕切るお座敷',
    caption: '簾と障子がほどよく視線を遮り、隣を気にせずお過ごしいただけます。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07033.jpg',
    alt: '簾で仕切られた座敷と壁のタペストリー',
    title: 'それぞれの居場所',
    caption: 'ご家族連れからお一人様まで、席の形をいくつもご用意しています。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07146.jpg',
    alt: '簾と障子に囲まれた奥の掘りごたつ座敷',
    title: '奥まったお席',
    caption: '入口から離れた落ち着ける一角です。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07224.jpg',
    alt: '長テーブルを正面から見た宴会座敷',
    title: '一続きの長卓',
    caption: '端から端まで見渡せる長卓。顔を合わせての乾杯にどうぞ。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07229.jpg',
    alt: '奥行きのある宴会用長テーブル座敷',
    title: '大人数のご宴会に',
    caption: '会社の集まりや法要後のお食事にもご利用いただいています。',
    category: 'seats',
    ratio: 'portrait',
  },
  {
    src: '/images/photos/dsc07081.jpg',
    alt: '石積み風の壁に写真を飾った長椅子の座敷',
    title: '石壁の宴会席',
    caption: '背もたれ付きの長椅子で、長い宴席でも疲れにくいお部屋です。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07075.jpg',
    alt: 'ひまわり柄のステンドグラス照明が灯る石壁の座敷',
    title: 'あたたかな灯りの下で',
    caption: 'ステンドグラスの照明が、料理も人の顔もやわらかく照らします。',
    category: 'seats',
    ratio: 'portrait',
  },
  {
    src: '/images/photos/dsc07044.jpg',
    alt: 'ステンドグラスの欄間とピンクの暖簾がある個室座敷',
    title: '仕切られた小上がり',
    caption: '4〜6名様にちょうどよい、囲まれた小上がりのお席。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07151.jpg',
    alt: '暖簾で仕切られた小上がりの掘りごたつ席',
    title: '暖簾をくぐって',
    caption: 'ひと呼吸おいた先の、こぢんまりとしたお席です。',
    category: 'seats',
    ratio: 'portrait',
  },
  {
    src: '/images/photos/dsc07049.jpg',
    alt: 'ステンドグラスの欄間と和風照明のあるカウンター席',
    title: 'お一人様のカウンター',
    caption: 'お昼のラーメンにも、仕事帰りの一杯にも。気兼ねなくどうぞ。',
    category: 'seats',
    ratio: 'landscape',
    featured: true,
  },
  {
    src: '/images/photos/dsc07173.jpg',
    alt: '窓に面したカウンター席と色鮮やかなステンドグラスの欄間',
    title: '窓辺のカウンター',
    caption: '簾ごしのやわらかい光が入る、明るい席です。',
    category: 'seats',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07114.jpg',
    alt: '和風のペンダント照明が並ぶテーブル席のホール',
    title: 'テーブル席',
    caption: '大皿を囲んで取り分けながら。ご家族でのお食事に。',
    category: 'seats',
    ratio: 'landscape',
    featured: true,
  },
  {
    src: '/images/photos/dsc07072.jpg',
    alt: '簾のかかった窓際のテーブル席',
    title: '窓際のテーブル',
    caption: '雷紋のタイルと簾。昼下がりの光が差し込みます。',
    category: 'seats',
    ratio: 'portrait',
  },
  {
    src: '/images/photos/dsc07099.jpg',
    alt: '漫画や雑誌を並べた本棚と招き猫の置かれた店内',
    title: '待ち時間も退屈しないように',
    caption: '漫画と雑誌を置いています。お子様連れの方にもどうぞ。',
    category: 'seats',
    ratio: 'landscape',
  },

  // ── 外観・入口 ──────────────────────────────────────────
  {
    src: '/images/photos/dsc07189.jpg',
    alt: '道路沿いに立つ萬福の店舗とポール看板',
    title: '目印は赤いポール看板',
    caption: '県道沿い、赤と黒の切妻屋根が目印です。',
    category: 'exterior',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07221.jpg',
    alt: '広い駐車場を備えた萬福の店舗外観',
    title: '駐車場22台完備',
    caption: 'お車でお越しの方もご安心ください。大型のお車も停められます。',
    category: 'exterior',
    ratio: 'landscape',
    featured: true,
  },
  {
    src: '/images/photos/dsc07211.jpg',
    alt: '植え込み越しに見上げる萬福の正面看板',
    title: '萬福の看板',
    caption: '「本場四川料理が安くて美味しい！」——変わらずお出ししています。',
    category: 'exterior',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07193.jpg',
    alt: '交差点側から見た萬福の店舗と駐車場',
    title: '通りから見た店構え',
    caption: '交差点のすぐそば。はじめての方にも分かりやすい立地です。',
    category: 'exterior',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07179.jpg',
    alt: '朱色の柱と白い暖簾がかかる萬福の玄関',
    title: '朱の柱と白暖簾',
    caption: '市松のタイルを踏んで、暖簾の奥へ。',
    category: 'exterior',
    ratio: 'landscape',
  },
  {
    src: '/images/photos/dsc07181.jpg',
    alt: '営業時間を掲げた萬福の入口ガラス扉',
    title: '入口のご案内',
    caption: '11:00〜14:30 / 17:00〜24:00、年中無休で営業しています。',
    category: 'exterior',
    ratio: 'landscape',
  },
]

/**
 * 店舗情報ページに実際に並べる厳選分。
 *
 * 全部を並べると見る側の負担が大きいので、席の種類と外観が
 * ひと通り伝わる最小限に絞ってある。入れ替えたいときは
 * 上のリストで `featured` を付け替えるだけでよい。
 * 並び順は `shopPhotos` の順序をそのまま引き継ぐ。
 */
export const curatedPhotos = shopPhotos.filter(p => p.featured)
