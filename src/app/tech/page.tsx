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
      desc: "Based on your business goals (be it scaling operations, improving customer experience, or cutting costs), we outline a strategic plan. This might include adopting new technologies like cloud services or AI, process automation, or system integrations. We prioritize initiatives by impact and feasibility, giving you a phased approach that delivers quick wins and long-term value. You’ll receive a clear roadmap with timelines and resource estimates to confidently move forward.",
    },
    {
      title: "Process & Architecture Consulting",
      desc: "Our experts can also help redesign business processes for greater efficiency and devise an system architecture. For example, if you’re considering moving to a microservices architecture or implementing DevOps practices, we guide you through the pros, cons, and implementation steps tailored to your organization. We ensure your technology choices align with your overall business strategy and that you’re set up to scale securely and reliably.",
    },
  ]; 
  const logos = [
    "https://dummyimage.com/100x40/000/fff&text=Logo1",
    "https://dummyimage.com/100x40/000/fff&text=Logo3",
    "https://dummyimage.com/100x40/000/fff&text=Logo4",
    "https://dummyimage.com/100x40/000/fff&text=Logo5",
    "https://dummyimage.com/100x40/000/fff&text=Logo1",
  ];
 
  
 

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-8 bg-gray-200">
        <div className="mx-auto w-20 h-20 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-600 text-sm">Img</span>
        </div>
        <h1 className="text-2xl font-semibold mt-4">
          Tech Consulting & Assessments Page
        </h1>
      </header>

      {/* First Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Expert IT Consulting to <br /> Shape Your Digital Future
          </h2>
          <p className="text-gray-600 mb-6">
            Technology can be a game-changer when it’s the right fit. Our
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
          <h3 className="text-xl font-bold mb-4">
            End-to-End Support: <br /> Integrations, Testing, and Deployment
          </h3>
          <p className="text-gray-600">
            Not sure where to begin on your digital transformation journey, or
            looking to optimize your current IT setup? XClub’s Technology
            Consulting & Assessments service provides you with clear, actionable
            insights and a roadmap for innovation. Our seasoned consultants
            combine industry best practices with deep technical knowledge to
            evaluate your business’s technology landscape and identify
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
    <div className="overflow-hidden bg-white py-6 relative">
      <div className="flex w-max animate-marquee">
        {logos.map((logo, idx) => (
          <div key={idx} className="mx-8">
            <Image
              src={logo}
              alt={`Logo ${idx + 1}`}
              width={100}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex w-max animate-marquee absolute top-6">
        {logos.map((logo, idx) => (
          <div key={`dup-${idx}`} className="mx-8">
            <Image
              src={logo}
              alt={`Logo duplicate ${idx + 1}`}
              width={100}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div> 

      </>
  );
} 
