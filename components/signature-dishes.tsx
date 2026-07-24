import { signatureDishes, gridDishes } from '@/lib/site-data'
import { SpiceLevel } from '@/components/spice-level'

export function SignatureDishes() {
  const [hero, ...rest] = signatureDishes

  return (
    <section id="signature" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-brand-red">
            SIGNATURE
          </p>
          <h2 className="mt-2 font-serif text-3xl font-black text-brand-ink text-balance sm:text-4xl">
            萬福の名物料理
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            シビれる本格四川から、辛くない大人気メニューまで。麻辣好きも、ご家族連れも満足の看板料理。
          </p>
        </div>

        {/* Hero dish */}
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-2">
          <div className="relative min-h-64">
            <img
              src={hero.image || '/placeholder.svg'}
              alt={`${hero.name}（${hero.sub}）`}
              className="h-full w-full object-cover"
            />
            {hero.tag && (
              <span className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1.5 text-xs font-black text-brand-gold shadow">
                🌶 {hero.tag}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <SpiceLevel level={hero.spice} />
              <span className="text-xs font-bold text-muted-foreground">
                {hero.sub}
              </span>
            </div>
            <h3 className="mt-3 font-serif text-4xl font-black text-brand-ink">
              {hero.name}
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-foreground/80">
              {hero.desc}
            </p>
            <p className="mt-6 inline-flex w-fit items-center rounded-full bg-brand-red/10 px-4 py-2 text-sm font-black text-brand-red">
              シビカラ好き必見の一皿
            </p>
          </div>
        </div>

        {/* Other signatures */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {rest.map((dish) => (
            <article
              key={dish.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={dish.image || '/placeholder.svg'}
                  alt={`${dish.name}（${dish.sub}）`}
                  className="h-full w-full object-cover"
                />
                {dish.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-brand-red-dark/90 px-2.5 py-1 text-[11px] font-black text-brand-gold">
                    {dish.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-serif text-xl font-black text-brand-ink">
                    {dish.name}
                  </h3>
                  <SpiceLevel level={dish.spice} />
                </div>
                <p className="text-xs font-bold text-muted-foreground">{dish.sub}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {dish.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Popular grid */}
        <h3 className="mb-6 mt-14 text-center font-serif text-2xl font-black text-brand-ink">
          人気の一品料理
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gridDishes.map((dish) => (
            <article
              key={dish.name}
              className="flex gap-4 rounded-2xl border border-border bg-card p-3 shadow-sm"
            >
              <img
                src={dish.image || '/placeholder.svg'}
                alt={`${dish.name}（${dish.sub}）`}
                className="h-24 w-24 flex-shrink-0 rounded-xl object-cover"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-black text-brand-ink">{dish.name}</h4>
                  <SpiceLevel level={dish.spice} />
                </div>
                <p className="text-[11px] font-bold text-muted-foreground">
                  {dish.sub}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/75">
                  {dish.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
