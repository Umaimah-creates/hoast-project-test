"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLaptopCode, FaTools, FaStar } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: "website-creation",
      icon: (
        <FaLaptopCode className="text-[#F28C38] text-3xl sm:text-4xl mb-3" />
      ),
      title: "Website Creation",
      description:
        "Custom-built, mobile-optimized restaurant websites that turn visitors into paying customers through online ordering features.",
      features: [
        "Mobile-First Design",
        "Menu Integration",
        "Online Reservations",
        "SEO Optimized",
      ],
    },
    {
      id: "website-management",
      icon: <FaTools className="text-[#F28C38] text-3xl sm:text-4xl mb-3" />,
      title: "Website Management",
      description:
        "Complete hands-off management so you can focus on what you do best — serving great food.",
      features: [
        "Content Updates",
        "Security Monitoring",
        "Performance Optimization",
        "24/7 Support",
      ],
    },
    {
      id: "review-optimization",
      icon: <FaStar className="text-[#F28C38] text-3xl sm:text-4xl mb-3" />,
      title: "Review Optimization",
      description:
        "Maximize your online reputation across Google, Yelp, and other review platforms.",
      features: [
        "Review Management",
        "Rating Improvement",
        "Response Strategy",
        "Local SEO",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      text: "One-on-one chat so we can learn about your restaurant and goals. (30 minutes)",
    },
    {
      step: "02",
      title: "Custom Proposal",
      text: "Receive a tailored strategy and timeline for your digital transformation. (2–3 days)",
    },
    {
      step: "03",
      title: "Website Creation",
      text: "We build your stunning, conversion-optimized restaurant website. (1–2 weeks)",
    },
    {
      step: "04",
      title: "Launch & Optimize",
      text: "Go live with ongoing management, updates, and optimization. (Monthly)",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EDEDED] to-white py-16 sm:py-20 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 leading-snug">
          What <span className="text-[#F28C38]">We Do</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          We help restaurants thrive online with tailored solutions designed to
          attract, engage, and convert customers.
        </p>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#F28C38] to-transparent" />

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-shadow p-5 sm:p-6 text-center sm:text-left"
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center sm:justify-start"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold text-black mt-2 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              {service.description}
            </p>
            <ul className="text-gray-600 text-sm space-y-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center sm:justify-start justify-center"
                >
                  <span className="w-2 h-2 bg-[#F28C38] rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#F28C38] to-transparent" />

      {/* Process */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-12 sm:mb-16">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Mobile vertical line */}
            <div className="absolute top-0 left-5 w-1 h-full bg-gray-200 md:hidden" />
            {process.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow p-5 text-center md:text-left relative"
              >
                {/* Step circle */}
                <div className="w-10 h-10 md:w-12 md:h-12 mb-3 rounded-full bg-[#F28C38] text-white flex items-center justify-center font-bold shadow-md mx-auto md:mx-0 relative z-10">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-black mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Ready to start your restaurant&apos;s digital transformation?
        </h2>
        <p className="text-gray-700 mb-6">
          Let’s bring your restaurant’s online presence to life — and keep it
          thriving.
        </p>
        <Link
          href="/contact"
          className="block sm:inline-block bg-[#F28C38] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#d97628] transition-colors duration-300 w-full sm:w-auto"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
