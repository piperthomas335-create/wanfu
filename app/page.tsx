import Link from 'next/link'
import { FoodMarquee } from '@/components/food-marquee'
import { SiteShell } from '@/components/site-shell'
import { WanfuLogo } from '@/components/wanfu-logo'
import { ChineseFrame, ChineseDivider, WanziBadge } from '@/components/chinese-frame'
import { img, news } from '@/lib/site-data'

const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link className="arrow-link group" href={href}>
    <span>{children}</span>
    <span className="arrow-icon" aria-hidden>→</span>
  </Link>
)

export default function Page() {
  return (
    <SiteShell>
      {/* Hero Section with Marquee & Traditional Chinese Framed Card Overlay */}
      <section className="relative bg-white pb-12 lg:pb-24">
        <FoodMarquee />
        <div className="relative z-10 mx-4 -mt-10 sm:mx-auto sm:max-w-xl lg:absolute lg:bottom-12 lg:right-[8%] lg:mt-0">
          <ChineseFrame borderColor="gold" className="!p-8 sm:!p-10 border-l-4 border-l-[#9E2A22]">
            <div className="mb-4 flex items-center justify-between">
              <span className="eyebrow">AUTHENTIC SICHUAN CUISINE</span>
              <span className="seal-badge">萬福名物</span>
            </div>
            
            <div className="my-6 flex justify-center">
              <WanfuLogo variant="authentic" className="scale-90 sm:scale-100" />
            </div>

            <h1 className="display-title mt-6 text-2xl font-bold leading-tight sm:text-3xl text-[#1A1816] text-center sm:text-left">
              今までに食べたことがない、<br />
              鮮烈な四川の味。
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-[#4A4640]">
              花椒の香りと痺れ、唐辛子の熱、幾重にも重なる秘伝の旨味。萬福（MAN FUKU）は、本場四川の正統派と親しみある町中華を、心ゆくまで楽しめる一軒です。
            </p>
            <div className="mt-8">
              <ArrowLink href="/charm">萬福の魅力を見る</ArrowLink>
            </div>
          </ChineseFrame>
        </div>
      </section>

      {/* News & Announcements Section */}
      <section className="border-y border-[#1A1816]/10 bg-[#F8F6F1] py-12">
        <div className="container-site grid gap-6 md:grid-cols-[200px_1fr]">
          <div className="flex items-center gap-3">
            <span className="h-4 w-1 bg-[#9E2A22]" />
            <h2 className="font-serif text-lg font-bold text-[#1A1816]">お知らせ</h2>
          </div>
          <div>
            {news.map(n => (
              <div key={n.text} className="grid gap-2 border-b border-[#1A1816]/10 py-3.5 text-sm sm:grid-cols-[130px_1fr] hover:bg-white/40 px-2 transition-colors">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#9E2A22]">{n.date}</span>
                <span className="text-[#1A1816]/90">{n.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section with Chinese Divider, Mapo Tofu Image & Wanzi Badge */}
      <section className="py-24 lg:py-36">
        <div className="container-site mb-12">
          <ChineseDivider title="本場の香りを、日常の食卓へ" subtitle="OUR PHILOSOPHY" />
        </div>
        <div className="container-site editorial-grid items-center gap-8">
          <div className="col-span-7 relative">
            <img className="editorial-image rounded-sm border border-[#C69A56]/30 shadow-2xl" src={img.mapo} alt="萬福の四川麻婆豆腐" />
            {/* Mapo Tofu Mincho Vertical Badge with Wanzi Pattern Border */}
            <div className="absolute -bottom-6 -left-6 hidden md:block z-20">
              <WanziBadge text="麻婆豆腐" />
            </div>
          </div>
          <div className="col-span-5 border border-[#1A1816]/10 bg-[#F8F6F1] p-8 shadow-xl lg:-ml-12 lg:p-14 border-t-4 border-t-[#9E2A22] relative">
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C69A56]" />
            <span className="eyebrow">CHEF'S DEDICATION</span>
            <h2 className="display-title mt-4 text-3xl font-bold text-[#1A1816]">
              五味八珍が織りなす、<br />
              深奥なる四川の刻。
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-[#4A4640]">
              正宗麻婆豆腐、水煮牛肉、麻辣毛肚。鮮烈な本格四川の味わいと、ご家族で楽しめる親しみ深い炒飯や点心を、ひとつの温かな食卓へ。
            </p>
            <div className="mt-8">
              <ArrowLink href="/charm">こだわりを読む</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Showcase Section */}
      <section className="bg-white py-24 border-y border-[#1A1816]/10">
        <div className="container-site">
          <ChineseDivider title="萬福の看板料理" subtitle="SPECIALTY CUISINE" />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              [img.shuizhu, '水煮牛肉', '牛肉の四川辛味煮込み', '🌶️🌶️🌶️ 麻辣'],
              [img.guobaorou, '鍋包肉', '東北風豚ロース甘酢揚げ', '不辛 甘酸っぱい'],
              [img.shoronpo, '小籠包', '肉汁溢れる手包み小籠包', '人気点心']
            ].map(([src, name, desc, badge]) => (
              <figure key={name} className="group overflow-hidden border border-[#1A1816]/10 bg-[#F8F6F1] shadow-sm transition-all hover:-translate-y-1 hover:shadow-md relative">
                <div className="absolute top-2 left-2 z-10 w-3 h-3 border-t-2 border-l-2 border-[#C69A56]" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={src} alt={name} />
                  <span className="absolute right-3 top-3 seal-badge shadow">
                    {badge}
                  </span>
                </div>
                <figcaption className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#1A1816]">{name}</h3>
                  <p className="mt-1 text-xs text-[#8C867D]">{desc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-[#1A1816]/10 pt-4 text-xs font-bold text-[#9E2A22] group-hover:translate-x-1 transition-transform">
                    <span>詳細を見る</span>
                    <span>→</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-sm">
            <ArrowLink href="/menu">お料理一覧を見る</ArrowLink>
          </div>
        </div>
      </section>

      {/* Gathering & Atmosphere Section */}
      <section className="py-24 lg:py-36">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">GATHERING & ROOMS</span>
            <h2 className="display-title mt-4 text-3xl font-bold text-[#1A1816]">
              集う時間を、<br />
              あたたかな一皿と。
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-[#4A4640]">
              総席数82席の広い店内には、テーブル席・お座敷・プライベート個室をご用意。ご家族の団らんから企業宴会・飲み放題コースまで、まごころ込めてお迎えします。
            </p>
            <div className="mt-9 max-w-sm">
              <ArrowLink href="/course">宴会・コース案内</ArrowLink>
            </div>
          </div>
          <div className="relative">
            <img className="aspect-[4/3] w-full rounded-sm object-cover shadow-xl border border-[#1A1816]/10" src={img.interiorTables} alt="萬福のテーブル席" />
            <div className="absolute -top-4 -right-4 rounded-sm bg-[#1E5647] p-4 text-[#F8F6F1] shadow-lg border border-[#C69A56]/40">
              <span className="font-serif text-xs font-bold tracking-widest">全82席 / 個室完備</span>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
