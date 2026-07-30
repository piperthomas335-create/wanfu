import Link from 'next/link'
import { FoodMarquee } from '@/components/food-marquee'
import { SiteShell } from '@/components/site-shell'
import { VideoHero } from '@/components/video-hero'
import { ChineseDivider, WanziBadge } from '@/components/chinese-frame'
import { img, news } from '@/lib/site-data'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <SiteShell>
      {/* 1. Cinematic Dual Video Hero Banner */}
      <VideoHero />

      {/* 2. News & Announcements Section */}
      <section className="border-y border-[#1A1816]/10 bg-[#FBF9F5] py-8 sm:py-10 select-none relative">
        {/* Low-key subtle dot texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#C69A56_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="container-site relative z-10 grid gap-4 md:grid-cols-[180px_1fr]">
          <div className="flex items-center gap-3">
            <span className="h-4 w-1 bg-[#9E2A22]" />
            <h2 className="font-serif text-lg font-bold text-[#1A1816]">お知らせ</h2>
          </div>
          <div>
            {news.map(n => (
              <div key={n.text} className="grid gap-2 border-b border-[#1A1816]/10 py-3 text-sm sm:grid-cols-[120px_1fr] hover:bg-white/80 px-2 transition-colors">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#9E2A22]">{n.date}</span>
                <span className="text-[#1A1816]/90 text-left">{n.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className="py-12 sm:py-16 bg-[#F8F5EE] select-none border-b border-[#1A1816]/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C69A56_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="container-site relative z-10 mb-8">
          <ChineseDivider title="本場の香りを、日常の食卓へ" subtitle="OUR PHILOSOPHY" />
        </div>
        <div className="container-site relative z-10 editorial-grid items-center gap-8">
          <div className="col-span-7 relative">
            <img className="editorial-image rounded-sm border-2 border-[#C69A56] shadow-2xl" src={img.mapo} alt="萬福の四川麻婆豆腐" />
            <div className="absolute -bottom-6 -left-6 hidden md:block z-20">
              <WanziBadge text="麻婆豆腐" />
            </div>
          </div>
          <div className="col-span-5 border-2 border-[#C69A56] bg-white p-8 shadow-xl lg:-ml-12 lg:p-10 border-t-4 border-t-[#9E2A22] relative text-left">
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C69A56]" />
            <span className="eyebrow">CHEF'S DEDICATION</span>
            <h2 className="display-title mt-3 text-2xl sm:text-3xl font-bold text-[#1A1816]">
              五味八珍が織りなす、<br />
              深奥なる四川の刻。
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#4A4640]">
              正宗麻婆豆腐、水煮牛肉、麻辣毛肚。鮮烈な本格四川の味わい与、ご家族で楽しめる親しみ深い炒飯や点心を、ひとつの温かな食卓へ。
            </p>
            <div className="mt-6">
              <Link href="/charm">
                <Button variant="vermilion" size="sm">
                  <span>こだわりを読む</span>
                  <span>→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Framer Motion Food Marquee Gallery */}
      <FoodMarquee />

      {/* 5. Cuisine Showcase Section */}
      <section className="bg-[#FBF9F5] py-12 sm:py-16 border-b border-[#1A1816]/10 select-none relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C69A56_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="container-site relative z-10">
          <ChineseDivider title="萬福の看板料理" subtitle="SPECIALTY CUISINE" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [img.shuizhu, '水煮牛肉', '牛肉の四川辛味煮込み', '🌶️🌶️🌶️ 麻辣'],
              [img.guobaorou, '鍋包肉', '東北風豚ロース甘酢揚げ', '不辛 甘酸っぱい'],
              [img.shoronpo, '小籠包', '肉汁溢れる手包み小籠包', '人気点心']
            ].map(([src, name, desc, badge]) => (
              <figure key={name} className="group overflow-hidden border-2 border-[#C69A56] bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl relative rounded-md">
                <div className="absolute top-2 left-2 z-10 w-3 h-3 border-t-2 border-l-2 border-[#C69A56]" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={src} alt={name} />
                  <span className="absolute right-3 top-3 seal-badge shadow">
                    {badge}
                  </span>
                </div>
                <figcaption className="p-5 text-left">
                  <h3 className="font-serif text-xl font-bold text-[#1A1816]">{name}</h3>
                  <p className="mt-1 text-xs text-[#8C867D]">{desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gathering & Atmosphere Section */}
      <section className="py-12 sm:py-16 bg-[#F8F5EE] select-none relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C69A56_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="container-site relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="text-left">
            <span className="eyebrow">GATHERING & ROOMS</span>
            <h2 className="display-title mt-3 text-2xl sm:text-3xl font-bold text-[#1A1816]">
              集う時間を、<br />
              あたたかな一皿と。
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#4A4640]">
              総席数82席の広い店内には、テーブル席・お座敷・プライベート個室をご用意。ご家族の団らんから企業宴会・飲み放題コースまで、まごころ込めてお迎えします。
            </p>
            <div className="mt-8 max-w-sm">
              <Link href="/course">
                <Button variant="vermilion" size="md">
                  <span>宴会・コース案内</span>
                  <span>→</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img className="aspect-[4/3] w-full rounded-sm object-cover shadow-xl border-2 border-[#C69A56]" src={img.interiorTables} alt="萬福のテーブル席" />
            <div className="absolute -top-3 -right-3 rounded-sm bg-[#1E5647] p-3.5 text-[#F8F6F1] shadow-lg border-2 border-[#C69A56]">
              <span className="font-serif text-xs font-bold tracking-widest">全82席 / 個室完備</span>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
