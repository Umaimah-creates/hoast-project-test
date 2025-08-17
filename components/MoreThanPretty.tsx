"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MoreThanPretty() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      role="region"
      aria-labelledby="more-than-pretty-heading"
    >
      {/* Left Column - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          id="more-than-pretty-heading"
          className="text-3xl md:text-4xl font-bold text-black mb-6"
        >
          More Than Just a Pretty Website
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At Hoast, we don&apos;t just make your restaurant look good — we make
          it easier to run.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span
              className="text-[#F28C38] font-bold"
              aria-hidden="true"
            >
              ✔
            </span>
            From beautifully designed menus to real-time updates on Google and
            Yelp.
          </li>
          <li className="flex items-start gap-2">
            <span
              className="text-[#F28C38] font-bold"
              aria-hidden="true"
            >
              ✔
            </span>
            Everything we do is about getting you more customers with less
            stress.
          </li>
          <li className="flex items-start gap-2">
            <span
              className="text-[#F28C38] font-bold"
              aria-hidden="true"
            >
              ✔
            </span>
            Whether you&apos;re a local neighborhood spot or a high-end concept
            in the city, we make sure your online presence feels as warm and
            polished as your front-of-house experience.
          </li>
        </ul>
      </motion.div>

      {/* Right Column - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="w-full max-w-md aspect-video relative">
          <Image
            src="/Capture.PNG" // Ensure this is inside /public
            alt="Preview of a restaurant website designed by Hoast"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-md shadow"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
