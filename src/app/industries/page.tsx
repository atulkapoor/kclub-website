"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "@/components/CTA";

const industries = [
  {
    name: "Retail & eCommerce",
    image: "industry-img/retail.png",
    description:
      "Today’s retail landscape demands seamless integration between online and offline channels, personalized customer experiences, and agile supply chains. KClub helps retailers and eCommerce businesses meet these demands with technology solutions that bridge gaps and delight customers at every touchpoint.",
    solutions: [
      {
        title: "Customer Engagement & Loyalty",
        text: "Digital loyalty programs, personalized marketing campaigns, and gamified shopping experiences to increase customer retention and lifetime value.",
      },
      {
        title: "Smart Inventory & Order Management",
        text: "AI-assisted demand forecasting, automated reordering, and efficient order routing to the best fulfillment center or store.",
      },
      {
        title: "In-Store Technology",
        text: "Mobile POS systems, self-checkout solutions, and in-store clienteling apps that enhance the shopping experience and empower sales associates.",
      },
      {
        title: "Omnichannel Integration",
        text: "Unified platform linking in-store POS, e-commerce, and third-party marketplaces for consistent pricing, promotions, and inventory management.",
      },
      {
        title: "E-commerce Optimization",
        text: "Fast, user-friendly web and mobile storefronts with features like one-click checkout, subscription purchases, and integrated reviews to boost conversions.",
      },
    ],
  },
  {
    name: "Healthcare & Life Sciences",
    image: "industry-img/healthcare.png",

    description:
      "Healthcare and life sciences organizations operate in a complex environment where patient outcomes, data security, and regulatory compliance are paramount. KClub provides technology solutions that help hospitals, clinics, pharmaceutical companies, and research institutions modernize their operations and improve care through digital innovation.",
    solutions: [
      {
        title: "Electronic Health Records (EHR)",
        text: "Centralized, interoperable patient records accessible by authorized medical staff to ensure continuity of care and reduce duplicate tests.",
      },
      {
        title: "Telehealth & Remote Monitoring",
        text: "Secure video conferencing apps and IoT integrations (wearables, medical devices) to monitor patients remotely, enabling virtual care and timely interventions.",
      },
      {
        title: "Healthcare Process Automation",
        text: "Online appointment booking, digital prescriptions, inventory management for pharmacies, and automated insurance claims processing to improve operational efficiency.",
      },
      {
        title: "Data Analytics & AI in Healthcare",
        text: "Track hospital performance with smart dashboards and accelerate insights with AI-driven healthcare tools.",
      },
      {
        title: "Compliance & Security",
        text: "Implementation of robust cybersecurity measures, audit trails, and encryption to protect sensitive health information and comply with healthcare regulations.",
      },
    ],
  },
  {
    name: "BFSI & Fintech",
    image: "industry-img/fintech.png",

    description:
      "Banks, financial services companies, and fintech startups are under constant pressure to innovate, improve customer experience, and maintain stringent security. KClub partners with the BFSI sector to build and implement fintech solutions that modernize legacy operations and launch new digital services, all while ensuring compliance and security.",
    solutions: [
      {
        title: "Digital Lending & Onboarding",
        text: "Online loan origination systems, e-KYC identity verification, and instant credit decisioning tools that make borrowing fast and user-friendly.",
      },
      {
        title: "Payment & Wallet Systems",
        text: "Custom e-wallet apps, UPI and payment gateway integrations, and contactless payment solutions to enable smooth digital transactions.",
      },
      {
        title: "Banking CRM & Omni-Channel Services",
        text: "Integrated platforms for managing customer relationships across branches, mobile apps, and web portals, ensuring a unified banking experience.",
      },
      {
        title: "Insurtech Solutions",
        text: "Platforms for digital insurance policy sales, claims processing automation, and customer self-service portals for policy management.",
      },
      {
        title: "Risk Analytics & Compliance",
        text: "Data-driven tools that analyze transaction patterns for fraud, monitor compliance requirements in real-time, and produce regulatory reports with accuracy.",
      },
    ],
  },
  {
    name: "Education",
    image: "industry-img/education.png",

    description:
      "Educational institutions are increasingly leveraging technology to enhance learning outcomes and streamline administration. KClub offers EdTech solutions that empower schools, colleges, universities, and EdTech companies to create engaging learning experiences and efficient educational operations.",
    solutions: [
      {
        title: "Digital Admissions & Enrollment",
        text: "End-to-end online application systems, including document uploads, eligibility checks, and admission fee payments.",
      },
      {
        title: "Learning Management & Collaboration",
        text: "Platforms for course content delivery, e-learning modules, quizzes, and collaborative projects, accessible to students on web or mobile.",
      },
      {
        title: "Student Lifecycle Management",
        text: "Consolidated view of each student’s journey (courses, grades, extracurriculars) for advisors and faculty, aiding in personalized mentorship.",
      },
      {
        title: "Parent & Community Portals",
        text: "For K-12 schools, portals or mobile apps that keep parents informed about announcements, grades, attendance, and let them communicate with teachers.",
      },
      {
        title: "Education Analytics",
        text: "Dashboards showing metrics like enrollment trends, class performance, resource utilization, helping administrators make data-driven decisions.",
      },
    ],
  },
  {
    name: "Real Estate",
    image: "industry-img/estate.png",

    description:
      "The real estate industry thrives on relationships, timing, and data – whether it’s closing property sales, managing rental portfolios, or executing construction projects. KClub delivers specialized tech solutions for real estate developers, agencies, and property management firms.",
    solutions: [
      {
        title: "Real Estate CRM",
        text: "Tools to manage and categorize leads, broker networks, and customer interactions, along with sales pipeline dashboards to monitor conversion rates and team performance.",
      },
      {
        title: "Virtual Showcasing",
        text: "Options for 3D virtual tours or AR/VR integrations, allowing potential buyers to explore properties remotely and widening your reach.",
      },
      {
        title: "Integrated Property Listings",
        text: "A unified database of properties with details, images, documents, and status, often linked to your public website for automatic updates.",
      },
      {
        title: "Contract & Transaction Management",
        text: "Digital document generation (offers, agreements, NDAs) with e-signature support and approval workflows—accelerating deal closures while maintaining compliance.",
      },
      {
        title: "Portfolio & Facilities Management",
        text: "Modules that handle rent collection, renewals, maintenance, and expense tracking—ensuring smooth operations for property managers.",
      },
    ],
  },
  {
    name: "Telecom & Manufacturing",
    image: "industry-img/telecom.png",

    description:
      "Telecommunications and manufacturing are two industries where precision and reliability are non-negotiable. KClub brings advanced solutions to these sectors, focusing on automation, IoT, and data analytics to enhance operational efficiency and innovation.",
    solutions: [
      {
        title: "IoT-Enabled Monitoring",
        text: "Deployment of sensors and IoT gateways to track machinery performance, utility consumption, or telecom infrastructure status, all viewable through a central IoT dashboard.",
      },
      {
        title: "Predictive Maintenance",
        text: "AI algorithms analyzing sensor and operational data to predict failures in network components or factory machines before they happen.",
      },
      {
        title: "Workflow Automation",
        text: "RPA and customized software to automate repetitive tasks such as network configuration updates or assembly line inspections.",
      },
      {
        title: "Supply Chain & Production Integration",
        text: "Smart manufacturing execution systems (MES) that integrate with supply chain and inventory management, ensuring just-in-time production.",
      },
      {
        title: "Quality & Compliance Management",
        text: "Quality control and traceability tools ensuring compliance with industry standards.",
      },
    ],
  },
];

