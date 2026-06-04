"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4 text-white relative overflow-hidden">

      {/* GOLD GLOW BACKGROUND */}
      <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/20 blur-[120px] rounded-full top-10 left-10" />
      <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[100px] rounded-full bottom-10 right-10" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl"
      >

        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37]">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mt-2 text-sm md:text-base">
          Login to continue your luxury experience
        </p>

        <form className="mt-6 space-y-4">

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
            Login
          </motion.button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* SOCIAL */}
        <div className="space-y-3">

          <button className="w-full flex items-center justify-center gap-3 bg-black/40 border border-white/10 py-3 rounded-xl hover:border-[#D4AF37] transition">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-black/40 border border-white/10 py-3 rounded-xl hover:border-[#D4AF37] transition">
            <FaFacebookF className="text-blue-500" />
            Continue with Facebook
          </button>

        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-[#D4AF37]">
            Sign up
          </Link>
        </p>

      </motion.div>
    </div>
  );
}