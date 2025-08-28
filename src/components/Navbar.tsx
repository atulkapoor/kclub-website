"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { products } from "../../src/app/data/products";
import { services } from "../../src/app/data/services";
import * as Icons from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState<null | "products" | "services">(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 
                      flex justify-between items-center px-6 lg:px-36 py-4 
                      border-b shadow-sm">
      {/* Logo */}
      <div className="font-bold text-xl">Logo</div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8 items-center" ref={dropdownRef}>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>

        {/* Products Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setOpenDropdown("products")}
        >
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "products" ? null : "products")
            }
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            Products
          </button>
          {openDropdown === "products" && (
            <div
              className="absolute left-0 mt-4 grid grid-cols-2 lg:grid-cols-3 gap-6 
                          bg-white shadow-xl border rounded-xl p-6 w-[700px] z-50"
            >
              {products.map((item, idx) => {
                const Icon = (Icons as any)[item.icon];
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
                  >
                    <Icon className="w-6 h-6 text-gray-700 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                      {/* <p className="text-xs text-gray-500">{item.description}</p> */}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setOpenDropdown("services")}
        >
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "services" ? null : "services")
            }
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            Services
          </button>
          {openDropdown === "services" && (
            <div
              className="absolute left-0 mt-4 grid grid-cols-2 lg:grid-cols-3 gap-6 
                          bg-white shadow-xl border rounded-xl p-6 w-[700px] z-50"
            >
              {services.map((item, idx) => {
                const Icon = (Icons as any)[item.icon];
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
                  >
                    <Icon className="w-6 h-6 text-gray-700 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                      {/* <p className="text-xs text-gray-500">{item.description}</p> */}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
       <Link href="/tech" className="text-gray-600 hover:text-gray-900">
        Tech consult
        </Link>
        <Link href="/custom_saas" className="text-gray-600 hover:text-gray-900">
        Custom SaaS
        </Link>
        <Link href="/mobile_app" className="text-gray-600 hover:text-gray-900">
          Mobile App 
        </Link>
        <Link href="/industries" className="text-gray-600 hover:text-gray-900">
          Industries
        </Link>
        <Link href="/resources" className="text-gray-600 hover:text-gray-900">
          Resources
        </Link>
        <Link href="/careers" className="text-gray-600 hover:text-gray-900">
          Careers
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact Us
        </Link>
      </nav>

      {/* Desktop CTA */}
      <button className="hidden lg:block bg-black text-white px-4 py-2 rounded text-sm">
        Book a Demo
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

            {/* Products Mobile Accordion */}
            <details>
              <summary className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-gray-900">
                Products
              </summary>
              <div className="mt-2 flex flex-col space-y-3 pl-4 border-l border-gray-200">
                {products.map((item, idx) => {
                  const Icon = (Icons as any)[item.icon];
                  return (
                    <Link
                      key={idx}
                      href={item.link}
                      className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
                    >
                      <Icon className="w-5 h-5 text-gray-700 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">
                          {item.name}
                        </h4>
                        {/* <p className="text-xs text-gray-500">{item.description}</p> */}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </details>

            {/* Services Mobile Accordion */}
            <details>
              <summary className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-gray-900">
                Services
              </summary>
              <div className="mt-2 flex flex-col space-y-3 pl-4 border-l border-gray-200">
                {services.map((item, idx) => {
                  const Icon = (Icons as any)[item.icon];
                  return (
                    <Link
                      key={idx}
                      href={item.link}
                      className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
                    >
                      <Icon className="w-5 h-5 text-gray-700 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">
                          {item.name}
                        </h4>
                        {/* <p className="text-xs text-gray-500">{item.description}</p> */}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </details>
            <Link href="/tech" className="text-gray-600 hover:text-gray-900">
            Tech consult
            </Link>
            <Link href="/custom_saas" className="text-gray-600 hover:text-gray-900">
            Custom SaaS
            </Link>
            <Link href="/mobile_app" className="text-gray-600 hover:text-gray-900">
              Mobile App 
            </Link>
            <Link href="/industries" className="text-gray-600 hover:text-gray-900">
              Industries
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-gray-900">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>

            <button className="bg-black text-white px-4 py-2 rounded text-sm w-fit">
              Book a Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
