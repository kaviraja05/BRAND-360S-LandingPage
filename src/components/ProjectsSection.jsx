"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

// ─── Project Data ─────────────────────────────────────────────────────────────
const projects = [

  {
    id: 4,
    video: "/project2-4.mp4",
    category: "PHARMACEUTICAL WEBSITE",
    title: "Pharmak Solutions",
    description:
      "A healthcare-focused digital platform built to communicate pharmaceutical expertise, strengthen credibility and support long-term business growth.",
    link: "https://pharmaksolutions.com/",
  },
  {
    id: 1,
    video: "/project-1.mp4",
    category: "TRAVEL WEBSITE",
    title: "Dream Holidays",
    description:
      "A luxury honeymoon and travel platform designed to inspire bookings through immersive storytelling, destination-focused content and a seamless user experience.",
    link: "https://dream-holidays.in/",
  },
  {
    id: 2,
    video: "/project-2.mp4",
    category: "RESTAURANT WEBSITE",
    title: "Bikers Brew Cafe",
    description:
      "A biker-themed café website celebrating coffee, food and community. Crafted to showcase the brand experience while driving local discovery and engagement.",
    link: "https://bikersbrewcafe.com/",
  },
  {
    id: 3,
    video: "/project-3.mp4",
    category: "CORPORATE WEBSITE",
    title: "Amara Next",
    description:
      "A modern B2B corporate website structured for clarity and trust, presenting products and services through a clean user journey and professional design.",
    link: "https://amaranext.com/",
  },
  {
    id: 5,
    video: "/project-5.mp4",
    category: "MANUFACTURING WEBSITE",
    title: "Bestieplus Mitra",
    description:
      "A manufacturing and industrial solutions website designed to highlight technical capabilities, improve visibility and generate qualified business enquiries.",
    link: "https://bestieplusmitra.com/",
  },
];

// ─── Direction-based animation per card position in 5-col grid ───────────────
// Cards 0–1 → fade from left, Card 2 → fade from bottom, Cards 3–4 → fade from right
function getCardMotionProps(index) {
  if (index < 2)
    return {
      initial: { opacity: 0, x: -52 },
      whileInView: { opacity: 1, x: 0 },
    };
  if (index === 2)
    return {
      initial: { opacity: 0, y: 52 },
      whileInView: { opacity: 1, y: 0 },
    };
  return {
    initial: { opacity: 0, x: 60, y: 20 },
    whileInView: { opacity: 1, x: 0, y: 0 },
  };
}

