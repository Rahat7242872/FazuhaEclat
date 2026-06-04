"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4 text-white relative overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/20 blur-[120px] rounded-full top-20 right-10" />
      <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[100px] rounded-full bottom-10 left-10" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8"
      >

        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37]">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join Fazuha Éclat experience
        </p>

        <form className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#D4AF37] outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#D4AF37] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#D4AF37] outline-none"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded-xl hover:bg-white transition"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#D4AF37]">
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
}