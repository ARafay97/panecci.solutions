import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import About from "@/components/About";
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
        <Contact />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
