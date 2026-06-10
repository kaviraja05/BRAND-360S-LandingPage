"use client";

import { motion } from "framer-motion";

const stats = [
 { 
  value: "50%", 
  title: "of sales", 
  description: "go to businesses with a professional website.", 
  source: "(Stanford Study)" 
 },
 { 
  value: "75%", 
  title: "of consumers", 
  description: "judge your credibility by your website.", 
  source: "(Stanford Study)" 
 },
 { 
  value: "68%", 
  title: "of buying journeys",
  description: "start with a Google search.", 
  source: "(BrightEdge)" 
 }
];

export default function Statistics() {
 return (
  <section className="py-4 bg-white flex justify-center w-full">
   <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
    <motion.div 
     initial={{ opacity: 0, y: 10 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     className="rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-sm"
     style={{ 
        backgroundColor: "#f5f8fd", 
        color: "#1b203f" 
     }}
    >
     {stats.map((stat, index) => (
      <div key={index} className="flex flex-col md:flex-row flex-1">
       
       {/* Card Content */}
       <div className="flex-1 flex px-5 py-6 lg:px-8 lg:py-6 items-start justify-center">
        <div className="flex flex-row items-start gap-4">
         
         {/* Left Column: Percentage */}
         <div 
          className="text-5xl md:text-6xl font-extrabold tracking-tight shrink-0 leading-none"
          style={{ color: "rgb(36, 62, 118)" }}
         >
          {stat.value}
         </div>
         
         {/* Right Column: Supporting Content */}
         <div className="flex flex-col pt-1">
          <span 
           className="text-[14px] lg:text-[16px] font-bold uppercase tracking-wider leading-tight mb-1"
           style={{ color: "rgb(36, 62, 118)" }}
          >
           {stat.title}
          </span>
          <span 
           className="text-[13px] md:text-[14px] font-medium leading-snug max-w-[200px]"
           style={{ color: "oklch(0.551 0.027 264.364)" }}
          >
           {stat.description}
          </span>
          <span 
           className="text-[11px] italic font-medium mt-2"
           style={{ color: "rgb(4, 129, 162)", opacity: 0.85 }}
          >
           {stat.source}
          </span>
         </div>

        </div>
       </div>

       {/* Dividers */}
       {index < stats.length - 1 && (
        <>
         {/* Desktop Vertical Divider */}
         <div className="hidden md:block w-[1px] h-[70%] self-center bg-[#dcdfe4] opacity-70"></div>
         {/* Mobile Horizontal Divider */}
         <div className="md:hidden h-[1px] w-[70%] self-center bg-[#dcdfe4] opacity-70"></div>
        </>
       )}
      </div>
     ))}
    </motion.div>
   </div>
  </section>
 );
}
