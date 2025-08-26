"use client";

import Image from "next/image";
import React from "react"; 
 

export default function Oodo_Services() {  
  const services = [
    {
      title: "Full ODOO Implementation",
      desc:  "From requirement analysis to go-live, complete setup of ODOO’s CRM, Sales, Inventory, Accounting, HR, and other modules."},
    {
      title: "Customization & Development",
      desc:  "Tailoring ODOO workflows, reports, and UI; building custom modules or apps to extend functionality where needed."},
    {
      title: "Integration Services",
      desc:  "Connecting ODOO with third-party systems (payment processors, eCommerce, logistics APIs, etc.) for seamless data flow."},
    {
      title: "Data Migration",
      desc:  "Safe migration of data from legacy systems or older ODOO instances into your new ODOO environment, with verification."},
    {
      title: "Training & Ongoing Support",
      desc: "Comprehensive user training sessions, documentation, and dedicated support plans to ensure long-term success with ODOO."},
  ]; 
  const services1 = [
    {
      title: "Implementation & Customization",
      desc:  "We start by understanding your requirements across departments — be it sales, inventory, finance, HR, or others — and then configure ODOO modules accordingly. Our developers can customize existing modules or even create new ones to address specialized needs, ensuring a perfect fit with your workflow. We integrate ODOO with your other software (e.g., e-commerce sites, payment gateways, legacy systems) for a unified ecosystem of data."},
    {
      title: "Migration & Support",
      desc:  "Already using ODOO or another ERP? We provide smooth migration services to the latest ODOO version, transferring your data securely and with minimal downtime. Post-implementation, our team offers training to your staff and responsive support to troubleshoot issues or refine processes as your business evolves. We also optimize ODOO’s performance and can host it on cloud or on-premise infrastructure per your preference." }, 
  ]; 
  const logos = [
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
  ];
 
  
 

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">

    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-8 bg-gray-200">
        <div className="mx-auto w-20 h-20 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-600 text-sm">Img</span>
        </div>
        <h1 className="text-2xl font-semibold mt-4">
          Custom SaaS App Development Page 
        </h1>
      </header>

      {/* First Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
          Simplify Complex Operations <br />  with Tailored ODOO ERP Solutions 
          </h2>
          <p className="text-gray-600 mb-6">
          As a leading open-source ERP platform, ODOO offers a full suite of applications covering CRM, accounting, HR, inventory, and more. We specialize in implementing and customizing ODOO to align with your workflows, ensuring that complex processes are simplified and integrated across departments. From initial setup to advanced module customization, our ODOO experts help you gain visibility, reduce redundancy, and create a unified operational system that scales as your business grows.
          </p>
          <button className="bg-black text-white px-5 py-2 rounded-md">
            Schedule a Demo
          </button>
        </div>
        <div className="mx-auto w-72 h-48 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-600 text-sm">Img</span>
        </div>
      </section>

      {/* Second Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold mb-4">
          Maximize the power of ODOO with  <br />solutions built around your business needs.
          </h3>
          <p className="text-gray-600">
          KClub offers end-to-end ODOO ERP services to help businesses streamline their operations using this powerful open-source platform. Our team of ODOO experts will tailor the system to fit your unique processes, ensuring you get the maximum benefit from ODOO’s extensive suite of business applications. From initial deployment to ongoing support, we handle the technical heavy lifting so you can focus on running your business.
          </p>
        </div>
        <div className="mx-auto w-72 h-48 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-600 text-sm">Img</span>
        </div>
      </section>
    </div>
    <section className="bg-gray-50 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="w-24 h-20 bg-gray-300 flex items-center justify-center rounded-md mb-4">
              <span className="text-gray-600 text-sm">Img</span>
            </div>
            <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
      </section>
      <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {services1.map((service, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            {/* Image Placeholder */}
            <div className="w-full h-52 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-600 text-sm">Img</span>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </section> 
      <section className="container bg-gray-800 text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
        <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Elevate Your Digital Strategy?
            </h2>
          <p className="text-gray-300 mt-2 max-w-lg">
              Partner with KClub's experts to design, build, and implement technology solutions 
              that accelerate growth and drive measurable impact.
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
