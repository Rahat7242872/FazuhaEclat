"use client";

import {
  
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 border-t border-[#1A1A1A] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4AF37]/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-[#D4AF37] text-3xl font-serif tracking-[0.25em] uppercase">
                Fazuha Eclat
              </h3>

              <div className="w-16 h-[1px] bg-[#D4AF37]/50 mt-4"></div>
            </div>

            <p className="text-sm leading-relaxed text-gray-500 italic">
              Redefining luxury through ethical sourcing and timeless craftsmanship.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>

              <a
                href="mailto:info@fazuhaeclat.com"
                className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-8">
              Navigation
            </h4>

            <ul className="space-y-4 text-sm">
              {["The Collection", "Our Story", "Amazon Store", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#D4AF37] transition-all duration-300 hover:pl-2"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-8">
              Information
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>

              <li>
                
              </li>
            </ul>
          </div>

          {/* Office */}
          <div className="space-y-6">
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-8">
              Office
            </h4>

            <div className="flex items-start gap-4">
              <MapPin
                size={18}
                className="text-[#D4AF37] mt-1 shrink-0"
              />

              <address className="not-italic text-sm leading-relaxed text-gray-500">
                <span className="text-white font-medium block mb-1">
                  Fazuha Eclat LLC
                </span>

                6001 W Parmer Lane, Ste 370 #543A
                <br />
                Austin, TX 78727, USA
              </address>
            </div>

            <div className="flex items-center gap-4">
              <Phone
                size={18}
                className="text-[#D4AF37] shrink-0"
              />

              <a
                href="tel:+17372835054"
                className="text-sm hover:text-white transition-colors"
              >
                +1 737-283-5054
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
              © 2026 Fazuha Eclat LLC
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gray-700">
              Crafted by{" "}
              <a
                href="https://www.raddsoftllc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-yellow-300 transition-colors duration-300"
              >
                Raddsoft LLC
              </a>
            </p>
          </div>

          <div className="flex gap-4 text-[10px] uppercase tracking-[0.2em]">
            <span className="border border-[#2A2A2A] px-4 py-2 rounded-full">
              Secure Checkout
            </span>

            <span className="border border-[#2A2A2A] px-4 py-2 rounded-full">
              Global Shipping
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}