"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const loadCart = () => {
      const data = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(data);
    };

    loadCart();
    window.addEventListener("storage", loadCart);

    return () => window.removeEventListener("storage", loadCart);
  }, []);

  const updateCart = (newCart: any[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  const removeItem = (id: number) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const incQty = (id: number) => {
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decQty = (id: number) => {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <section className="min-h-screen bg-[#050505] text-white px-4 md:px-10 py-24">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl font-serif flex items-center gap-3">
            <ShoppingBag className="text-[#D4AF37]" />
            Your Cart
          </h1>
          <p className="text-gray-400 mt-2">Luxury shopping experience</p>
        </div>

        <Link
          href="/product"
          className="text-[#D4AF37] flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <div className="max-w-4xl mx-auto bg-[#111] border border-[#D4AF37]/10 rounded-[30px] py-20 text-center">
          <ShoppingBag size={80} className="mx-auto text-[#D4AF37]/40" />
          <h2 className="text-2xl mt-6">Your cart is empty</h2>
          <p className="text-gray-400 mt-2">Add products to continue</p>
        </div>
      ) : (
        <>
          {/* CART LIST */}
          <div className="max-w-7xl mx-auto space-y-5">

            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >

                {/* 📱 MOBILE HORIZONTAL CARD */}
                <div className="md:hidden bg-[#111] border border-[#D4AF37]/10 rounded-2xl p-3 flex items-center gap-3">

                  {/* IMAGE SMALL LEFT */}
                  <div className="relative w-16 h-16 bg-black rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CENTER INFO */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-semibold truncate">
                      {item.name}
                    </h2>

                    <p className="text-[#D4AF37] text-sm font-bold">
                      ${item.price}
                    </p>

                    <p className="text-xs text-gray-400">
                      Total ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>

                  {/* QTY + ACTION */}
                  <div className="flex flex-col items-end gap-2">

                    {/* QTY CONTROL */}
                    <div className="flex items-center gap-2 bg-black border border-white/10 rounded-full px-2 py-1">
                      <button onClick={() => decQty(item.id)}>
                        <Minus size={14} />
                      </button>

                      <span className="text-sm">{item.qty}</span>

                      <button onClick={() => incQty(item.id)}>
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>
                </div>
                {/* 💻 DESKTOP ROW */}
                <div className="hidden md:flex items-center justify-between bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-[#D4AF37]/10 rounded-[25px] p-5">

                  {/* IMAGE LEFT */}
                  <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1 ml-5">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-[#D4AF37] font-bold">${item.price}</p>
                  </div>

                  {/* QTY */}
                  <div className="flex items-center gap-3 bg-black border border-white/10 rounded-full px-4 py-2">
                    <button onClick={() => decQty(item.id)}>
                      <Minus size={18} />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => incQty(item.id)}>
                      <Plus size={18} />
                    </button>
                  </div>

                  {/* TOTAL */}
                  <div className="text-center min-w-[120px]">
                    <p className="text-gray-400 text-sm">Total</p>
                    <h3 className="text-[#D4AF37] font-bold">
                      ${(item.price * item.qty).toFixed(2)}
                    </h3>
                  </div>

                  {/* DELETE */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>
              </motion.div>
            ))}

          </div>

          {/* CHECKOUT */}
          <div className="max-w-7xl mx-auto mt-10 bg-gradient-to-r from-[#111] to-[#0A0A0A] border border-[#D4AF37]/10 rounded-[30px] p-5 md:p-8 flex flex-row items-center justify-between gap-4">

            {/* LEFT */}
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs md:text-sm">Total Price</p>
              <h2 className="text-xl md:text-4xl font-bold text-[#D4AF37]">
                ${total.toFixed(2)}
              </h2>
            </div>

            {/* RIGHT BUTTON */}
            <Link href={"/checkout"} className="bg-[#D4AF37] hover:bg-white text-black px-5 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base whitespace-nowrap active:scale-95 transition">
              Checkout
            </Link>
            

          </div>
        </>
      )}
    </section>
  );
}