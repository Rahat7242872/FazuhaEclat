"use client";
import { motion } from "framer-motion";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:h-[90vh] w-full flex items-center justify-center md:justify-start overflow-hidden bg-[#0D0D0D]">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b md:bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent z-7" />
        
        <motion.img
          src="/assets/images/logo/fazuhadetails.png"
          alt="Luxury"
          className="w-full h-full object-cover object-center md:object-right opacity-60 scale-105"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-5 md:px-16 w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="max-w-2xl md:max-w-3xl space-y-5 md:space-y-6 text-center md:text-left">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm mx-auto md:mx-0"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium">
              Established 2025 • USA
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            className="space-y-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
              Fazuha <br className="block md:hidden" />
              <span className="text-[#D4AF37] italic">Éclat</span>
            </h1>
            <div className="h-[2px] w-16 md:w-24 bg-[#D4AF37] mx-auto md:mx-0"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-md md:max-w-xl mx-auto md:mx-0 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            A modern brand focused on{" "}
            <span className="text-white">quality, elegance,</span> and customer
            satisfaction. Bringing luxury to your everyday life.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 w-full sm:w-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button className="w-full sm:w-auto group relative overflow-hidden bg-[#D4AF37] text-black px-6 md:px-10 py-3 md:py-4 font-semibold uppercase tracking-widest transition-all duration-300">
              <span className="relative z-10">Explore</span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

           <Link href={"/product"}>
             <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-700 bg-white/5 backdrop-blur-md text-white px-6 md:px-10 py-3 md:py-4 font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
               <span>Shop Now</span>
             </button>
           </Link>
             
           
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </div>
    </section>
  );
}