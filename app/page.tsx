import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