// ─── Individual Project Card ──────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const videoRef = useRef(null);
  const motionProps = getCardMotionProps(index);

  return (
    <motion.article
      {...motionProps}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      className="group relative bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden
                 flex flex-col
                 h-[460px] sm:h-[480px] md:h-[500px] xl:h-full
                 flex-shrink-0 snap-start
                 w-[84vw] sm:w-[46vw] md:w-[38vw] lg:w-[30vw] xl:w-auto
                 transition-all duration-[380ms] ease-out
                 xl:hover:-translate-y-[8px] hover:shadow-[0_24px_48px_rgba(36,62,118,0.13)]"
    >
      {/* ── Video Thumbnail ── */}
      <div className="relative overflow-hidden h-[160px] xl:h-[185px] bg-slate-100 flex-shrink-0">
        <video
  ref={videoRef}
  src={project.video}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className={`
    w-full
    h-full
    object-cover
    transition-transform
    duration-700
    ease-out
    group-hover:scale-105
    ${
      project.id === 3
        ? "object-center"
        : project.id === 5
        ? "object-[5%_65%]"
        : "object-left"
    }
  `}
/>
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-[#E5E7EB] rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-[1.2px] text-[#0481A2] uppercase shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* ── Card Content ── */}
      <div className="flex flex-col flex-1 p-4 xl:p-5">
        {/* Title */}
        <h3 className="text-[16px] xl:text-[18px] font-bold leading-[1.25] text-[#243E76] mb-2 group-hover:text-[#0481A2] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description — clamped to 4 lines */}
        {/* <p className="text-[12px] xl:text-[13px] leading-[1.65] font-normal text-[#64748B] line-clamp-4 flex-1"> */}
        <p
  className="
    text-[12px] xl:text-[13px]
    leading-[1.65]
    font-normal
    text-[#64748B]
    line-clamp-5 xl:line-clamp-4
    flex-1
  "
>
          {project.description}
        </p>

        {/* Divider + View Project CTA */}
        <div className="mt-auto pt-3.5 border-t border-[#E5E7EB] flex-shrink-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0481A2] hover:text-[#243E76] transition-all duration-300 group/cta"
          >
            View Project
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover/cta:translate-x-[4px]"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main Projects Section ────────────────────────────────────────────────────
export default function ProjectsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const carouselRef = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);
const handleScroll = () => {
  if (!carouselRef.current) return;

  const firstCard = carouselRef.current.children[0];
  if (!firstCard) return;

  const cardWidth = firstCard.offsetWidth + 16;

  const index = Math.round(
    carouselRef.current.scrollLeft / cardWidth
  );

  setActiveIndex(index);
};
  return (
    <section
      id="projects"
      className="w-full bg-[#F8FAFC] h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 w-full flex flex-col py-5 lg:py-7 gap-5 lg:gap-6">

        {/* ── Section Header ── */}
        <div ref={headerRef} className="flex-shrink-0">
          {/* Eyebrow */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-2.5"
          >
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#0481A2]">
              OUR WORK
            </span>
            
          </motion.div>
          <div className="w-8 h-[2.5px] bg-[#0481A2] rounded-full" />
          {/* Heading */}
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="text-[26px] sm:text-[34px] lg:text-[40px] pt-3 font-bold leading-[1.1] tracking-[-0.5px] text-[#243E76] mb-2"
          >
            Selected Success Stories.
          </motion.h2>

          {/* Description — 2 lines max */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.6] font-normal text-[#64748B] max-w-[640px]"
          >
            From growing startups to established businesses, we create websites that
            improve visibility, build trust and generate measurable growth.
          </motion.p>
        </div>

        {/* ── Desktop Grid (xl+) — 5 columns, single row ── */}
        <div className="hidden xl:grid xl:grid-cols-5 xl:gap-4 flex-shrink-0">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
{/* ── Carousel (below xl) ── */}
<div
  ref={carouselRef}
  onScroll={handleScroll}
  className="
    xl:hidden
    flex
    gap-4
    overflow-x-auto
    overflow-y-hidden
    snap-x snap-proximity
    items-center
    pt-2
    pb-2
    h-[470px]
    sm:h-[490px]
    md:h-[510px]
    lg:h-[530px]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
    flex-shrink-0
  "
>
  {projects.map((project, idx) => (
    <ProjectCard
      key={project.id}
      project={project}
      index={idx}
    />
  ))}
</div>

{/* ── Mobile scroll dots ── */}
<div className="flex xl:hidden justify-center gap-2 -mt-2 flex-shrink-0">
  {projects.map((_, idx) => (
    <button
      key={idx}
      onClick={() => {
        const card =
          carouselRef.current?.children[0];

        if (!card || !carouselRef.current) return;

        const cardWidth = card.offsetWidth + 16;

        carouselRef.current.scrollTo({
          left: idx * cardWidth,
          behavior: "smooth",
        });
      }}
      className={`rounded-full transition-all duration-300 ${
        idx === activeIndex
          ? "w-5 h-2 bg-[#0481A2]"
          : "w-2 h-2 bg-[#CBD5E1]"
      }`}
    />
  ))}
</div>
        {/* ── Carousel (below xl) — horizontal snap scroll ── */}
        {/* <div
          className="xl:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory items-stretch
                    //  h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px]
                    h-[440px] sm:h-[460px] md:h-[480px] lg:h-[500px]
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-shrink-0"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div> */}

        {/* ── Mobile scroll dots ── */}
        {/* <div className="flex xl:hidden justify-center gap-2 -mt-2 flex-shrink-0">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`rounded-full transition-all duration-300 ${
                idx === 0 ? "w-5 h-2 bg-[#0481A2]" : "w-2 h-2 bg-[#CBD5E1]"
              }`}
            />
          ))}
        </div> */}

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex justify-center flex-shrink-0"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-[46px] px-7 bg-[#243E76] hover:bg-[#0481A2]
                       text-white font-semibold text-[14px] rounded-[10px] shadow-lg
                       transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#0481A2]/20"
          >
            Start Your Project
            <ExternalLink size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
