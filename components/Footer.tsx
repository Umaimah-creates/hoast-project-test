import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#000000] text-white py-8 mt-12"
      aria-label="Website Footer"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-sm text-center sm:text-left">
        
        {/* Left: Copyright */}
        <div className="order-3 sm:order-1">
          <p>&copy; {new Date().getFullYear()} HOAST. All rights reserved.</p>
        </div>

        {/* Right: Footer Navigation Links */}
        <nav
          className="order-2 sm:order-3 flex justify-center sm:justify-end flex-wrap gap-4"
          aria-label="Footer Navigation"
        >
          <Link href="/" className="hover:text-[#F28C38] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#F28C38] transition">
            About
          </Link>
          <Link href="/services" className="hover:text-[#F28C38] transition">
            What We Do
          </Link>
          <Link href="/contact" className="hover:text-[#F28C38] transition">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
