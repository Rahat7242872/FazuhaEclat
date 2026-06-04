"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[999] bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-[75px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="/#">
            <Image
              src="/assets/images/logo/fazuhaeclat.png"
              alt="Logo"
              width={170}
              height={45}
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-[3px] text-gray-300">
            <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
            <Link href="/product" className="hover:text-[#D4AF37]">Products</Link>
            <Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link>
          </nav>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center gap-3 text-white">

            {/* CART ICON (STATIC) */}
            <Link href="/cart">
              <div className="w-11 h-11 rounded-full border border-[#D4AF37]/30 bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition">
                <ShoppingCart size={18} />
              </div>
            </Link>

            {/* LOGIN BUTTON */}
            <Link href="/auth/login">
              <button className="
            flex items-center justify-center
             px-4 py-2
             rounded-full
             border border-[#D4AF37]/40
             bg-white/5
              text-sm font-medium text-whi
              hover:bg-[#D4AF37]
                hover:text-black
               transition-all duration-300
               backdrop-blur-md
                  ">
                Login
              </button>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[75px] left-0 w-full z-[998] bg-black/95 backdrop-blur-xl border-t border-[#D4AF37]/20 transition-all duration-300 ${open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center py-8 space-y-6 text-sm uppercase tracking-[3px] text-gray-300">

          <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#D4AF37]">
            Home
          </Link>

          <Link href="/product" onClick={() => setOpen(false)} className="hover:text-[#D4AF37]">
            Products
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#D4AF37]">
            Contact
          </Link>

          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2"
          >
            <ShoppingCart size={18} />
            Cart
          </Link>

        </div>
      </div>
    </>
  );
}