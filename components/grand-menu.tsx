import { Utensils, ExternalLink } from 'lucide-react'
import { menuBooks } from '@/lib/site-data'

export function GrandMenu() {
  return (
    <section id="menu" className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="font-serif text-sm font-bold tracking-[0.3em] text-brand-red">
            GRAND MENU
          </p>
          <h2 className="mt-2 font-serif text-3xl font-black text-brand-ink text-balance sm:text-4xl">
            グランドメニュー
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            前菜・麺類・海鮮・コース・お飲み物まで、多彩なラインナップ。画像をタップすると拡大してご覧いただけます。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuBooks.map((book) => (
            <a
              key={book.label}
              href={book.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2 border-b border-border bg-brand-red px-4 py-2.5">
                <span className="flex items-center gap-2 text-sm font-black text-brand-gold">
                  <Utensils className="h-4 w-4" />
                  {book.label}
                </span>
                <ExternalLink className="h-4 w-4 text-brand-gold/80" />
              </div>
              <div className="overflow-hidden">
                <img
                  src={book.image || '/placeholder.svg'}
                  alt={book.alt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          ※ 価格・内容は変更になる場合がございます。最新情報は店舗までお問い合わせください。
        </p>
      </div>
    </section>
  )
}
