'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#EDEDED] to-white py-16 sm:py-20 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-snug">
          About HOAST
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          We let you focus on serving — we&apos;ll handle the clicks.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            This chart shows what happens when a restaurant&apos;s online presence is
            fully optimized.
            <br />
            <br />
            <strong>39.8%</strong> more clicks from search
            <br />
            <strong>Up to 50%</strong> more foot traffic
            <br />
            <strong>Revenue growth as high as 80%</strong>
            <br />
            <br />
            At HOAST, we take the hassle of managing your digital presence off
            your plate. We build and maintain professional, high-converting
            websites, keep your Google Business Profile fresh and optimized, and
            improve your Yelp visibility and reviews.
            <br />
            <br />
            The result? More people find you online, more of them walk through
            your doors, and your business grows — without you having to lift a
            finger on the tech side.
          </p>
        </motion.div>

        {/* Right Graph */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full h-64 sm:h-80">
            <Image
              src="/graphs.png"
              alt="Restaurant growth graph"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center max-w-md">
            Values shown use midpoints from industry benchmarks; &apos;up to&apos; figures
            reflect best-case study results.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-56 sm:h-80 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/hoast-developers-photo.jpg" // ✅ make sure filename matches public/ exactly
            alt="HOAST founders working together"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-4 border-[#F28C38] pl-4 sm:pl-6 rounded-l-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            As two SoCal locals, we&apos;ve always been drawn to good food — not just
            what&apos;s trending, but the kind of places where the passion shows up on
            every plate. Over the past year, we spent our weekends exploring new
            spots all across LA — from laid-back taquerias to upscale bistros and
            everything in between. What we noticed? Some of the best restaurants
            weren&apos;t getting the attention they deserved. Incredible restaurants
            were losing business — not because of what was happening in the
            kitchen, but because of what wasn&apos;t happening online.
            <br />
            <br />
            We started talking to owners and quickly realized that most
            restaurants, no matter how big or small, face the same challenge: how
            do you maintain a strong digital presence when your time is consumed
            by running a dining room, managing staff, and creating memorable
            experiences?
            <br />
            <br />
            Zoheb, with firsthand experience in the restaurant world, understood
            the real stakes — how easily great places fall behind when digital
            tools don&apos;t keep up. Nayan, a student who&apos;s worked with growing
            startups, saw the opportunity to bring clarity and modern tools to an
            industry full of heart and hustle.
            <br />
            <br />
            Thus, it was a no-brainer. With our passion and experiences, we
            created <b>HOAST</b> to make it easier for restaurants to be seen,
            discovered, and chosen online. We&apos;re not a faceless tech platform or
            overpriced marketing firm. We&apos;re partners who understand both sides of
            the table — the passion behind the plate and the strategy behind the
            screen.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Ready to work with us?
        </h2>
        <p className="text-gray-700 mb-6">
          Let&apos;s bring your restaurant&apos;s digital presence to life.
        </p>
        <Link
          href="/contact"
          className="block sm:inline-block bg-[#F28C38] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#d97628] transition-colors duration-300 w-full sm:w-auto"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
