import { img } from '@/lib/site-data'
const images=[img.maodu,img.guobaorou,img.shoronpo,img.mapo,img.chahan,img.shuizhu,img.gyoza,img.yuxiang]
function Track({reverse=false}:{reverse?:boolean}){const doubled=[...images,...images];return <div className={`marquee-track ${reverse?'reverse':''}`}>{doubled.map((src,i)=><div className="marquee-item" key={`${src}-${i}`}><img src={src} alt="" aria-hidden="true" loading={i<5?'eager':'lazy'}/></div>)}</div>}
export function FoodMarquee(){return <div className="marquee" aria-label="萬福の料理写真"><Track/><Track reverse/></div>}
