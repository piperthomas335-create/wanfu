import { Users, PartyPopper, Sofa } from 'lucide-react'
import { img } from '@/lib/site-data'

const courses = [
  { grade: 'A', people: '2〜3名', price: '3,800', note: '八宝菜・エビマヨ・麻婆豆腐・餃子 ほか' },
  { grade: 'B', people: '2〜3名', price: '3,800', note: '青椒肉絲・酢豚・小籠包 ほか' },
  { grade: 'C', people: '2〜3名', price: '3,800', note: 'エビチリ・油淋鶏・回鍋肉・春巻 ほか' },
  { grade: 'D', people: '3〜5名', price: '6,000', note: '牛肉と山芋の黒胡椒炒め・海三鮮炒め ほか' },
  { grade: 'E', people: '3〜5名', price: '6,000', note: 'イカと野菜炒め・エビチリ・棒棒鶏 ほか' },
  { grade: 'F', people: '3〜5名', price: '6,000', note: '回鍋肉・唐揚げ・エビ蒸し餃子 ほか' },
]

export function CourseSection() {
  return (
    <section id="course" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-brand-red">
            BANQUET & BUFFET
          </p>
          <h2 className="mt-2 font-serif text-3xl font-black text-brand-ink text-balance sm:text-4xl">
            ご宴会・食べ飲み放題
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            82席・お座敷・個室完備。ご家族のお祝いから会社の宴会まで、人数と予算に合わせてお選びいただけます。
          </p>
        </div>

        {/* Buffet highlight */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border-2 border-brand-gold bg-brand-red p-8 text-center text-[oklch(0.96_0.02_85)]">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-black text-brand-red-dark">
              <PartyPopper className="h-4 w-4" />
              120分制・158種類のオーダーバイキング
            </p>
            <p className="mt-4 text-sm font-bold text-brand-gold">全ドリンク付き 食べ飲み放題</p>
            <p className="mt-1 font-serif text-6xl font-black text-[oklch(0.98_0.02_85)]">
              4,000<span className="text-2xl">円</span>
            </p>
            <p className="mt-1 text-xs">（税込4,400円／4名様以上で承ります）</p>
            <p className="mt-4 text-sm">
              月〜木限定 ソフトドリンク付き 食べ飲み放題は
              <span className="font-black text-brand-gold"> 3,800円</span>（税込）
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <img
              src={img.menuFamily || '/placeholder.svg'}
              alt="ファミリーコースと食べ飲み放題のメニュー"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Course grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.grade}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-red font-serif text-2xl font-black text-brand-gold">
                {c.grade}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    {c.people}
                  </span>
                </div>
                <p className="font-serif text-xl font-black text-brand-ink">
                  {c.price}
                  <span className="text-sm">円（税込）</span>
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-foreground/70">
                  {c.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-brand-gold/50 bg-secondary p-5 text-center">
          <Sofa className="h-6 w-6 flex-shrink-0 text-brand-red" />
          <p className="text-sm font-bold text-brand-ink text-pretty">
            お座敷・個室のご予約はお電話にて承ります。企業様のご宴会・大人数のご利用もお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  )
}
