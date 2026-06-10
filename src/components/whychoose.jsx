"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Globe,
  Layers3,
  Sparkles,
  CalendarDays,
  Clock3,
  ShieldCheck,
  Users,
  Code2,
} from "lucide-react";

import {
  revealViewport,
  staggerContainer,
  staggerItem,
} from "./motionReveal";

const cards = [
  {
    title: "Strategic Conversion",
    description:
      "Strategic websites designed to convert visitors into customers.",
  },
  {
    title: "Mobile & SEO Ready",
    description:
      "100% mobile responsive & SEO-ready websites.",
  },
  {
    title: "High Performance",
    description:
      "Fast loading, secure & built with latest technologies.",
  },
  {
    title: "Easy to Manage",
    description:
      "Easy to manage – No technical skills required.",
  },
  {
    title: "Dedicated Support",
    description:
      "Dedicated support even after your website goes live.",
  },
  {
    title: "Global Standards",
    description:
      "Chennai based + Swiss team for global quality.",
  },
];

const BenefitCard = ({ card, number }) => (
  <motion.div
    variants={staggerItem}
    whileHover={{
      scale: 1.08,
    }}
    transition={{
      type: "spring",
      stiffness: 220,
      damping: 18,
    }}
    className="group cursor-pointer rounded-[18px] border border-[#eef2f7] bg-white p-5   "
    style={{
      transformOrigin: "center",
    }}
  >
    <div className="flex flex-col gap-3">
      <h3 className="flex items-center gap-2 text-[16px] font-bold leading-snug">
        <span className="text-[#0481a2]">
          {String(number).padStart(2, "0")}
        </span>

        <span className="text-[#243e76] transition-colors duration-300 group-hover:text-[#0481a2]">
          {card.title}
        </span>
      </h3>

      <p className="text-[12px] leading-relaxed text-[#243e76]/70 md:text-[14px]">
        {card.description}
      </p>
    </div>
  </motion.div>
);
// const PremiumDeliveryCard = () => {
//   const features = [
//     {
//       title: "Quick Turnaround",
//       desc: "We plan, design and deliver fast.",
//     },
//     {
//       title: "Quality Assured",
//       desc: "Speed never comes at the cost of quality.",
//     },
//     {
//       title: "Client Focused",
//       desc: "Your timeline. Our priority.",
//     },
//     {
//       title: "Built to Perform",
//       desc: "Optimized websites that deliver results.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#00144a] via-[#002b91] to-[#004fff] p-[1px]">
//       {/* Glow Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-cyan-500/20 blur-[100px]" />
//         <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-blue-500/20 blur-[100px]" />
//       </div>

//       <div className="relative rounded-[24px] bg-gradient-to-r from-[#00103d] via-[#002574] to-[#003fc9] px-6 py-5 md:px-10 md:py-6">
//         <div className="grid items-center gap-6 lg:grid-cols-2">
//           {/* LEFT SIDE */}
//           <div>
//             <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-200">
//                 Fast • Reliable • On Time
//               </span>
//             </div>

//             <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-5xl">
//               Fast Project
//               <br />
//               Delivery
//             </h2>

//             <div className="mt-3 h-[3px] w-14 rounded-full bg-cyan-400" />

//             <p className="mt-3 max-w-md text-sm text-white/80">
//               Your time is valuable. We deliver premium websites
//               quickly without compromising quality.
//             </p>

//             {/* Delivery Card */}
//             <div className="mt-4 max-w-sm rounded-2xl border border-cyan-400/30 bg-[#03236d]/70 p-4 backdrop-blur-xl">
//               <p className="text-xs text-white/70">
//                 Every website delivered within
//               </p>

//               <h3 className="mt-1 text-3xl font-extrabold text-cyan-300 md:text-4xl">
//                 5–7 DAYS
//               </h3>

//               <p className="mt-1 text-xs text-white/60">
//                 No delays. No excuses. Just results.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative flex items-center justify-center">
//             {/* Speedometer */}
//             <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full border-[8px] border-cyan-400/30 bg-gradient-to-br from-[#032b91] to-[#001e66] shadow-[0_0_60px_rgba(0,180,255,0.35)]">
//               <div className="absolute inset-4 rounded-full border border-cyan-300/30" />

//               <div className="text-center">
//                 <div className="text-4xl font-extrabold text-white">
//                   5–7
//                 </div>

//                 <div className="mt-1 text-lg font-semibold text-cyan-300">
//                   DAYS
//                 </div>
//               </div>
//             </div>

//             {/* Laptop Mockup */}
//             <div className="absolute bottom-0 left-0 rounded-xl border border-cyan-400/20 bg-[#072f8f] p-2 shadow-lg backdrop-blur-xl">
//               <div className="h-[90px] w-[160px] rounded-lg bg-white p-2">
//                 <div className="mb-2 h-3 w-16 rounded bg-slate-200" />

//                 <div className="grid grid-cols-2 gap-1">
//                   <div className="h-8 rounded bg-slate-200" />
//                   <div className="h-8 rounded bg-slate-100" />
//                   <div className="col-span-2 h-5 rounded bg-slate-200" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Features */}
//         <div className="mt-5 grid gap-4 border-t border-white/10 pt-4 md:grid-cols-4">
//           {features.map((item, index) => (
//             <div key={index}>
//               <h4 className="text-sm font-semibold text-white">
//                 {item.title}
//               </h4>

//               <p className="mt-1 text-xs leading-relaxed text-white/60">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



const SectionWhyChoose = () => {
  return (
    <section
      className="bg-white py-1 md:py-24"
      id="benefits"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 xl:px-16">

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">

          {/* Left Side */}
          <motion.div
            className="lg:col-span-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            <motion.p
              variants={staggerItem}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0481a2] md:text-xs"
            >
              Why Businesses Choose Brand 360s
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="mt-4 text-[38px] font-extrabold leading-[1.1] text-[#243e76] md:text-[46px]"
            >
              Your Benefits
              <br />

              <span className="text-[#0481a2]">
                at a Glance.
              </span>
            </motion.h2>

            <motion.div
              variants={staggerItem}
              className="mt-5 h-[3px] w-[58px] rounded-full bg-[#0481a2]"
            />

            {/* Video */}
            <motion.div
              variants={staggerItem}
              className="mt-8 w-full max-w-[520px]"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-[290px] w-full rounded-[30px] object-cover"
                aria-label="Brand360s animation"
              >
                <source
                  src="/assets/logo-video-fly.mp4"
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="lg:col-span-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >

            {/* Top 3 Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {cards.slice(0, 3).map((card, idx) => (
                <BenefitCard
                  key={idx}
                  card={card}
                  number={idx + 1}
                />
              ))}
            </div>

            {/* Premium Delivery Card */}
            {/* <PremiumDeliveryCard /> */}

            {/* Bottom 3 Cards */}
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {cards.slice(3, 6).map((card, idx) => (
                <BenefitCard
                  key={idx + 3}
                  card={card}
                  number={idx + 4}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyChoose;