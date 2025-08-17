"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"" | "success" | "error">("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-[#EDEDED] to-white py-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Let’s <span className="text-[#F28C38]">Connect</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Have a question, idea, or project in mind? We’re here to help you take
          your restaurant’s digital presence to the next level.
        </p>
      </motion.section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#F28C38]"
        >
          <h3 className="text-2xl font-semibold text-black mb-6">
            Send us a Message
          </h3>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-800 font-semibold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              aria-label="Name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-[#F28C38] transition"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              aria-label="Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-[#F28C38] transition"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-800 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              aria-label="Message"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-[#F28C38] transition"
            />
          </div>

          <button
            type="submit"
            className="bg-[#F28C38] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#d97628] transition-colors duration-300 w-full"
          >
            Send Message
          </button>

          {/* Success/Error Message */}
          {status === "success" && (
            <p className="mt-4 text-green-600 text-sm">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 text-sm">
              ❌ Oops! Something went wrong. Try again.
            </p>
          )}
        </motion.form>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200 flex items-center space-x-4">
            <FaEnvelope className="text-[#F28C38] text-2xl" />
            <div>
              <h4 className="font-semibold text-black">Email</h4>
              <p className="text-gray-700">team@hoast.us</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200 flex items-center space-x-4">
            <FaPhone className="text-[#F28C38] text-2xl" />
            <div>
              <h4 className="font-semibold text-black">Phone</h4>
              <p className="text-gray-700">+1 (234) 567-890</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200 flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#F28C38] text-2xl" />
            <div>
              <h4 className="font-semibold text-black">Location</h4>
              <p className="text-gray-700">Los Angeles, CA</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
