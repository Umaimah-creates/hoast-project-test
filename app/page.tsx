"use client";

import Link from "next/link";
import MoreThanPretty from "@/components/MoreThanPretty";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Restaurant digital presence promotional video"
          title="HOAST Intro Video"
        >
          <source src="/hoast-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[1]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight max-w-2xl"
          >
            Your Restaurant&apos;s Digital Presence, Handled
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-md sm:max-w-2xl leading-relaxed"
          >
            From beautiful websites to Yelp and Google optimization — HOAST gives
            restaurants the modern edge they need, without the hassle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="block w-full sm:inline-block bg-[#F28C38] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-[#d97628] transition-all duration-300 text-sm sm:text-base"
            >
              Ready to host with HOAST?
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3-Point Section */}
      <section className="bg-gradient-to-b from-[#EDEDED] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {[
            {
              title: "Who We Help",
              text: "Independent restaurants and small chains that want to stand out online.",
              icon: "🍽️",
            },
            {
              title: "What We Do",
              text: "Build modern, high-performing websites, add online ordering functionality directly to your website and master Google & Yelp for you.",
              icon: "💻",
            },
            {
              title: "Why It Matters",
              text: "A strong digital presence means more customers, more reservations, and more revenue.",
              icon: "📈",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-l-2 sm:border-l-4 border-[#F28C38] rounded-lg p-5 sm:p-6 shadow hover:shadow-lg transition-shadow"
            >
              <div
                className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Existing Section */}
      <MoreThanPretty />
    </main>
  );
}
