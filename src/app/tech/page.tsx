"use client";

import Image from "next/image";
import React from "react"; 
 

export default function TechConsultingPage() {  
  const services = [
    {
      title: "IT Infrastructure Audit",
      desc: "Detailed assessment of hardware, software, and cloud infrastructure with a focus on performance, cost-efficiency, and scalability.",
    },
    {
      title: "Business Process Analysis",
      desc: "Identification of manual or inefficient processes that can be improved with automation or better software solutions.",
    },
    {
      title: "Technology Stack Recommendations",
      desc: "Suggestions for modernizing your stack (e.g., migrating to cloud, leveraging modern frameworks or platforms like OODC) to meet future demands.",
    },
    {
      title: "Security & Compliance Review",
      desc: "Evaluating your cybersecurity measures and data compliance (GDPR, etc.) and providing mitigation strategies for any gaps.",
    },
    {
      title: "ROI-Focused Roadmaps",
      desc: "Step-by-step digital transformation plans that justify investments with expected ROI, so stakeholders have a clear value proposition.",
    },
  ]; 
  const services1 = [
    {
      title: "IT Assessment & Audit",
      desc: "We conduct comprehensive audits of your existing systems, software, and processes. This involves reviewing infrastructure (servers, cloud usage, networking), application portfolios, data management, and security protocols. We then pinpoint pain points such as bottlenecks, outdated technologies, or security vulnerabilities. The result is an objective snapshot of 'where you are now' and recommendations on what needs attention.",
    },
    {
      title: "Digital Transformation Roadmap",
      desc: "Based on your business goals (be it scaling operations, improving customer experience, or cutting costs), we outline a strategic plan. This might include adopting new technologies like cloud services or AI, process automation, or system integrations. We prioritize initiatives by impact and feasibility, giving you a phased approach that delivers quick wins and long-term value. You&apos;ll receive a clear roadmap with timelines and resource estimates to confidently move forward.",
    },
    {
      title: "Process & Architecture Consulting",
      desc: "Our experts can also help redesign business processes for greater efficiency and devise an system architecture. For example, if you&apos;re considering moving to a microservices architecture or implementing DevOps practices, we guide you through the pros, cons, and implementation steps tailored to your organization. We ensure your technology choices align with your overall business strategy and that you&apos;re set up to scale securely and reliably.",
    },
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
    <>
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">

    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center rounded-md">
        <div className="text-center">
          <div className="w-14 h-14 mx-auto bg-gray-300 rounded-md mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4-4 4 4m4-4l4 4M4 8h16"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold">          Tech Consulting & Assessments Page
          </h2>
        </div>
      </div>

      {/* First Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
        Expert IT Consulting to <br /> Shape Your Digital Future
          </h1>
          <p className="text-gray-600 mb-6">
            Technology can be a game-changer when it&apos;s the right fit. Our
            consulting team helps you assess your current IT systems, identify
            gaps, and chart out a digital transformation strategy tailored to
            your goals. From infrastructure assessments and cybersecurity audits
            to cloud migration roadmaps and innovation workshops, we provide
            actionable insights backed by proven frameworks. Our objective: Help
            you adopt the right technologies, minimize risk, and maximize long
            term ROI while staying future-ready.
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
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">

            End-to-End Support: <br /> Integrations, Testing, and Deployment
          </h1>
          <p className="text-gray-600">
            Not sure where to begin on your digital transformation journey, or
            looking to optimize your current IT setup? XClub&apos;s Technology
            Consulting & Assessments service provides you with clear, actionable
            insights and a roadmap for innovation. Our seasoned consultants
            combine industry best practices with deep technical knowledge to
            evaluate your business&apos;s technology landscape and identify
            opportunities for improvement.
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
            <h4 className="font-semibold text-black text-lg mb-2">{service.title}</h4>
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
            <div className="bg-gray-200 w-full h-[350px] flex items-center justify-center rounded-md order-1 md:order-none">
          <div className="w-14 h-14 bg-gray-300 flex items-center justify-center rounded-md">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4-4 4 4m4-4l4 4M4 8h16"
              />
            </svg>
          </div>
        </div>

            {/* Text */}
            <div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
            {service.title}</h1>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black subpixel-antialiased text-white">
          Ready to Elevate Your Digital Strategy?          
          </h2>
          <p className="text-gray-300 mt-2 max-w-lg">
          Partner with KClub&apos;s experts to design, build, and implement technology solutions 
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
    </>
  );
} 
