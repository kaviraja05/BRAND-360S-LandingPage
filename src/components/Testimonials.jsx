"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Krupali Manish Dave", role: "Director", content: "Brand360s completely transformed our online presence. Our new website not only looks incredible but has doubled our inbound lead generation in just the first few months. The team was highly responsive and delivered well beyond our expectations.", logo: "/logo/logo1.png" },
  { name: "Anbudan Hari", role: "Founder", content: "The level of professionalism and design expertise is unmatched. They understood our vision perfectly and executed it flawlessly, creating a digital experience that our customers absolute love to interact with.", logo: "/logo/logo2.png" },
  { name: "Jeevan", role: "Chairman", content: "Working with this agency was a breeze. The site is blazing fast, beautiful on mobile, and exactly what we needed to scale our ads. Our bounce rates have plummeted since the launch.", logo: "/logo/logo3.png" },
  { name: "Nathalie sansonnens", role: "Founder & CEO", content: "Outstanding quality and support. The team was responsive to all our feedback and delivered a product far exceeding our expectations. I highly recommend them for any serious web project.", logo: "/logo/logo4.png" },
  { name: "Bhalchandra Vasantrao Deotale", role: "Founding Partner", content: "Our conversion rates skyrocketed after the redesign. I highly recommend Brand360s for any business looking to grow online. They truly understand what it takes to build a modern, high-converting funnel.", logo: "/logo/logo5.png" },
  { name: "Rachel Amirtharaj", role: "CEO", content: "They built a beautiful, high-performing site in record time. The communication throughout the project was stellar, and they were always available to answer any questions we had.", logo: "/logo/logo6.png" },
  { name: "Arun Prakash", role: "Managing Director", content: "A game-changer for our brand. The attention to detail in both design and functionality really sets them apart from other agencies we've worked with in the past.", logo: "/logo/logo7.png" }
];

function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;
  const isLong = testimonial.content.length > maxLength;

  return (
    <motion.div 
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="w-[280px] sm:w-[350px] shrink-0 mx-auto rounded-xl p-6 pt-12 bg-white shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center relative mt-10 h-full cursor-pointer"
    >
      {/* Overlapping Logo */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-white rounded-md flex items-center justify-center p-2 shadow-md">
        {testimonial.logo ? (
          <img 
            src={testimonial.logo} 
            alt={`${testimonial.name} Logo`} 
            className={`max-w-full max-h-full object-contain ${testimonial.logo.includes('logo6') ? 'scale-[1.5]' : ''}`} 
          />
        ) : (
          <span className="text-[10px] text-[#dcdfe4]">Logo</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center flex-1 w-full">
        <h3 className="text-[16px] font-bold" style={{ color: "rgb(36, 62, 118)" }}>
          {testimonial.name}
        </h3>
        <p className="text-[13px] font-medium opacity-70 mb-5" style={{ color: "oklch(0.551 0.027 264.364)" }}>
          {testimonial.role}
        </p>

        <p className="text-[13px] leading-relaxed italic opacity-90 mb-4 flex-1" style={{ color: "oklch(0.551 0.027 264.364)" }}>
          "{expanded || !isLong ? testimonial.content : testimonial.content.substring(0, maxLength) + "..."}"
          {isLong && !expanded && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(true);
              }} 
              className="font-bold ml-1 hover:underline cursor-pointer inline-block"
              style={{ color: "rgb(4, 129, 162)" }}
            >
              read more
            </button>
          )}
        </p>

      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  // Duplicate array for seamless infinite scroll
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-12 bg-[#f4f5f7] relative overflow-hidden flex flex-col w-full">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } /* -1rem accounts for exactly half the 2rem gap */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Container (Bounded) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="text-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 md:w-12 h-[1px]" style={{ backgroundColor: "rgb(4, 129, 162)" }}></div>
            <div className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-center leading-tight" style={{ color: "rgb(4, 129, 162)" }}>
              We trust businesses
            </div>
            <div className="w-8 md:w-12 h-[1px]" style={{ backgroundColor: "rgb(4, 129, 162)" }}></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold"
          >
            <span style={{ color: "rgb(36, 62, 118)" }}>Our Happy </span>
            <span style={{ color: "rgb(4, 129, 162)" }}>Clients</span>
          </motion.h2>
        </div>
      </div>

      {/* Continuous Marquee Container (Full Width) */}
      <div className="relative w-full overflow-hidden mt-6">
        <div className="flex animate-marquee gap-8 pt-4 pb-10 px-4 items-stretch">
          {marqueeItems.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

    </section>
  );
}
