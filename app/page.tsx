import Courses from "@/components/homePage/Courses"
import Subscription from "@/components/homePage/Subscription/subscription"
import HeroSection from '@/components/Home/HeroSection'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Courses />
      <Subscription />
    </main>
  )
}
