import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-navy">
      <div className="min-h-screen flex flex-col justify-center">
        
        <Statistics />
        <Services />
      </div>
      <div className="min-h-screen flex flex-col justify-center">
        <Testimonials />
      </div>
    </main>
  );
}
