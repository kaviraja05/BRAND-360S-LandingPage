"use client";

import { useEffect, useState } from "react";

export default function FloatingIcons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center space-y-4 pointer-events-none">
      
      {/* WhatsApp Button */}
      <div className="pointer-events-auto">
        <a 
          href="https://wa.me/41767335757" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 group"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60"></div>
          <div className="relative bg-[#25D366] text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1ebe57] transition-colors w-14 h-14 z-10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </a>
      </div>

      {/* Call Button */}
      <div className="pointer-events-auto">
        <a 
          href="tel:+41245255535" 
          className="bg-[#243e76] text-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#1a2d58] transition-colors w-14 h-14"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </a>
      </div>

      {/* Scroll to Top Button */}
      <div className={`transition-opacity duration-300 pointer-events-auto ${showTopBtn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={scrollToTop} 
          className="bg-[#00a3c4] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0089a4] transition-colors w-14 h-14"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>

    </div>
  );
}
