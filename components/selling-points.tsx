import { Car, Users, Flame, Clock } from 'lucide-react'

const points = [
  {
    icon: Car,
    title: '駐車場22台・車で楽々',
    desc: '西尾張中央道沿い、専用駐車場22台完備。ドライブの途中やお仕事帰りにも立ち寄りやすい立地です。',
  },
  {
    icon: Flame,
    title: '正宗の本格四川の味',
    desc: '成都仕込みの麻辣を効かせた麻婆豆腐や水煮牛肉。辛くない中華も豊富で、辛さが苦手な方も安心。',
  },
  {
    icon: Users,
    title: '90席・お座敷個室完備',
    desc: 'テーブル席に加え、お座敷・個室を用意。ご家族のお食事から企業のご宴会まで幅広く対応します。',
  },
  {
    icon: Clock,
    title: '深夜24時まで年中無休',
    desc: 'ランチ11:00〜、ディナーは深夜24:00まで。お昼も夜も、いつでも本格中華をお楽しみいただけます。',
  },
]

export function SellingPoints() {
  return (
    <section id="points" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-brand-red">
            OUR STRENGTHS
          </p>
          <h2 className="mt-2 font-serif text-3xl font-black text-brand-ink sm:text-4xl">
            萬福が選ばれる4つの理由
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-brand-gold">
                <p.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-black text-brand-ink text-balance">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
