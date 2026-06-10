"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 50;

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* ── Top Bar ── */}
<div
  className="bg-primary-blue text-white flex items-center justify-end
             px-3 md:px-8
             h-[28px] md:h-[36px]
             text-[10px] md:text-[13px]
             font-medium tracking-wide overflow-hidden"
>
  <div className="flex items-center gap-2 md:gap-6 whitespace-nowrap">

    {/* Chennai */}
    <a
      href="https://maps.google.com/?q=Chennai"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
      aria-label="Chennai Location"
    >
      <MapPin
        size={12}
        className="md:w-[14px] md:h-[14px] flex-shrink-0"
      />
      <span className="hidden md:inline">Chennai</span>
    </a>

    <span className="opacity-40">|</span>

    {/* Switzerland */}
    <a
      href="https://maps.google.com/?q=Switzerland"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
      aria-label="Switzerland Location"
    >
      <MapPin
        size={12}
        className=" hidden md:inline md:w-[14px] md:h-[14px] flex-shrink-0"
      />
      <span className=" hidden md:inline">Switzerland</span>
    </a>

    <span className="hidden md:inline opacity-40">|</span>

    {/* Phone */}
    <a
      href="tel:+919999011777"
      className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity"
      aria-label="Call Brand360s"
    >
      <Phone
        size={12}
        className="md:w-[14px] md:h-[14px] flex-shrink-0"
      />
      <span className="hidden md:inline">+91 999 901 1777</span>
    </a>

    <span className="opacity-40">|</span>

  </div>
</div>

        {/* ── Main Navbar ── */}
        <nav
          className={`w-full flex items-center justify-between px-6 lg:px-12 transition-all duration-500 ease-in-out ${isScrolled
              ? "h-[62px] lg:h-[72px] bg-white/10 backdrop-blur-2xl border-b border-white/30 shadow-[0_4px_24px_rgba(36,62,118,0.10)]"
              // : "h-[62px] lg:h-[72px]  bg-white/95 backdrop-blur-md border-b border-border-gray/50 shadow-sm"
              : "h-[62px] lg:h-[72px] bg-white/10 backdrop-blur-2xl border-b border-white/30 shadow-[0_4px_24px_rgba(36,62,118,0.10)]"
            }`}
        >
          {/* Logo — same size always */}
          <a href="#" className="flex items-center flex-shrink-0 decoration-none">
            <Image
              src="/Brand360strademark.webp"
              alt="Brand360s Logo"
              width={135}
              height={135}
              priority
            />
          </a>

          {/* Center Nav Links — Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative py-1.5 text-[15px] font-medium text-primary-blue click:font-bold hover:font-semibold hover:text-secondary-teal transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary-teal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button — Desktop */}
          <div className="hidden md:flex">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center h-[42px] px-5 rounded-[10px] bg-secondary-teal hover:bg-primary-blue text-white font-semibold text-[14px] shadow-md hover:shadow-lg transition-colors duration-300"
            >
              Book Free Consultation
            </motion.a>
          </div>

          {/* Hamburger — Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-primary-blue hover:text-secondary-teal transition-colors focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* ── Mobile Slide-in Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[51] p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Drawer Header — Logo Image + Close */}
                <div className="flex items-center justify-between pb-5 border-b border-border-gray">
                  <Image
                    src="/Brand360strademark.webp"
                    alt="Brand360s"
                    width={90}
                    height={90}
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Menu"
                    className="p-1.5 text-primary-blue hover:text-secondary-teal transition-colors focus:outline-none"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Stacked Links */}
                <div className="flex flex-col gap-3 mt-7">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055 }}
                      className="text-[18px] font-semibold text-primary-blue hover:text-secondary-teal hover:font-semibold transition-colors py-1"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="flex flex-col gap-4 border-t border-border-gray pt-6">
                <a
                  href="tel:+919999011777"
                  className="flex items-center gap-2 text-sm text-body-text hover:text-secondary-teal transition-colors"
                >
                  <Phone size={16} />
                  +91 999 901 1777
                </a>
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full h-[48px] rounded-[12px] bg-secondary-teal text-white font-semibold text-[15px] shadow-md"
                >
                  Book Consultation
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
