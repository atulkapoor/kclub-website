// app/products/page.tsx  (if using Next.js App Router)
"use client";
import { products } from "../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

type Service = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    id: 1,
    subtitle: "Smarter decisions, powered by intelligence.",
    title: "AI Services",
    description:
      "Harness artificial intelligence and machine learning to automate processes, uncover insights, and drive smarter decision-making for your business.",
    imageAlt: "AI Service Image",
  },
  {
    id: 2,
    subtitle: "Streamline. Simplify. Scale.",
    title: "ODOO Services",
    description:
      "Implement and customize ODOO ERP to simplify complex operations—from CRM and accounting to HR, inventory, and beyond.",
    imageAlt: "ODOO Service Image",
  },
  {
    id: 3,
    subtitle: "Fast. Scalable. Secure.",
    title: "Cloud Services",
    description:
      "Leverage modern cloud infrastructure to optimize performance, scale efficiently, and strengthen your business security.",
    imageAlt: "Cloud Service Image",
  },
    {
    id: 4,
    subtitle: "Fast. Scalable. Secure.",
    title: "Cloud Services",
    description:
      "Leverage modern cloud infrastructure to optimize performance, scale efficiently, and strengthen your business security.",
    imageAlt: "Cloud Service Image",
  },
];

// const products = [
//   {
//     name: "CrateKLUB",
//     category: "Warehouse Management:",
//     description:
//       "A smart warehouse management system optimizing inventory control, storage, and fulfillment for modern supply chains.",
//     image: "/placeholder.png",
//     link: "/warehousemanagement"
//   },
//   {
//     name: "MarineKLUB",
//     category: "Maritime Agency Management:",
//     description:
//       "A specialized platform that helps maritime agencies manage vessel schedules, cargo operations, and port logistics with ease and efficiency.",
//     image: "/placeholder.png",
//     link: "/maritime-agency-management"
//   },
//   {
//     name: "PingKLUB",
//     category: "Communication Management:",
//     description:
//       "An integrated communication hub for organizations to manage internal messaging, alerts, and collaboration in one secure platform.",
//     image: "/placeholder.png",
//     link: "/warehousemanagement"
//   },
//   {
//     name: "TheraKLUB",
//     category: "Healthcare Management:",
//     description:
//       "A comprehensive healthcare management system for clinics and hospitals, covering patient records, appointments, telehealth, and billing.",
//     image: "/placeholder.png",
//     link: "/warehousemanagement"
//   },
//   {
//     name: "FinstaKLUB",
//     category: "Lending Management:",
//     description:
//       "An end-to-end digital lending platform for financial institutions to automate loan origination, KYC, underwriting, and disbursement.",
//     image: "/placeholder.png",
//     link: "/warehousemanagement"
//   },
//   {
//     name: "FreightKLUB",
//     category: "Transport Management:",
//     description:
//       "A logistics management solution for planning routes, tracking shipments, and optimizing fleet operations in real time.",
//     image: "/placeholder.png",
//     link: "/warehousemanagement"
//   },
//   {
//     name: "TheraKLUB",
//     category: "Healthcare Management:",
//     description:
//       "A comprehensive healthcare management system for clinics and hospitals, covering patient records, appointments, telehealth, and billing.",
//     image: "/placeholder.png",
//     link: "/warehousemanagement"
//   },
//   {
//     name: "FinstaKLUB",
//     category: "Lending Management:",
//     description:
//       "An end-to-end digital lending platform for financial institutions to automate loan origination, KYC, underwriting, and disbursement.",
//     image: "/placeholder.png",
//     link: "/warehousemanagement"
//   },
//   {
//     name: "FreightKLUB",
//     category: "Transport Management:",
//     description:
//       "A logistics management solution for planning routes, tracking shipments, and optimizing fleet operations in real time.",
//     image: "/placeholder.png",
//     link: "/warehousemanagement"
//   },
// ];

export default function Products() {
      const logos = [
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
  ];
  return (
     <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20 text-center">
      {/* Heading + Subheading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Smart, Scalable Products for <br /> Every Business Challenge
        </h2>
        <p className="mt-4 text-gray-600">
          Our products are more than tools they&apos;re catalysts for transformation. From logistics to healthcare, 
          we design intelligent solutions that streamline processes and unlock growth.
        </p>
      </div>

      {/* Product Main Page Placeholder */}
      <div className="w-full bg-gray-200 h-[400px] flex flex-col items-center justify-center rounded-lg">
        <span className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Products Main Page
        </span>
        {/* Placeholder Image Icon */}
        <svg
          className="w-16 h-16 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h18M3 19h18M3 5v14M21 5v14M8 11l4 4 4-4m-4 4V7"
          />
        </svg>
      </div>
    </section>

     <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20 text-center">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm text-gray-500">Innovation tailored to your business</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Industry-Focused Software Solutions for <br /> Digital Transformation
        </h2>
        <p className="mt-4 text-gray-600">
          KClub&apos;s KLUB Suite comprises powerful software products tailored to key industries and
          business needs. From logistics to healthcare, each product is designed to streamline
          operations, boost productivity, and drive innovation in its domain. Explore our product
          lineup:
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="border shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
          >
            {/* Placeholder image */}
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded mb-6">
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="opacity-60"
              />
            </div>
            <div className="p-6">
            <div className="mb-6">
              <img src="/cklub-logo.png" alt="c-klogo" className="h-8 mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-black-800 mb-2">{product.name}</h3>
            {/* <h4 className="font-semibold text-gray-800">{product.category}</h4> */}
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>

            <a
              href={product.link}
              className="mt-4 inline-flex items-center text-blue-600 hover:underline text-sm font-medium"
            >
              Know More →
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>

         <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
        {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight mt-6">Why Clients Choose KClub</h2>
        <p className="text-sm tracking-wide text-gray-500">
          Because we don&apos;t just build technology, we build transformation.
        </p>
        {/* <p className="text-gray-600 mt-4">
          KClub’s service portfolio covers every stage of your digital
          transformation. Whether you’re looking to harness AI for smarter
          decisions, streamline workflows with ERP, or build cutting-edge
          applications, we provide the expertise and execution to turn your
          vision into reality.
        </p> */}
      </div>

      {/* Carousel */}
      <div className="mt-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center p-16">
                {/* Text Section */}
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold mt-2">{service.title}</h3>
                  <p className="text-gray-600 mt-4">{service.description}</p>
                  <div className="mt-6 flex gap-4">
                    <button className="border px-4 py-2 rounded-md hover:bg-gray-100">
                      Know More
                    </button>
                    <button className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-100">
                      Schedule a Demo <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-md">
                  <p className="text-gray-600">[{service.imageAlt}]</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      <section className="container bg-gray-800 text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-gray-300 mt-2 max-w-lg">
            Explore how we&apos;ve helped businesses across industries transform
            through innovation and technology.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <a
            href="#case-studies"
            className="px-5 py-2 bg-black text-white rounded hover:bg-gray-700 transition"
          >
            See case studies
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-black text-white rounded hover:bg-gray-700 transition"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>

       <section className="text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
     <div className="overflow-hidden whitespace-nowrap w-full bg-white">
      <div className="flex animate-scroll">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center mx-8 shrink-0"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 mr-2" />
            {/* <span className="text-black font-medium">{logo.alt}</span> */}
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {logos.map((logo, i) => (
          <div
            key={`dup-${i}`}
            className="flex items-center mx-8 shrink-0"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 mr-2" />
            {/* <span className="text-black font-medium">{logo.alt}</span> */}
          </div>
        ))}
      </div>
    </div>
    </section>
    </main>
  );
}
