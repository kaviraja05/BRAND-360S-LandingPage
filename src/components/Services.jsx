"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Business Websites",
    description: "Professional websites designed to establish credibility, attract customers and strengthen your online presence."
  },
  {
    title: "Ecommerce Websites",
    description: "High-converting online stores with seamless shopping experiences, secure payments and scalable product management."
  },
  {
    title: "Corporate Websites",
    description: "Modern corporate platforms that showcase your brand, communicate your expertise and support business growth."
  },
  {
    title: "Static Websites",
    description: "Fast, secure and lightweight websites ideal for businesses that need a professional online presence with minimal updates."
  },
  {
    title: "Dynamic Websites",
    description: "Interactive and scalable websites powered by dynamic content, making it easy to manage information and engage visitors."
  },
  {
    title: "Funnel Websites",
    description: "Conversion-focused websites strategically designed to guide visitors through every step of the customer journey and maximize leads."
  },
  {
    title: "Landing Page Websites",
    description: "High-impact landing pages crafted to capture attention, communicate value and drive targeted marketing campaign results."
  },
  {
    title: "Real Estate Websites",
    description: "Property-focused platforms with advanced listings, lead generation features and seamless property discovery."
  }
];

export default function Services() {
    return (
        <section className="py-10 bg-[#fafbfc] relative overflow-hidden flex justify-center w-full">
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold"
                    >
                        <span style={{ color: "rgb(36, 62, 118)" }}>We Build All </span>
                        <span style={{ color: "rgb(4, 129, 162)" }}>Types of Websites</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.03 }}
                            className="group rounded-2xl p-7 border border-transparent hover:border-[#dcdfe4] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-colors transition-shadow duration-300 text-left flex flex-col justify-start min-h-[180px]"
                        >
                            <div className="flex items-baseline gap-2">
                                <span className="text-[10px] md:text-[16px] font-bold text-[#00a3c4]">0{index + 1}</span>
                                <div className="flex flex-col">
                                    <h3 
                                        className="text-[10px] md:text-[16px] font-bold leading-tight transition-colors duration-300 text-[rgb(36,62,118)] group-hover:text-[rgb(0,163,196)] mb-3"
                                    >
                                        {service.title}
                                    </h3>
                                    <p 
                                        className="text-[14px] leading-relaxed text-justify"
                                        style={{ color: "oklch(0.551 0.027 264.364)" }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call To Action Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-6 rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] p-5 lg:p-6 flex flex-col md:flex-row items-center justify-between gap-6" 
                    style={{ background: "linear-gradient(to right, #ffffff, #eaf6f9)" }}
                >
                    {/* Left: Text */}
                    <div className="flex flex-col text-left">
                        <h4 className="text-[16px] md:text-[18px] font-bold" style={{ color: "rgb(36, 62, 118)" }}>Ready to grow your business online?</h4>
                        <p className="text-[13px] md:text-[14px]" style={{ color: "oklch(0.551 0.027 264.364)" }}>Get a custom website that works for your goals.</p>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <a href="#" className="px-5 py-2.5 rounded-md text-white font-bold text-[14px] flex items-center gap-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: "rgb(4, 129, 162)" }}>
                            Book Free Consultation
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <div className="hidden sm:block w-[1px] h-8 bg-[#dcdfe4]"></div>
                        <a href="https://wa.me/41767335757" className="flex items-center gap-2 text-[14px] font-bold hover:underline" style={{ color: "rgb(36, 62, 118)" }}>
                            <svg viewBox="0 0 24 24" fill="#25D366" className="w-[22px] h-[22px]">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
