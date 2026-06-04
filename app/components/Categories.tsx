"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HeartPulse,
  Sparkles,
  Home,
  PawPrint,
  Gem,
} from "lucide-react";

const categories = [
  {
    name: "Beauty",
    icon: Sparkles,
    href: "/product",
  },
  {
    name: "Accessories",
    icon: Gem,
    href: "/product",
  },
  {
    name: "Pet Supplies",
    icon: PawPrint,
    href: "/product",
  },
  {
    name: "Home & Kitchen",
    icon: Home,
    href: "/product",
  },
  {
    name: "Health",
    icon: HeartPulse,
    href: "/product",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#0B0B0B] py-12 md:py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-14 px-4">
          <span className="uppercase tracking-[0.2em] text-[#D4AF37] text-xs md:text-sm">
            Explore Collection
          </span>

          <h2 className="text-2xl md:text-5xl font-serif mt-2">
            Shop By{" "}
            <span className="text-[#D4AF37] italic">
              Category
            </span>
          </h2>

          <div className="w-10 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide px-4">
          <div className="flex gap-4 min-w-max pb-2">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={category.href}>
                    <div className="group w-[130px] bg-[#111] border border-[#D4AF37]/10 rounded-[22px] p-4 text-center hover:border-[#D4AF37]/50 transition-all duration-300">

                      {/* Icon */}
                      <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition">
                        <Icon
                          size={22}
                          className="text-[#D4AF37] group-hover:text-black transition"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 text-sm font-medium text-white leading-tight">
                        {category.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-5 px-5 md:px-16">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={category.href}>
                  <div className="group bg-[#111111] border border-[#D4AF37]/10 rounded-[30px] p-6 text-center hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 h-full">

                    <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition">
                      <Icon
                        size={28}
                        className="text-[#D4AF37] group-hover:text-black transition"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}