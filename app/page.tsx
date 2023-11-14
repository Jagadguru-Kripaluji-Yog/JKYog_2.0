import Courses from "@/components/homePage/Courses"
import Subscription from "@/components/homePage/Subscription/subscription"
import Meet from "@/components/homePage/meet/meet"
import Initiatives from "@/components/homePage/initiatives/initiatives"
import Book from "@/components/homePage/book/Book"
import Blog from "@/components/homePage/blog/Blog"
import Footer from "@/components/homePage/footer/Footer"
import Mission from "@/components/homePage/mission/mission"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Mission />
      <Courses />
      <Subscription />
      <Meet />
      <Initiatives />
      <Book />
      <Blog />
      <Footer />
    </main>
  )
}
