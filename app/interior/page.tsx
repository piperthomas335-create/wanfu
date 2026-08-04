import { PageHeading } from '@/components/page-heading'
import { PhotoGallery } from '@/components/photo-gallery'
import { SiteShell } from '@/components/site-shell'

export const metadata = {
  title: '店内の様子 | 四川料理 萬福',
  description:
    '愛知県一宮市の四川料理 萬福の店内写真。掘りごたつのお座敷、宴会用の大広間、カウンター席、テーブル席、外観・駐車場までご紹介します。',
}

export default function InteriorPage() {
  return (
    <SiteShell>
      <PageHeading
        en="Interior & Seats"
        title="店内の様子"
        lead="木の温もりと、肩肘張らない居心地。お一人でも、ご家族でも、大人数でも過ごしやすい多彩なお席をご用意しています。"
      />
      <section className="container-site py-16 lg:py-24">
        <PhotoGallery />
      </section>
    </SiteShell>
  )
}
