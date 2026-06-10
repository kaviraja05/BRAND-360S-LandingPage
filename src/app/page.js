import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import ProjectsSection from "@/components/ProjectsSection";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/whychoose";
import ContactSection from "@/components/contact";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Navbar />
      <Hero />
      <div className="flex flex-col justify-center">
        <Statistics />
        <Services />
        <WhyChoose />
      </div>
      <PricingSection />
      <ProjectsSection />
      <div className="flex flex-col justify-center">
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
