"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// ─── Services list ───────────────────────────────────────────────────────────
const SERVICES = [
  // "Website Development",
  // "E-commerce Solution",
  // "SEO Optimization",
  // "UI/UX Design",
  // "Custom Web Application",
  "Business Website",
  "Corporate Website",
  "E-commerce Website",
  "Landing Page Website",
  "Others",
  
  
];
const BUDGETS =[
  "25,000",
  "45,000",
  "Let's Discuss",
  
  
]

// ─── Consultation Form (defined outside Hero to avoid remount on re-renders) ─
function ConsultationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  return (
    <div className="w-full max-w-[420px] md:max-w-[820px] lg:max-w-[420px] bg-white rounded-[20px] shadow-2xl border border-border-gray/70 overflow-hidden">
      {/* Form Header */}
      <div className="bg-primary-blue p-5 text-white text-left">
        <h3 className="text-[19px] font-bold leading-snug">
          Get Your Free Website Consultation
        </h3>
        <p className="text-[12px] opacity-80 mt-1 font-medium">
          Tell us about your project and we'll get back within 24 hours.
        </p>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-5 md:p-8 flex flex-col gap-3 md:gap-5">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="cf-name" className="text-[11px] font-bold text-slate-700">Full Name *</label>
            <input
              type="text" id="cf-name" required placeholder="Name"
              className="w-full h-[40px] md:h-[50px] border border-slate-300 rounded-[8px] px-3 text-[13px] outline-none focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal transition-all text-slate-800"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="cf-phone" className="text-[11px] font-bold text-slate-700">Phone Number *</label>
            <input
              type="tel" id="cf-phone" required placeholder="Phone"
              className="w-full h-[40px] md:h-[50px] border border-slate-300 rounded-[8px] px-3 text-[13px] outline-none focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal transition-all text-slate-800"
            />
          </div>
        </div>

        {/* Email + Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="cf-email" className="text-[11px] font-bold text-slate-700">Email Address *</label>
            <input
              type="email" id="cf-email" required placeholder="Email"
              className="w-full h-[40px] md:h-[50px] border border-slate-300 rounded-[8px] px-3 text-[13px] outline-none focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal transition-all text-slate-800"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="cf-business" className="text-[11px] font-bold text-slate-700">Business Name</label>
            <input
              type="text" id="cf-business" placeholder="Company"
              className="w-full h-[40px] md:h-[50px] border border-slate-300 rounded-[8px] px-3 text-[13px] outline-none focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal transition-all text-slate-800"
            />
          </div>
        </div>

        {/* Business Name + Website URL */}
        <div className="grid grid-cols-1 gap-3 md:gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="cf-service" className="text-[11px] font-bold text-slate-700" placeholder="Select">What type of website do you need? *</label>
            <select
              defaultValue=""
              id="cf-service" required 
              className="w-full h-[40px] md:h-[50px] border border-slate-300 rounded-[8px] px-2 text-[13px] bg-white outline-none focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal transition-all text-slate-800"
            >
              <option value="" disabled hidden >Select a website type </option>
              {SERVICES.map((svc, idx) => (
                <option key={idx} value={svc}>{svc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="cf-service" className="text-[11px] font-bold text-slate-700">Budget Range*</label>
            <select
            defaultValue=""
              id="cf-service" required
              className="w-full h-[40px] md:h-[50px] border border-slate-300 rounded-[8px] px-2 text-[13px] bg-white outline-none focus:border-secondary-teal focus:ring-1 focus:ring-secondary-teal transition-all text-slate-800"
            >
              <option value="" disabled hidden>Select a Budget Range</option>
              {BUDGETS.map((svc, idx) => (
                <option key={idx} value={svc}>{svc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full h-[44px] md:h-[50px] bg-secondary-teal hover:bg-primary-blue text-white font-semibold text-[14px] rounded-[8px] shadow-md hover:shadow-lg transition-colors duration-300 mt-1"
        >
          Get Free Consultation
        </motion.button>
      </form>
    </div>
  );
}

// ─── Hero Component ───────────────────────────────────────────────────────────
export default function Hero() {
  const mobileFormRef = useRef(null);
  const mobileFormInView = useInView(mobileFormRef, { once: true, margin: "-60px" });

  // Observe the hero section so animations trigger when scrolled into view
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.1 });

  // Left content stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  // Fade in from left
  const fromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Fade in from bottom
  const fromBottom = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative w-full">

      {/* ═══════════════════════════════════════════════════════════════════════
          SCREEN 1 — bg image + left content + right form (desktop only)
          Height: h-screen on all breakpoints
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        aria-label="Hero"
        className="relative w-full h-screen md:min-h-[900px] lg:h-screen flex items-center overflow-hidden pt-[62px] md:pt-[100px] lg:pt-[112px]"
      >
        {/* ── Background Image (slow continuous zoom) ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {/* Image with slow continuous zoom (no opacity animation) */}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Desktop Background */}
            <Image
              src="/banner-image1.png"
              alt="Brand360s Hero Background"
              fill
              priority
              sizes="100vw"
              className="hidden lg:block object-cover object-center brightness-105"
            />

            {/* Mobile Background */}
            <Image
              src="/banner-phimage (1).png"
              alt="Brand360s Hero Mobile Background"
              fill
              priority
              sizes="100vw"
              className="block md:hidden object-cover object-center"
            />
          </motion.div>

          {/* Mobile Overlay */}
          <div
            className="absolute md:hidden"
            style={{
              left: 0,
              top: "15%",
              width: "75%",
              height: "55%",
              background: `
      radial-gradient(
        ellipse,
        rgba(255,255,255,0.92) 0%,
        rgba(255,255,255,0.78) 10%,
        rgba(255, 255, 255, 0.28) 95%,
        rgba(255,255,255,0) 100%
      )
    `,
              filter: "blur(20px)",
            }}
          />
          {/* Tablet Overlay */}
          <div
            className="hidden md:block lg:hidden absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  rgba(255,255,255,0.90) 0%,
                  rgba(255,255,255,0.75) 40%,
                  rgba(255,255,255,0.45) 70%,
                  rgba(255,255,255,0.10) 100%
                )
              `,
            }}
          />
          {/* Desktop Overlay */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background: `
      linear-gradient(
        90deg,
        rgba(255,255,255,0.90) 0%,
        rgba(255, 255, 255, 0.80) 20%,
        rgba(255, 255, 255, 0.7) 30%,
        rgba(255,255,255,0.25) 35%,
        rgba(255,255,255,0.08) 55%,
        rgba(255,255,255,0) 100%
      )
    `,
            }}
          />
        </div>

        {/* ── Content Grid ── */}
        <div className="container relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12 w-full h-full flex items-center">
          <div className="hero-grid grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">

            {/* LEFT — Eyebrow, Heading, Description, CTAs */}
            <motion.div
              ref={heroRef}
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="hero-content lg:col-span-7 flex flex-col justify-center items-start lg:items-start text-left lg:text-left"
            >
              {/* Eyebrow */}
              <motion.span
                variants={fromLeft}
                className="text-[11px] sm:text-[12px] font-bold tracking-[3px] text-secondary-teal uppercase mb-3 block md:hidden lg:block"
              >
                WEBSITE DEVELOPMENT COMPANY <br className="lg:hidden sm:inline" />IN CHENNAI
              </motion.span>
              <motion.span
                variants={fromLeft}
                className="text-[11px] sm:text-[12px] font-bold tracking-[3px] text-secondary-teal uppercase mb-3 hidden md:block lg:hidden"
              >
                Website Development Company in Chennai
              </motion.span>

              {/* Main Heading H1 */}
              <motion.h1
                variants={fromLeft}
                className="text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[44px]
                           font-bold text-[#0a2540] leading-[1.2] tracking-tight mb-4 md:hidden lg:block"
              >
                If You Don't<br />
                {" "}Have a{" "}
                <span className="text-secondary-teal">Website,</span>
                <br />
                You're Losing
                <br />
                Business.
              </motion.h1>
              <motion.h1
                variants={fromLeft}
                className="hidden md:block lg:hidden text-[28px] sm:text-[32px] md:text-[38px] font-bold text-[#0a2540] leading-[1.2] tracking-tight mb-4"
              >
                Grow Your Business<br />
                With a <span className="text-secondary-teal">Professional Website.</span>
              </motion.h1>

              {/* Sub-line */}
              <motion.p
                variants={fromBottom}
                className="uppercase text-body-text font-semibold text-[14px] sm:text-[16px] leading-[1.6] max-w-[500px] mb-8 md:hidden lg:block"
              >
                Stop losing customers <br className="lg:hidden sm:inline" /> to your competitors.
              </motion.p>
              <motion.p
                variants={fromBottom}
                className="hidden md:block lg:hidden text-body-text font-semibold text-[15px] sm:text-[16px] leading-[1.6] max-w-[500px] mb-8"
              >
                Stop losing customers to competitors.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fromBottom}
                className="hero-buttons flex flex-col sm:flex-row items-start lg:items-start gap-4 w-full sm:w-auto"
              >
                {/* Primary CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto h-[48px] px-6 bg-secondary-teal hover:bg-primary-blue text-white
                             font-bold text-[15px] rounded-[10px] flex items-center justify-center gap-2
                             shadow-lg shadow-secondary-teal/10 hover:shadow-primary-blue/20 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight size={16} />
                </motion.a>

                {/* WhatsApp CTA — uses whatsapp.png */}
                <motion.a
                  href="https://wa.me/919999011777"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto h-[48px] px-6 bg-white hover:bg-slate-50 text-slate-700
                             font-bold text-[15px] rounded-[10px] border border-slate-300 flex items-center
                             justify-center gap-2 shadow-sm transition-all duration-300"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="object-contain flex-shrink-0"
                  />
                  Chat on WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Laptop Image (Tablet ONLY) */}
            <div className="hero-image hidden md:flex lg:hidden justify-center w-full">
              <img
                src="/banner-image1.png"
                alt="Laptop preview"
                className="w-[90%] max-w-[720px] h-auto object-contain"
              />
            </div>

            {/* RIGHT / Stacked — Consultation Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="hero-form hidden md:flex lg:flex md:col-span-1 lg:col-span-5 flex-col justify-center items-center lg:items-end w-full"
            >
              <ConsultationForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SCREEN 2 — Consultation Form (Mobile / Tablet ONLY)
          White background, full screen height, fade-in on scroll
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        ref={mobileFormRef}
        aria-label="Contact Form"
        className="md:hidden min-h-screen flex items-center justify-center px-6 py-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 52 }}
          animate={mobileFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 52 }}
          transition={{ duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-[920px] flex justify-center"
        >
          <ConsultationForm />
        </motion.div>
      </section>

    </div>
  );
}