export default function IndustriesPage() {
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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 mx-auto    py-12 lg:py-4">
      {/* HERO */}
      <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 my-30 text-center">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">
            Technology Solutions Across Industries
          </h1>
          <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            KClub has rich expertise in delivering solutions to businesses in a
            variety of industries. We know each sector has unique challenges and
            opportunities. By combining domain knowledge with the right
            technology, we help companies streamline operations, enhance
            customer experiences, and innovate faster.
          </p>
        </div>

        <div className="w-full h-[400px] flex items-center justify-center rounded-md mt-30">
          <img
            src="industry-img/industry.png"
            alt="Hero Banner"
            className="w-full max-w-12xl h-auto object-contain"
          />
        </div>
      </section>

      {/* INDUSTRIES + CAROUSELS */}
      <section className="container mx-auto px-6 pt-16 pb-8">
        {industries.map((industry, idx) => (
          <div key={idx} className="mb-20">
            {/* Top Row: Image + Text */}
            <div
              className={`flex flex-col md:flex-row items-center gap-10 mb-8   ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={industry.image} // 👈 industry object me "image" property honi chahiye
                  // alt={industry.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Heading + Description */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue">
                  {industry.name}:
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>

            {/* Key Solutions below */}
            <h3 className="text-lg font-semibold text-blue-600 mb-6">
              Key Solutions:
            </h3>

            <div className="industry-swiper relative  ">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true, el: `.pagination-${idx}` }}
                navigation={{
                  nextEl: `.next-${idx}`,
                  prevEl: `.prev-${idx}`,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                style={{
                  // backgroundImage: `url('industry-img/sliderbg.png')`,
                  // backgroundSize: 'contain',
                  paddingInline: "40px",
                  // backgroundRepeat:'no-repeat',
                  height: "200px",
                  paddingBlock: "10px",
                  // borderRadius: '12px'
                }}
              >
                {industry.solutions.map((s, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {s.title}
                      </h4>
                      <p className="text-sm text-gray-600">{s.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination + Arrows */}
              <div className="flex items-center justify-between mt-6">
                <div className={`swiper-pagination pagination-${idx}`}></div>
                <div className="flex gap-4">
                  <button
                    className={`prev-${idx} w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100`}
                  >
                    ←
                  </button>
                  <button
                    className={`next-${idx} w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100`}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Global swiper overrides */}
        <style jsx global>{`
          .swiper-pagination {
            position: relative !important;
            bottom: 0 !important;
            display: flex !important;
            justify-content: flex-start !important;
          }
          .swiper-pagination-bullet {
            background: #cbd5e1;
            opacity: 1;
            margin: 0px 4px;
          }
          .swiper-pagination-bullet-active {
            background: #1e3a8a; /* Tailwind blue-900 */
          }
        `}</style>
      </section>
      {/* NEWSLETTER */}
      {/* <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gray-50 rounded-2xl p-8 md:flex md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-semibold">Get the latest updates</h4>
            <p className="text-gray-600 text-sm">
              Get the latest updates on our products, services, and industry
              insights delivered straight to your inbox.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-200 w-full md:w-[320px]"
            />
            <button
              type="button"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="bg-indigo-600 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl text-white md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 text-white">
            Let’s create solutions that drive efficiency, growth, and innovation
            for your enterprise.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg">
              Contact us
            </button>
            {/* <button className="px-6 py-3 border border-gray-300 rounded-lg">
              Book a Demo
            </button>  
          </div>
        </div>
      </section> */}
      {/* <section className=" sm:mx-6 md:mx-12 lg:mx-16 xl:mx-36 2xl:mx-48"> */}
      {/* <HeroSection
                styles={{
                  description: { 
                    width:"100%"
                  },
                  container: {
                    backgroundImage: "url('/cta2.png')", 
          }, 
                }}
                showPrimaryButton={false}
                title="Ready to Transform Your Business"
                description="Let’s create solutions that drive efficiency, growth, and innovation for your enterprise."
      
              /> */}
      {/* </section> */}

      <section className="mx-2 sm:mx-6 md:mx-2 lg:mx-14 xl:mx-16 2xl:mx-34">
        <HeroSection
          styles={{
            description: {
              width: "100%",
            },
            container: {
              backgroundImage: "url('/cta2.png')",
            },
          }}
          showPrimaryButton={false}
          title="Ready to Transform Your Business"
          description="Let’s create solutions that drive efficiency, growth, and innovation for your enterprise."
        />
      </section>

      {/* FINAL SECTION */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-blue">
          Used by the world&apos;s most average companies
        </h2>
        <section className="text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-5 rounded-md">
          <div className="overflow-hidden whitespace-nowrap w-full bg-white">
            <div className="flex animate-scroll">
              {logos.map((logo, i) => (
                <div key={i} className="flex items-center mx-8 shrink-0">
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
      </section>

      {/* Inline CSS for Swiper overrides */}
      {/* <style jsx global>{`
        .industry-swiper .swiper-button-next,
        .industry-swiper .swiper-button-prev {
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
          color: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .industry-swiper .swiper-button-prev {
          left: 6px;
        }
        .industry-swiper .swiper-button-next {
          right: 6px;
        }
        .industry-swiper .swiper-pagination {
          bottom: -18px !important;
        }
        .industry-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          border-radius: 9999px;
          margin: 0 6px !important;
        }
        .industry-swiper .swiper-pagination-bullet-active {
          background: #111827;
        }
      `}</style> */}
    </main>
  );
}
