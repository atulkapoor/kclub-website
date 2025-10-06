// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { products } from "../../src/app/data/products";
// import { services } from "../../src/app/data/services";
// import * as Icons from "lucide-react";
// import { ChevronDown } from "lucide-react"; // 🔽 arrow
// import PopupForm from "@/components/PopupForm";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // mobile menu
//   const [openDropdown, setOpenDropdown] = useState<null | "products" | "services">(null);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close dropdown on outside click (desktop)
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setOpenDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // --- 🔑 Utility: get icon safely ---
//   const getIcon = (iconName: string) => {
//     return (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[iconName] || null;
//   };

//   // --- Close mobile menu on link click ---
//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//   };

//   const [open, setOpen] = useState(false);
//   const openModal = () => setOpen(true);
//   const closeModal = () => setOpen(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white z-50 
//                       flex justify-between items-center px-6 lg:px-36 py-4 
//                       border-b shadow-sm">
//       {/* Logo */}
//       <div className="font-bold text-xl">
//         <Link href="/" className="text-gray-600 hover:text-gray-900">Logo</Link></div>

//       {/* Desktop Navigation */}
//       <nav className="hidden lg:flex space-x-8 items-center" ref={dropdownRef}>
//         <Link href="/about" className="text-gray-600 hover:text-gray-900">
//           About
//         </Link>

//         {/* Products Dropdown (Desktop Hover + Click) */}
//         <div
//           className="relative"
//           onMouseEnter={() => setOpenDropdown("products")}
//         >
//            <div className="flex items-center">
//             <Link
//               href="/products"
//               className="text-gray-600 hover:text-gray-900"
//             >
//               Products
//             </Link>
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "products" ? null : "products")
//               }
//               className="ml-1"
//             >
//               <ChevronDown className="w-4 h-4" />
//             </button>
//           </div>
//           {openDropdown === "products" && (
//             <div
//               className="absolute left-0 mt-4 grid grid-cols-2 lg:grid-cols-3 gap-6 
//                           bg-white shadow-xl border rounded-xl p-6 w-[700px] z-50"
//             >
//               {products.map((item, idx) => {
//                 const Icon = getIcon(item.icon);
//                 return (
//                   <Link
//                     key={idx}
//                     href={item.link}
//                     className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
//                   >
//                     {Icon && <Icon className="w-6 h-6 text-gray-700 mt-1" />}
//                     <div>
//                       <h4 className="font-semibold text-sm text-gray-900" onClick={handleLinkClick}>{item.name}</h4>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* Services Dropdown (Desktop Hover + Click) */}
//         <div
//           className="relative"
//           onMouseEnter={() => setOpenDropdown("services")}
//         >
//             <div className="flex items-center">
//             <Link
//               href="/services"
//               className="text-gray-600 hover:text-gray-900"
//             >
//               Services
//             </Link>
//             <button
//                 onClick={() =>
//                     setOpenDropdown(openDropdown === "services" ? null : "services")
//                   }
//               className="ml-1"
//             >
//               <ChevronDown className="w-4 h-4" />
//             </button>
//           </div>
//           {openDropdown === "services" && (
//             <div
//               className="absolute left-0 mt-4 grid grid-cols-2 lg:grid-cols-3 gap-6 
//                           bg-white shadow-xl border rounded-xl p-6 w-[700px] z-50"
//             >
//               {services.map((item, idx) => {
//                 const Icon = getIcon(item.icon);
//                 return (
//                   <Link
//                     key={idx}
//                     href={item.link}
//                     className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
//                   >
//                     {Icon && <Icon className="w-6 h-6 text-gray-700 mt-1" />}
//                     <div>
//                       <h4 className="font-semibold text-sm text-gray-900" onClick={handleLinkClick}>{item.name}</h4>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           )}
//         </div>
// {/* 
//         <Link href="/tech" className="text-gray-600 hover:text-gray-900">
//           Tech consult
//         </Link>
//         <Link href="/custom_saas" className="text-gray-600 hover:text-gray-900">
//           Custom SaaS
//         </Link>
//         <Link href="/mobile_app" className="text-gray-600 hover:text-gray-900">
//           Mobile App 
//         </Link> */}
//         {/* <Link href="/blog" className="text-gray-600 hover:text-gray-900">
//           Blog
//         </Link> */}
//         <Link href="/industries" className="text-gray-600 hover:text-gray-900">
//           Industries
//         </Link> 
//         <Link href="/resources" className="text-gray-600 hover:text-gray-900">
//           Resources
//         </Link>
//         <Link href="/careers" className="text-gray-600 hover:text-gray-900">
//           Careers
//         </Link>
//         <Link href="/contact" className="text-gray-600 hover:text-gray-900">
//           Contact Us
//         </Link>
//       </nav>

