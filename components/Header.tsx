"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="w-full bg-white border-b border-gray-200 sticky top-0 z-50"
      role="banner"
      aria-label="Website Header"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20 relative">
        
        {/* Logo */}
        <Link href="/" className="flex items-center relative h-full">
          <div className="relative w-40 h-14 md:w-64 md:h-24 -mb-4 overflow-hidden rounded-full shadow-md">
            <Image
              src="/logo.jpeg"
              alt="HOAST Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`hover:text-[#F28C38] transition-colors ${
                pathname === link.path
                  ? "text-[#F28C38] font-semibold"
                  : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden px-4 pb-4 space-y-2"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block py-2 text-base ${
                pathname === link.path
                  ? "text-[#F28C38] font-semibold"
                  : "text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
