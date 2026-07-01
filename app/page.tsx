import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import About from "@/components/About";
import LiveExamples from "@/components/LiveExamples";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Models />
        <About />
        <LiveExamples />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