//       {/* Desktop CTA */}
//       <button className="hidden lg:block bg-black text-white px-4 py-2 rounded text-sm" onClick={openModal}>
//         Book a Demo
//       </button>

//       {/* Mobile Hamburger */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="lg:hidden flex flex-col space-y-1 p-2"
//       >
//         <span
//           className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
//             isOpen ? "rotate-45 translate-y-2" : ""
//           }`}
//         ></span>
//         <span
//           className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
//             isOpen ? "opacity-0" : ""
//           }`}
//         ></span>
//         <span
//           className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
//             isOpen ? "-rotate-45 -translate-y-2" : ""
//           }`}
//         ></span>
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
//           <nav className="flex flex-col space-y-4 p-6">
//             <Link href="/about" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               About
//             </Link>
//               <div className="flex justify-between items-center w-full">
//               {/* Services Main Link */}
//               <Link
//                 href="/products"
//                 onClick={handleLinkClick}
//                 className="text-gray-600 hover:text-gray-900 flex-1"
//               >
//                 Products
//               </Link>

//               {/* Chevron toggle for dropdown */}
//               <button
//                 onClick={() =>
//                       setOpenDropdown(openDropdown === "products" ? null : "products")
//                     }
//                 className="p-2"
//               >
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform ${
//                     openDropdown === "products" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//             </div>
//             {openDropdown === "products" && (
//               <div className="mt-2 flex flex-col space-y-3 pl-4 border-l border-gray-200">
//                 {products.map((item, idx) => {
//                   const Icon = getIcon(item.icon);
//                   return (
//                     <Link
//                       key={idx}
//                       href={item.link}
//                       onClick={handleLinkClick}
//                       className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
//                     >
//                       {Icon && <Icon className="w-5 h-5 text-gray-700 mt-1" />}
//                       <div>
//                         <h4 className="font-semibold text-sm text-gray-900"  onClick={handleLinkClick}>
//                           {item.name}
//                         </h4>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Services Mobile Accordion */}
//            <div className="flex justify-between items-center w-full">
//               {/* Services Main Link */}
//               <Link
//                 href="/services"
//                 onClick={handleLinkClick}
//                 className="text-gray-600 hover:text-gray-900 flex-1"
//               >
//                 Services
//               </Link>

//               {/* Chevron toggle for dropdown */}
//               <button
//                 onClick={() =>
//                   setOpenDropdown(openDropdown === "services" ? null : "services")
//                 }
//                 className="p-2"
//               >
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform ${
//                     openDropdown === "services" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//             </div>
//             {openDropdown === "services" && (
//               <div className="mt-2 flex flex-col space-y-3 pl-4 border-l border-gray-200">
//                 {services.map((item, idx) => {
//                   const Icon = getIcon(item.icon);
//                   return (
//                     <Link
//                       key={idx}
//                       href={item.link}
//                       onClick={handleLinkClick}
//                       className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
//                     >
//                       {Icon && <Icon className="w-5 h-5 text-gray-700 mt-1" />}
//                       <div  onClick={handleLinkClick}>
//                         <h4 className="font-semibold text-sm text-gray-900">
//                           {item.name}
//                         </h4>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             )}

//             {/* <Link href="/tech" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Tech consult
//             </Link> 
//             <Link href="/services" className="text-gray-600 hover:text-gray-900">
//               Services
//             </Link>
//             <Link href="/custom_saas" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Custom SaaS
//             </Link>
//             <Link href="/mobile_app" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Mobile App 
//             </Link> */}
//                {/* <Link href="/blog" className="text-gray-600 hover:text-gray-900">
//                 Blog
//               </Link> */}
//             <Link href="/industries" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Industries
//             </Link>
//             <Link href="/careers" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Careers
//             </Link>
//             <Link href="/contact" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Contact Us
//             </Link>

//             <button className="bg-black text-white px-4 py-2 rounded text-sm w-fit" onClick={openModal}>
//               Book a Demo
//             </button>
//           </nav>
//         </div>
//       )}
//             <PopupForm isOpen={open} onClose={closeModal} />
      
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface MenuItem {
  name: string;
  link: string;
  items?: { name: string; link: string }[]; // optional
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const toggleMobile = () => {
    setMobileMenu(!mobileMenu);
    setOpenMenu(null);
  };

  const menus: MenuItem[] = [
    {
      name: "Company",
      link: "/company", // optional dropdown items
      items: [
        { name: "About Us", link: "/company/about" },
        { name: "Careers", link: "/company/careers" },
        { name: "Contact", link: "/company/contact" },
      ],
    },
    {
      name: "Products",
      link: "/products",
      items: [
        { name: "Product A", link: "/products/a" },
        { name: "Product B", link: "/products/b" },
        { name: "Product C", link: "/products/c" },
        { name: "Product D", link: "/products/d" },
        { name: "Product E", link: "/products/e" },
      ],
    },
    {
      name: "Services",
      link: "/services",
      items: [
        { name: "About Us", link: "/company/about" },
        { name: "Careers", link: "/company/careers" },
        { name: "Contact", link: "/company/contact" },
      ],
    },
    {
      name: "Industries",
      link: "/industries",
    },
    {
      name: "Resources",
      link: "/resources",
      items: [
        { name: "Docs", link: "/resources/docs" },
        { name: "Guides", link: "/resources/guides" },
        { name: "API", link: "/resources/api" },
      ],
    },
    {
      name: "Careers",
      link: "/careers",
    }

  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-black font-medium">
          {menus.map((menu) => (
            <div key={menu.name} className="relative group">
              <Link
                href={menu.link}
                className="flex items-center gap-1 hover:text-gray-700"
              >
                {menu.name} 
                {menu.items && menu.items.length > 0 && (
                  <ChevronDown size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"

                  />
        )}
              </Link>

              {menu.items && menu.items.length > 0 && (
                <div className="absolute left-0 mt-3 bg-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-80 duration-200">
                  {menu.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="hover:text-gray-600 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Book a Demo Button */}
        <Link
          href="/demo"
          className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800"
        >
          Book a Demo
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobile} className="md:hidden text-black">
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdowns */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t text-black font-medium">
          {menus.map((menu) => (
            <div key={menu.name} className="border-b">
              <Link
                href={menu.link}
                onClick={() => toggleDropdown(menu.name)}
                className="w-full flex justify-between items-center px-6 py-3 hover:bg-gray-50"
              >
                {menu.name} <ChevronDown size={18} />
              </Link>

              {menu.items && openMenu === menu.name && (
                <div className="pl-10 pb-3 space-y-2">
                  {menu.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="block hover:text-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <Link
              href="/demo"
              className="bg-black text-white w-full py-2 rounded-full hover:bg-gray-800"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}








// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { products } from "../../src/app/data/products";
// import { services } from "../../src/app/data/services";
// import * as Icons from "lucide-react";
// import { ChevronDown } from "lucide-react"; // 🔽 arrow
// import PopupForm from "@/components/PopupForm";
// import Image from "next/image";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false); // mobile menu
//   const [desktopDropdown, setDesktopDropdown] = useState<null | "products" | "services">(null);
//   const [mobileDropdown, setMobileDropdown] = useState<null | "products" | "services">(null);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close desktop dropdown on outside click
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setDesktopDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // --- 🔑 Utility: get icon safely ---
//   const getIcon = (iconName: string) => {
//     return (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[iconName] || null;
//   };

//   // --- Close mobile menu on link click ---
//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setMobileDropdown(null);
//     setDesktopDropdown(null);
//   };

//   const [open, setOpen] = useState(false);
//   const openModal = () => setOpen(true);
//   const closeModal = () => setOpen(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white z-50 
//                       flex justify-between items-center px-6 lg:px-36 py-4 
//                       border-b shadow-sm">
//       {/* Logo */}
//       <div className="font-bold text-xl">
//         <Link href="/" className="text-gray-600 hover:text-gray-900">
//           <Image
//             src="/logo.svg"
//             alt="Logo"
//           width={100}
//           height={40}
//           />
//         </Link>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="hidden lg:flex space-x-8 items-center" ref={dropdownRef}>
//         {/* <Link href="/about" className="text-gray-600 hover:text-gray-900">
//           About
//         </Link> */}
//         <Link href="/about" className="text-gray-600 hover:text-gray-900">
//           Company
//         </Link>

//         {/* Products Dropdown (Desktop Hover + Click) */}
//         <div
//           className="relative"
//           onMouseEnter={() => setDesktopDropdown("products")}
//           onMouseLeave={() => setDesktopDropdown(null)}

//         >
//           <div className="flex items-center">
//             <Link href="/products" className="text-gray-600 hover:text-gray-900">
//               Products
//             </Link>
//             <button
//               onClick={() =>
//                 setDesktopDropdown(desktopDropdown === "products" ? null : "products")
//               }
//               className="ml-1"
//             >
//               <ChevronDown className="w-4 h-4" />
//             </button>
//           </div>
//           {desktopDropdown === "products" && (
//             <div
//               className="absolute left-0 grid grid-cols-2 lg:grid-cols-3 gap-6 
//                           bg-white shadow-xl border rounded-xl p-6 w-[700px] z-50" 
//             >
//               {products.map((item, idx) => {
//                 const Icon = getIcon(item.icon);
//                 return (
//                   <Link
//                     key={idx}
//                     href={item.link}
//                     onClick={handleLinkClick}
//                     className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
//                   >
//                     {Icon && <Icon className="w-6 h-6 text-gray-700 mt-1" />}
//                     <div>
//                       <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* Services Dropdown (Desktop Hover + Click) */}
//         <div
//           className="relative"
//           onMouseEnter={() => setDesktopDropdown("services")}
//           onMouseLeave={() => setDesktopDropdown(null)}
//         >
//           <div className="flex items-center">
//             <Link href="/services" className="text-gray-600 hover:text-gray-900">
//               Services
//             </Link>
//             <button
//               onClick={() =>
//                 setDesktopDropdown(desktopDropdown === "services" ? null : "services")
//               }
//               className="ml-1"
//             >
//               <ChevronDown className="w-4 h-4" />
//             </button>
//           </div>
//           {desktopDropdown === "services" && (
//             <div
//               className="absolute left-0 grid grid-cols-2 lg:grid-cols-3 gap-6 
//                           bg-white shadow-xl border rounded-xl p-6 w-[700px] z-50"
//                           onMouseEnter={() => setDesktopDropdown("services")}
//                           onMouseLeave={() => setDesktopDropdown(null)}
//             >
//               {services.map((item, idx) => {
//                 const Icon = getIcon(item.icon);
//                 return (
//                   <Link
//                     key={idx}
//                     href={item.link}
//                     onClick={handleLinkClick}
//                     className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
//                   >
//                     {Icon && <Icon className="w-6 h-6 text-gray-700 mt-1" />}
//                     <div>
//                       <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         <Link href="/industries" className="text-gray-600 hover:text-gray-900">
//           Industries
//         </Link>
//         <Link href="/resources" className="text-gray-600 hover:text-gray-900">
//           Resources
//         </Link>
//         <Link href="/careers" className="text-gray-600 hover:text-gray-900">
//           Careers
//         </Link>
//         {/* <Link href="/contact" className="text-gray-600 hover:text-gray-900">
//           Contact Us
//         </Link> */}
//       </nav>

//       {/* Desktop CTA */}
//       <button className="hidden lg:block bg-[#050953] text-white px-4 py-2 rounded text-sm" onClick={openModal}>
//         Book a Demo
//       </button>

//       {/* Mobile Hamburger */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="lg:hidden flex flex-col space-y-1 p-2"
//       >
//         <span
//           className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
//             isOpen ? "rotate-45 translate-y-2" : ""
//           }`}
//         ></span>
//         <span
//           className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
//             isOpen ? "opacity-0" : ""
//           }`}
//         ></span>
//         <span
//           className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
//             isOpen ? "-rotate-45 -translate-y-2" : ""
//           }`}
//         ></span>
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
//           <nav className="flex flex-col space-y-4 p-6">
//             {/* <Link href="/about" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               About
//             </Link> */}
//             <Link href="/about" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Company
//             </Link>

//             {/* Products Mobile Accordion */}
//             <div className="flex justify-between items-center w-full">
//               <Link
//                 href="/products"
//                 onClick={handleLinkClick}
//                 className="text-gray-600 hover:text-gray-900 flex-1"
//               >
//                 Products
//               </Link>
//               <button
//                 onClick={() =>
//                   setMobileDropdown(mobileDropdown === "products" ? null : "products")
//                 }
//                 className="p-2"
//               >
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform ${
//                     mobileDropdown === "products" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//             </div>
//             {mobileDropdown === "products" && (
//               <div className="mt-2 flex flex-col space-y-3 pl-4 border-l border-gray-200">
//                 {products.map((item, idx) => {
//                   const Icon = getIcon(item.icon);
//                   return (
//                     <Link
//                       key={idx}
//                       href={item.link}
//                       onClick={handleLinkClick}
//                       className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
//                     >
//                       {Icon && <Icon className="w-5 h-5 text-gray-700 mt-1" />}
//                       <div>
//                         <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Services Mobile Accordion */}
//             <div className="flex justify-between items-center w-full">
//               <Link
//                 href="/services"
//                 onClick={handleLinkClick}
//                 className="text-gray-600 hover:text-gray-900 flex-1"
//               >
//                 Services
//               </Link>
//               <button
//                 onClick={() =>
//                   setMobileDropdown(mobileDropdown === "services" ? null : "services")
//                 }
//                 className="p-2"
//               >
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform ${
//                     mobileDropdown === "services" ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//             </div>
//             {mobileDropdown === "services" && (
//               <div className="mt-2 flex flex-col space-y-3 pl-4 border-l border-gray-200">
//                 {services.map((item, idx) => {
//                   const Icon = getIcon(item.icon);
//                   return (
//                     <Link
//                       key={idx}
//                       href={item.link}
//                       onClick={handleLinkClick}
//                       className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
//                     >
//                       {Icon && <Icon className="w-5 h-5 text-gray-700 mt-1" />}
//                       <div>
//                         <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             )}

//             <Link href="/industries" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Industries
//             </Link>
//             <Link href="/careers" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Careers
//             </Link>
//             {/* <Link href="/contact" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
//               Contact Us
//             </Link> */}

//             <button className="bg-black text-white px-4 py-2 rounded text-sm w-fit" onClick={openModal}>
//               Book a Demo
//             </button>
//           </nav>
//         </div>
//       )}
//       <PopupForm isOpen={open} onClose={closeModal} />
//     </header>
//   );
// }
