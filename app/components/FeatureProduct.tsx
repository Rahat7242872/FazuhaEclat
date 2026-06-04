"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProducts } from "../components/data/feature";
import { ShoppingCart } from "lucide-react";

export default function FeaturedProducts() {
  const addToCart = (item: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const exist = cart.find((p: any) => p.id === item.id);

    let updatedCart;

    if (exist) {
      updatedCart = cart.map((p: any) =>
        p.id === item.id ? { ...p, qty: p.qty + 1 } : p
      );
    } else {
      updatedCart = [...cart, { ...item, qty: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
    alert("Added to Cart 🛒");
  };

  return (
    <section className="bg-gradient-to-b from-black via-[#0A0A0A] to-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs">
            Handpicked Collection
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mt-2">
            Featured <span className="text-[#D4AF37] italic">Products</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {featuredProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-[#D4AF37]/40 transition"
            >

              {/* 🖼️ IMAGE → DETAILS PAGE */}
              <Link href={`/product/${item.id}`}>
                <div className="relative overflow-hidden h-[180px] md:h-[240px] cursor-pointer">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute top-3 left-3 text-[10px] bg-black/60 px-3 py-1 rounded-full text-[#D4AF37] uppercase backdrop-blur-md">
                    {item.category}
                  </span>

                </div>
              </Link>

              {/* CONTENT */}
              <div className="p-4">

                <h3 className="text-sm md:text-base font-semibold line-clamp-1">
                  {item.name}
                </h3>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-[#D4AF37] font-bold">
                    {item.currency}{item.price}
                  </span>

                  {/* 🛒 ADD TO CART */}
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-1 text-xs px-4 py-2 rounded-full bg-[#D4AF37] text-black hover:bg-white transition"
                  >
                    <ShoppingCart size={14} />
                    Add
                  </button>

                </div>
              </div>

              {/* HOVER HINT */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <span className="text-white text-[10px] bg-black/60 px-4 py-2 rounded-full backdrop-blur">
                  Click image for details
                </span>
              </div>

            </motion.div>
          ))}

        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-12">
          <Link href="/product">
            <button className="border border-[#D4AF37] px-8 py-3 rounded-full uppercase text-sm hover:bg-[#D4AF37] hover:text-black transition">
              View All Products
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}