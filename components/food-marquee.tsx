import { img } from '@/lib/site-data'

const topRow = [img.maodu, img.guobaorou, img.shoronpo, img.mapo, img.chahan, img.shuizhu, img.gyoza, img.yuxiang]
const bottomRow = [img.gyoza, img.yuxiang, img.shuizhu, img.chahan, img.mapo, img.shoronpo, img.guobaorou, img.maodu]

function Track({ images, variant }: { images: string[]; variant: 'top' | 'bottom' }) {
  const doubled = [...images, ...images]
  return (
    <div className={`marquee-track marquee-track-${variant}`}>
      {doubled.map((src, index) => (
        <div className="marquee-item" key={`${variant}-${src}-${index}`}>
          <img src={src} alt="" aria-hidden="true" loading={index < 6 ? 'eager' : 'lazy'} />
        </div>
      ))}
    </div>
  )
}

export function FoodMarquee() {
  return (
    <div className="marquee" aria-label="萬福の料理写真">
      <Track images={topRow} variant="top" />
      <Track images={bottomRow} variant="bottom" />
    </div>
  )
}
