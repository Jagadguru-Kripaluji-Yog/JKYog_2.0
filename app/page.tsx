import Courses from "@/src/components/home-page/Courses";
import Subscription from "@/src/components/home-page/Subscription/subscription";
import Meet from "@/src/components/home-page/meet/meet";
import Initiatives from "@/src/components/home-page/initiatives/initiatives";
import Book from "@/src/components/home-page/book/Book";
import Blog from "@/src/components/home-page/blog/Blog";
import Footer from "@/src/components/home-page/footer/Footer";
import Mission from "@/src/components/home-page/mission/mission";
import HeroSection from "@/src/components/home/hero-section";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            {/* <HeroSection /> */}
            <Mission />
            <Courses />
            <Subscription />
            <Meet />
            <Initiatives />
            <Book />
            <Blog />
            <Footer />
        </main>
    );
}
