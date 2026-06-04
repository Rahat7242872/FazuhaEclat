"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-16 py-20">

      {/* Heading */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-serif text-[#D4AF37] mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Fazuha Éclat
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A modern luxury-inspired brand focused on quality, elegance, and global distribution.
        </motion.p>
      </motion.section>

      {/* Company Info */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        
        <motion.div
          className="space-y-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#D4AF37]">Who We Are</h2>
          <p className="text-gray-400 leading-relaxed">
            Fazuha Éclat LLC is a USA-registered company based in Texas. We specialize 
            in electronics accessories and wholesale distribution. Our goal is to build 
            a trusted global brand that delivers high-quality and affordable tech products.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We are currently expanding our product lines and preparing for global 
            marketplaces including Amazon, focusing on long-term brand value and 
            customer satisfaction.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-[#D4AF37]/30"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/images/logo/about.png"
            alt="Brand"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <motion.div
          className="bg-[#111] p-6 rounded-xl border border-[#D4AF37]/20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl text-[#D4AF37] mb-3">Our Mission</h3>
          <p className="text-gray-400">
            To provide high-quality, reliable, and affordable electronics products 
            while maintaining a strong commitment to customer satisfaction and innovation.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#111] p-6 rounded-xl border border-[#D4AF37]/20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl text-[#D4AF37] mb-3">Our Vision</h3>
          <p className="text-gray-400">
            To become a globally recognized brand in electronics accessories 
            and wholesale distribution across multiple marketplaces.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="text-center mb-20">
        <motion.h2
          className="text-3xl text-[#D4AF37] mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "USA Registered LLC",
            "Wholesale Ready",
            "Quality Focused",
            "Global Supply"
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#111] p-6 rounded-lg border border-[#D4AF37]/20 hover:scale-105 transition"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <motion.section
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-400">
          At Fazuha Éclat, we are committed to building a premium brand that stands 
          for trust, quality, and long-term value in the global market.
        </p>
      </motion.section>

    </main>
  );
}