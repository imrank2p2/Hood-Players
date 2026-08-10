import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import LiveActivity from "@/components/LiveActivity";
import Roadmap from "@/components/Roadmap";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Loader from "@/components/Loader";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-[#F8D43A]">

      <Loader />
      


      <Navbar />

      

        <Hero />

        <Marquee />

        <About />

        <Collection />

        <LiveActivity />

        <Roadmap />

        <Faq />

        <CTA />

      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}