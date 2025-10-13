"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

interface SubItem {
  name?: string;
  link: string;
  desc?: string;
  img?: string; // optional image/icon
}

interface MenuItem {
  name: string;
  link: string;
  items?: SubItem[];
  width?: string; // e.g. w-72, w-96, w-[28rem]
  cols?: string; // e.g. grid-cols-1, grid-cols-2, grid-cols-3
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
      link: "#",
      width: "w-64",
      cols: "grid-cols-1",
      items: [
        {
          name: "About Us",
          link: "/about",
          desc: "Your digital transformation partner",
        },
        {
          name: "Contact Us",
          link: "/contact",
          desc: "Get in touch with our team today",
        },
      ],
    },
    {
      name: "Products",
      link: "/products",
      width: "w-[28rem]",
      cols: "grid-cols-3",
      items: [
        {
          // name: "Warehouse Management",
          link: "/products/warehouse-management",
          desc: "Warehouse Management",
          img: "/nav-img/warehouse1.png",
        },
        {
          // name: "Maritime Agency",
          link: "/products/maritime-agency-management",
          desc: "Maritime Agency",
          img: "/nav-img/maritime1.png",
        },
        {
          // name: "Communication Management",
          link: "/products/communication-management",
          desc: "Communication Management",
          img: "/nav-img/communication1.png",
        },
        {
          // name: "Healthcare Management",
          link: "/products/healthcare-management",
          desc: "Healthcare Management",
          img: "/nav-img/healthcare1.png",
        },
        {
          // name: "Lending Management",
          link: "/products/lending-management",
          desc: "Lending Management",
          img: "/nav-img/warehouse1.png",
        },
        {
          // name: "Transport Management",
          link: "/products/transport-management",
          desc: "Transport Management",
          img: "/nav-img/transport1.png",
        },
        {
          // name: "Edutech",
          link: "/products/edtech-platform",
          desc: "Edutech",
          img: "/nav-img/edutech1.png",
        },
        {
          // name: "Omnichannel ERP",
          link: "/products/omnichannel-erp",
          desc: "Omnichannel ERP1",
          img: "/nav-img/omichannel1.png",
        },
        {
          // name: "Omnichannel ERP",
          link: "/products/real-estate-erp",
          desc: "Omnichannel ERP2",
          img: "/nav-img/Group.png",
        },
      ],
    },
    {
      name: "Services",
      link: "/services",
      width: "w-[22rem]",
      cols: "grid-cols-1",
      items: [
        {
          name: "AI Services",
          link: "/services/ai-services",
          // desc: "Leverage AI to grow faster",
        },
        {
          name: "ODOO Services",
          link: "/services/odoo-services-page",
          // desc: "ODOO setup & customization",
        },
        {
          name: "SaaS Development",
          link: "/services/saas-app-development",
          // desc: "Build scalable SaaS platforms",
        },
        {
          name: "Mobile App Development",
          link: "/services/mobile-app-development",
          // desc: "Native & cross-platform apps",
        },
        {
          name: "Tech Consulting",
          link: "/services/tech-consulting-and-assessments",
          // desc: "Optimize your tech stack",
        },
      ],
    },
    {
      name: "Industries",
      link: "/industries",
      width: "w-48",
      cols: "grid-cols-1",
    },
    {
      name: "Resources",
      link: "/resources",
      width: "w-72",
      cols: "grid-cols-1",
      items: [
        {
          name: "Blog",
          link: "/blog",
          desc: "Insights and updates from the KClub team",
        },
        {
          name: "Case Studies",
          link: "/case_studies",
          desc: "Explore the success stories behind our solutions",
        },
      ],
    },
    {
      name: "Careers",
      link: "/careers",
      width: "w-48",
      cols: "grid-cols-1",
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          <Image src="/logo.svg" alt="Logo" width={100} height={40} />
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
                {menu.items && (
                  <ChevronDown
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                )}
              </Link>

              {/* Dropdown */}
              {menu.items && (
                <div
                  className={`absolute left-0 mt-3 bg-white shadow-lg rounded-lg p-4 grid ${menu.cols} gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${menu.width}`}
                >
                  {menu.items.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="hover:bg-gray-50 rounded-lg p-2 block transition-colors"
                    >
                      <div className="items-start gap-3">
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-8 object-contain"
                          />
                        )}
                        <div>
                          {item.name && (
                            <p className="font-semibold text-gray-800">
                              {item.name}
                            </p>
                          )}
                          {item.desc && (
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}

                  {/* "See all services" for Services menu */}
                  {menu.name === "Services" && (
                    <Link
                      href="/services"
                      className="flex items-center justify-end gap-1 text-sm font-medium text-blue-600 hover:underline mt-2"
                    >
                      See all services <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Book a Demo Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-[#050953] text-white px-5 py-2 rounded-xl hover:bg-gray-800"
        >
          Book a Demo
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMobile} className="md:hidden text-black">
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {mobileMenu && (
        <div className="md:hidden bg-white border-t text-black font-medium">
          {menus.map((menu) => (
            <div key={menu.name} className="border-b">
              <button
                onClick={() => toggleDropdown(menu.name)}
                className="w-full flex justify-between items-center px-6 py-3 hover:bg-gray-50"
              >
                {menu.name}
                {menu.items && <ChevronDown size={18} />}
              </button>

              {menu.items && openMenu === menu.name && (
                <div className="pl-10 pb-3 space-y-2">
                  {menu.items.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      onClick={() => setMobileMenu(false)}
                      className="block hover:text-gray-600"
                    >
                      <div className="flex items-start gap-3">
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-16 h-6 object-contain"
                          />
                        )}
                        <div>
                          {item.name && (
                            <p className="font-semibold">{item.name}</p>
                          )}
                          {item.desc && (
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}

                  {menu.name === "Services" && (
                    <Link
                      href="/services"
                      onClick={() => setMobileMenu(false)}
                      className="flex items-center gap-1 text-blue-600 text-sm pl-2 mt-2"
                    >
                      See all services <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="bg-black text-white w-full py-2 rounded-full hover:bg-gray-800"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )} */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t text-black font-medium">
          {menus.map((menu) => (
            <div key={menu.name} className="border-b">
              {menu.items ? (
                // 🔹 Dropdown Menu
                <>
                  <button
                    onClick={() => toggleDropdown(menu.name)}
                    className="w-full flex justify-between items-center px-6 py-3 hover:bg-gray-50"
                  >
                    {menu.name}
                    <ChevronDown size={18} />
                  </button>

                  {openMenu === menu.name && (
                    <div className="pl-10 pb-3 space-y-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.link}
                          href={item.link}
                          onClick={() => setMobileMenu(false)} // ✅ close menu on click
                          className="block hover:text-gray-600"
                        >
                          <div className="flex items-start gap-3">
                            {item.img && (
                              <img
                                src={item.img}
                                alt={item.name}
                                className="w-16 h-6 object-contain"
                              />
                            )}
                            <div>
                              {item.name && (
                                <p className="font-semibold">{item.name}</p>
                              )}
                              {item.desc && (
                                <p className="text-sm text-gray-500">
                                  {item.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}

                      {menu.name === "Services" && (
                        <Link
                          href="/services"
                          onClick={() => setMobileMenu(false)} // ✅ close menu on click
                          className="flex items-center gap-1 text-blue-600 text-sm pl-2 mt-2"
                        >
                          See all services <ArrowRight size={16} />
                        </Link>
                      )}
                    </div>
                  )}
                </>
              ) : (
                // 🔹 Simple Link (like Industries, Careers)
                <Link
                  href={menu.link}
                  onClick={() => setMobileMenu(false)} // ✅ close menu
                  className="block px-6 py-3 hover:bg-gray-50"
                >
                  {menu.name}
                </Link>
              )}
            </div>
          ))}

          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)} // ✅ close menu
              // className="bg-black text-white w-full py-2 rounded-full hover:bg-gray-800"
              className="md:block bg-[#050953] text-white px-5 py-2 rounded-xl hover:bg-gray-800"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
