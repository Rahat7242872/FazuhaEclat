"use client";

import { useParams } from "next/navigation";
import { pro } from "../data";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();
  const product = pro.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.image || ""
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-xl">
        Product Not Found
      </div>
    );
  }

  // 🛒 ADD TO CART FUNCTION (LOCAL STORAGE)
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find((item: any) => item.id === product.id);

    if (existing) {
      cart = cart.map((item: any) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart 🛒");
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white pb-24 md:pb-10">

      {/* HEADER */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/5 px-4 py-4">
        <Link href="/pro">
          <button className="text-[#D4AF37] text-sm">
            ← Back
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT IMAGE */}
          <div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#111] rounded-2xl overflow-hidden border border-[#D4AF37]/10"
            >
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[320px] sm:h-[450px] md:h-[600px] object-cover"
              />
            </motion.div>

            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {product.images?.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`min-w-[70px] rounded-xl overflow-hidden border-2 ${
                    selectedImage === img
                      ? "border-[#D4AF37]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <span className="text-[#D4AF37] uppercase text-xs tracking-[0.2em]">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-6xl font-serif mt-3">
              {product.name}
            </h1>

            <div className="mt-4 flex gap-3 items-center">
              <span className="text-3xl font-bold text-[#D4AF37]">
                ${product.price}
              </span>

              <span className="text-green-400 bg-green-500/10 px-3 py-1 rounded-full text-sm">
                {product.stock}
              </span>
            </div>

            <p className="text-gray-400 mt-5">
              {product.description}
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {product.features?.map((f: string, i: number) => (
                <div
                  key={i}
                  className="bg-[#111] border border-[#D4AF37]/10 px-3 py-2 rounded-xl text-sm"
                >
                  ✔ {f}
                </div>
              ))}
            </div>

            {/* DESKTOP BUTTONS */}
            <div className="hidden md:flex gap-4 mt-10">

              <button
                onClick={addToCart}
                className="flex-1 bg-[#D4AF37] text-black py-4 rounded-full font-semibold hover:bg-white transition"
              >
                Buy Now
              </button>

              <button
                onClick={addToCart}
                className="flex-1 border border-[#D4AF37] text-[#D4AF37] py-4 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
              >
                Add To Cart
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* MOBILE STICKY */}
      <div className="fixed bottom-0 left-0 w-full bg-black/95 border-t border-white/10 p-3 flex md:hidden gap-3">

        <button
          onClick={addToCart}
          className="flex-1 border border-[#D4AF37] text-[#D4AF37] py-3 rounded-xl"
        >
          Add to Cart
        </button>

        <button
          onClick={addToCart}
          className="flex-1 bg-[#D4AF37] text-black py-3 rounded-xl font-semibold"
        >
          Buy Now
        </button>

      </div>

    </section>
  );
}