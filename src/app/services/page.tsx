"use client";
import { services } from "../data/services";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Testimonial from "@/components/Testimonials";
import Link from "next/link";


type Service = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  imageAlt: string;
};

// const services: Service[] = [
//   {
//     id: 1,
//     subtitle: "Smarter decisions, powered by intelligence.",
//     title: "AI Services",
//     description:
//       "Harness artificial intelligence and machine learning to automate processes, uncover insights, and drive smarter decision-making for your business.",
//     imageAlt: "AI Service Image",
//   },
//   {
//     id: 2,
//     subtitle: "Streamline. Simplify. Scale.",
//     title: "ODOO Services",
//     description:
//       "Implement and customize ODOO ERP to simplify complex operations—from CRM and accounting to HR, inventory, and beyond.",
//     imageAlt: "ODOO Service Image",
//   },
//   {
//     id: 3,
//     subtitle: "Fast. Scalable. Secure.",
//     title: "Cloud Services",
//     description:
//       "Leverage modern cloud infrastructure to optimize performance, scale efficiently, and strengthen your business security.",
//     imageAlt: "Cloud Service Image",
//   },
//     {
//     id: 4,
//     subtitle: "Fast. Scalable. Secure.",
//     title: "Cloud Services",
//     description:
//       "Leverage modern cloud infrastructure to optimize performance, scale efficiently, and strengthen your business security.",
//     imageAlt: "Cloud Service Image",
//   },
// ];

export default function Services() {
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
      {/* Heading + Description */}
      <div className="text-center max-w-5xl mx-auto mb-12">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">
          Transforming Businesses with End-to-End Digital Services
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base">
          At KClub, we deliver services that bridge innovation and impact. From
          AI-powered automation to enterprise-grade app development, we help
          businesses evolve faster, smarter, and stronger in the digital-first
          world.
        </p>
      </div>

        <div className="w-full h-[400px] flex items-center justify-center rounded-md mt-30">
        {/* <div> */}
           <img
        src="/services-img/services-banner.png"
        alt="Hero Banner"
        className="w-full max-w-12xl h-auto object-contain"
      />
        {/* </div> */}
      </div>
    </section>

    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          From Strategy to Deployment, We&apos;ve Got You Covered
        </p>
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">Our Key Services</h2>
        <p className="text-gray-600 mt-4">
          KClub&apos;s service portfolio covers every stage of your digital
          transformation. Whether you&apos;re looking to harness AI for smarter
          decisions, streamline workflows with ERP, or build cutting-edge
          applications, we provide the expertise and execution to turn your
          vision into reality.
        </p>
      </div>

      {/* Dynamic Services */}
      <div className="mt-16 space-y-20">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Text Section */}
            <div
              className={`${
                index % 2 === 1 ? "order-2 md:order-1" : "order-1"
              }`}
            >
              <p className="text-sm font-semibold text-gray-500">
                {service.category}
              </p>
              <h3 className="text-2xl text-black font-bold mt-2">{service.name}</h3>
              <p className="text-gray-600 mt-4">{service.description}</p>
              <div className="mt-6 flex gap-4">
               <a
                href={service.link}
                className="border px-4 py-2 rounded-lg bg-color-blue text-white inline-block shadow-md hover:shadow-lg transition"
              >
                Know More
              </a>
                <Link href="/contact" className="flex text-black items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 shadow-md hover:shadow-lg">
                  Schedule a Demo <span>→</span>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`w-full h-56 flex items-center justify-center rounded-md ${
                index % 2 === 1 ? "order-1 md:order-2" : "order-2"
              }`}
            >
              <img
                src={service.image}
                alt="Hero Banner"
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
        <div className="py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 subpixel-antialiased text-blue text-center">
       Why Clients Choose KClub
      </h1>
         <p className="text-sm tracking-wide text-black-500 text-center mb-8">
          Because we don&apos;t just deliver services, we deliver outcomes.</p>
          <Testimonial/>

    </div>
    </section>

      <section className="container bg-color-blue text-white mx-auto px-2 md:px-6 lg:px-36 py-12 lg:py-14 rounded-md">
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
