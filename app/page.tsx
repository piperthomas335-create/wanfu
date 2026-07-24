import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SellingPoints } from '@/components/selling-points'
import { LunchSection } from '@/components/lunch-section'
import { SignatureDishes } from '@/components/signature-dishes'
import { GrandMenu } from '@/components/grand-menu'
import { CourseSection } from '@/components/course-section'
import { AccessSection } from '@/components/access-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SellingPoints />
        <LunchSection />
        <SignatureDishes />
        <GrandMenu />
        <CourseSection />
        <AccessSection />
      </main>
      <SiteFooter />
      <MobileBottomBar />
    </>
  )
}
