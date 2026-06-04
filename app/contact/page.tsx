"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-[#0A0A0A] to-black text-white px-6 py-20 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-125 h-125 bg-yellow-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-100 h-100 bg-yellow-500/10 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-wide">
          Contact Us
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          We’d love to hear from you — let’s connect
        </p>
      </motion.div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">

        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h2>

          <div className="flex items-start gap-4">
            <MapPin className="text-[#D4AF37]" />
            <div>
              <p className="text-white font-medium">Fazuha Éclat LLC</p>
              <p className="text-gray-400 text-sm">
                6001 W Parmer Lane, Austin, TX, USA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#D4AF37]" />
            <p className="text-gray-300 text-sm">+1 737-283-5054</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-[#D4AF37]" />
            <p className="text-gray-300 text-sm">contact@fazuhaeclat.com</p>
          </div>

          <p className="text-gray-500 text-sm italic">
            Our team typically responds within 24 hours.
          </p>
        </motion.div>

        {/* Right Side Form (Design Only) */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#111] p-8 rounded-2xl border border-[#1A1A1A] shadow-xl space-y-5"
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">
            Send a Message
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-black border border-gray-800 focus:border-[#D4AF37] focus:outline-none transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-black border border-gray-800 focus:border-[#D4AF37] focus:outline-none transition"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-black border border-gray-800 h-32 focus:border-[#D4AF37] focus:outline-none transition"
          />

          <button
            type="button"
            className="w-full bg-[#D4AF37] text-black py-3 rounded-md font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </div>
  );
}