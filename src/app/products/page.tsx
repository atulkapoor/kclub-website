// app/products/page.tsx  (if using Next.js App Router)
"use client";
import { products } from "../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';

import Image from "next/image";
import Testimonial from "@/components/Testimonials";

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
    { src: "/swipe.png", alt: "swipe" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/swipe.png", alt: "swipe" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/swipe.png", alt: "swipe" },
  ];
  return (
     <main className="min-h-screen bg-white">
    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-30 text-center">
      {/* Heading + Subheading */}
      <div className="text-center max-w-3xl mx-auto mb-30">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">
          Smart, Scalable Products for <br /> Every Business Challenge
        </h2>
        <p className="mt-4 text-gray-600">
          Our products are more than tools they&apos;re catalysts for transformation. From logistics to healthcare, 
          we design intelligent solutions that streamline processes and unlock growth.
        </p>
      </div>

        <div className="w-full h-[400px] flex items-center justify-center rounded-md my-30">
        <img
          src="/product-img/product-main-banner.png"
          alt="Hero Banner"
          className="w-full max-w-12xl h-auto object-contain"
        />
      </div>
    </section>

     <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20 text-center">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="text-sm text-gray-500">Innovation tailored to your business</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue mt-2">
          Industry-Focused Software Solutions for Digital Transformation
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
            className="border rounded-lg shadow hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            {/* Placeholder image */}
            {/* <div className="w-full h-90 flex items-center justify-center rounded overflow-hidden mb-6">
              <Image
                src={product.imagemain}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div> */}

            <div className="p-6">
            <div className="my-6">
              <img src={product.image} alt="c-klogo" className="h-10 mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-blue mt-20 mb-2">{product.name}</h3>
            {/* <h4 className="font-semibold text-gray-800">{product.category}</h4> */}
            <p className="text-gray-600 text-sm mb-8">{product.description}</p>

            <a
              href={product.link}
              className="mt-10 inline-flex items-center hover:underline text-sm font-medium text-black" style={{textDecoration: "none", color: "black"}}
            >
              Know More →
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>

      

    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 ">
        <div className="py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 subpixel-antialiased text-blue text-center">
       Why Clients Choose KClub
      </h1>
         <p className="text-sm tracking-wide text-black-500 text-center mb-8">
          Because we don&apos;t just deliver services, we deliver outcomes.</p>
       <Testimonial/>

    </div>
    </section>

      <section className="container bg-color-blue text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-white">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-gray-300 mt-2 max-w-lg">
            Explore how we&apos;ve helped businesses across industries transform
            through innovation and technology.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
           <Link
            href="/case_studies"
            className="px-10 py-2 bg-white text-black rounded-full border border-black hover:bg-gray-100 transition"
          >
            See case studies
          </Link>
          <Link
            href="/contact"
            className="px-10 py-2 bg-white text-black rounded-full border border-black hover:bg-gray-100 transition"
          >
            Contact us
          </Link>
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
