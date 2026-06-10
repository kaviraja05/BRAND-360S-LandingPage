"use client";

import React from "react";
import { motion } from "framer-motion";

const SWITZERLAND_MAPS =
  "https://www.google.com/maps/search/?api=1&query=Chem.+du+Ch%C3%A2teau+13%2C+1422+Grandson%2C+Switzerland";

const CHENNAI_MAPS =
  "https://www.google.com/maps/search/?api=1&query=AMARIS+25+Church+Road+Golden+George+Nagar+Mogappair+East+Chennai+Tamil+Nadu+600107";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-35"
    >
      {/* Background Map */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/mapnew.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Left White Overlay + Smooth Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Smaller white overlay */}
        <div className="absolute left-0 top-0 h-full w-full bg-white lg:w-[35%]" />

        {/* Smooth fade effect */}
        <div className="absolute left-[30%] top-0 hidden h-full w-[180px] bg-gradient-to-r from-white via-white/90 to-transparent lg:block" />
      </div>

      {/* ── SWITZERLAND PIN ── */}
      <a
        href={SWITZERLAND_MAPS}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 group"
        style={{ left: "45%", top: "18%" }}
      >
        <div className="relative flex flex-col items-center">
          <span className="absolute inline-flex h-7 w-7 rounded-full bg-[#0481a2] opacity-25 animate-ping" />

          <div className="relative flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white bg-[#0481a2] shadow-2xl transition-transform duration-200 group-hover:scale-125">
            <div className="h-2.5 w-2.5 rounded-full bg-white" />
          </div>

          <div className="mt-2 translate-y-1 whitespace-nowrap rounded-xl border border-[#0481a2]/20 bg-white px-2.5 py-1 text-[10px] font-bold text-[#0481a2] opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            📍 Grandson, Switzerland
          </div>
        </div>
      </a>

      {/* ── CHENNAI PIN ── */}
      <a
        href={CHENNAI_MAPS}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 group"
        style={{ left: "69%", top: "46%" }}
      >
        <div className="relative flex flex-col items-center">
          <span className="absolute inline-flex h-7 w-7 rounded-full bg-[#0481a2] opacity-25 animate-ping" />

          <div className="relative flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white bg-[#0481a2] shadow-2xl transition-transform duration-200 group-hover:scale-125">
            <div className="h-2.5 w-2.5 rounded-full bg-white" />
          </div>

          <div className="mt-2 translate-y-1 whitespace-nowrap rounded-xl border border-[#0481a2]/20 bg-white px-2.5 py-1 text-[10px] font-bold text-[#0481a2] opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            📍 Chennai, India
          </div>
        </div>
      </a>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 xl:px-16">

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Left Content */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="text-[34px] font-extrabold leading-[1.15] text-[#243e76] md:text-[42px]"
                >
                  Ready to Grow Your{" "}
                  <span className="text-[#0481a2]">
                    Business Online?
                  </span>
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-5 max-w-md text-[15px] font-medium leading-relaxed text-[#243e76]/75"
                >
                  Let&apos;s build a website that brings you more
                  leads, sales & long-term growth.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.28 }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                  {/* Button 1 */}
                  <a
                    href="#consultation"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#243e76] px-7 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0481a2] hover:shadow-xl"
                  >
                    Get Free Consultation
                  </a>

                  {/* Button 2 */}
                  <a
                    href="https://wa.me/message/brand360s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-white bg-white px-6 text-[14px] font-semibold text-black/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <img
                      src="/assets/WhatsApp-Image.jpeg"
                      alt="WhatsApp"
                      className="h-6 w-6 rounded-full object-cover"
                    />

                    <span>Chat on WhatsApp</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;