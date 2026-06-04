"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CreditCard, Truck, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [payment, setPayment] = useState("cod");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  const placeOrder = () => {
    const order = {
      customer: form,
      payment,
      items: cart,
      total,
      createdAt: new Date(),
    };

    localStorage.setItem("latestOrder", JSON.stringify(order));
    localStorage.removeItem("cart");

    alert("Order Placed Successfully ✨");
    window.location.href = "/";
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen mt-100 bg-black flex items-center justify-center text-white text-center px-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif">
            Your Cart is Empty
          </h2>
          <p className="text-gray-400 mt-3">
            Go back and add luxury products
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-10 py-16 relative">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF37_0%,transparent_50%)] opacity-10" />

      <div className="relative max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-14"
        >
          <h1 className="text-4xl md:text-6xl font-serif">
            Checkout
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Secure Luxury Shopping Experience
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT FORM */}
          <div className="lg:col-span-2 space-y-6">

            {/* FORM CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-8">

              <h2 className="text-xl md:text-2xl font-semibold mb-5">
                Customer Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {["name", "phone", "email", "address", "city"].map(
                  (field, i) => (
                    <input
                      key={i}
                      placeholder={field.toUpperCase()}
                      className="input"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [field]: e.target.value,
                        })
                      }
                    />
                  )
                )}
              </div>
            </div>

            {/* PAYMENT CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-8">

              <h2 className="text-xl md:text-2xl font-semibold mb-5">
                Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* CASH */}
                <button
                  onClick={() => setPayment("cod")}
                  className={`paymentCard ${
                    payment === "cod" ? "active" : ""
                  }`}
                >
                  <Truck />
                  Cash On Delivery
                </button>

                {/* CARD */}
                <button
                  onClick={() => setPayment("card")}
                  className={`paymentCard ${
                    payment === "card" ? "active" : ""
                  }`}
                >
                  <CreditCard />
                  Card Payment
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="lg:col-span-1">

            <div className="sticky top-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-6">

              <h2 className="text-xl md:text-2xl font-semibold mb-5">
                Order Summary
              </h2>

              {/* ITEMS */}
              <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 bg-black/20 p-3 rounded-2xl border border-white/5"
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-[#D4AF37] text-xs">
                        {item.qty} × ${item.price}
                      </p>
                    </div>

                    <p className="text-sm font-bold">
                      ${(item.qty * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="mt-6 space-y-2 border-t border-white/10 pt-5">

                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping}`}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#D4AF37]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={placeOrder}
                className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-yellow-200 text-black font-bold hover:scale-[1.02] transition active:scale-95"
              >
                Complete Order
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                <ShieldCheck size={14} />
                Secure SSL Protected Checkout
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          outline: none;
          transition: 0.3s;
        }

        .input:focus {
          border-color: #D4AF37;
          box-shadow: 0 0 0 3px rgba(212,175,55,0.15);
        }

        .paymentCard {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: 0.3s;
          background: rgba(255,255,255,0.03);
        }

        .paymentCard:hover {
          border-color: rgba(212,175,55,0.4);
        }

        .paymentCard.active {
          border-color: #D4AF37;
          background: rgba(212,175,55,0.1);
        }
      `}</style>

    </section>
  );
}