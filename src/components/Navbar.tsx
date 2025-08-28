"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 
                 flex justify-between items-center px-4 md:px-6 lg:px-36 py-4 
                 border-b shadow-b"
    >
      {/* Logo */}
      <div className="font-bold text-xl">Logo</div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8">
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
        <Link href="/products" className="text-gray-600 hover:text-gray-900">
          Products
        </Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-900">
          Services
        </Link>
        <Link href="/tech" className="text-gray-600 hover:text-gray-900">
        Tech consult
        </Link>
        <Link href="/custom_saas" className="text-gray-600 hover:text-gray-900">
        Custom SaaS
        </Link>
        <Link href="/mobile_app" className="text-gray-600 hover:text-gray-900">
          Mobile App 
        </Link>
        <Link href="/industry" className="text-gray-600 hover:text-gray-900">
          Industries
        </Link>
        <Link href="/career" className="text-gray-600 hover:text-gray-900">
          Career
        </Link>
        <Link href="/contact_us" className="text-gray-600 hover:text-gray-900">
          Contact Us
        </Link> 
      </nav>

      {/* Desktop CTA */}
      <button className="hidden lg:block bg-black text-white px-4 py-2 rounded text-sm">
        Get in touch
      </button>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col space-y-1 p-2"
      >
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <nav className="flex flex-col space-y-4 p-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link
              href="/tech"
              className="text-gray-600 hover:text-gray-900"
            >
              Tech & consulting
            </Link> 
            <Link href="/mobile_app" className="text-gray-600 hover:text-gray-900">
          Mobile App & Dev 
            </Link>
            <Link href="/industry" className="text-gray-600 hover:text-gray-900">
          Industries
        </Link>
            <Link href="/career" className="text-gray-600 hover:text-gray-900">
              Career
            </Link>
            <Link href="/contact_us" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded text-sm w-fit">
              Get in touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
