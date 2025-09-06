// "use client";
// const IndustriesPage = () => {
//     return (
//       <div className="min-h-screen bg-white">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4">
//           <div className="max-w-6xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               Technology Solutions Across Industries
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//               KClub has rich expertise in delivering solutions to businesses in a variety of industries.
//               We know each sector has unique challenges and opportunities, and we tailor our products
//               and services to meet those specific needs.
//             </p>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               By combining domain knowledge with the right technology, we help companies in these
//               sectors streamline operations, enhance customer experiences, and innovate faster.
//             </p>
//           </div>
//         </section>
  
//         {/* Logo Slider Section */}
//         <section className="py-12 bg-gray-50">
//           <div className="max-w-6xl mx-auto px-4">
//             <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">
//               Used by the world's most average companies
//             </h2>
            
//             {/* Slider Container */}
//             <div className="relative overflow-hidden">
//               {/* Slider Track */}
//               <div className="flex animate-marquee whitespace-nowrap">
//                 {/* Company Logos - First Set */}
//                 {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                   <div key={item} className="mx-8 flex items-center">
//                     <div className="h-16 w-48 bg-gray-200 rounded-lg flex items-center justify-center">
//                       <span className="text-gray-500 font-medium">Company Logo {item}</span>
//                     </div>
//                   </div>
//                 ))}
                
//                 {/* Duplicate for seamless loop */}
//                 {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                   <div key={`dup-${item}`} className="mx-8 flex items-center">
//                     <div className="h-16 w-48 bg-gray-200 rounded-lg flex items-center justify-center">
//                       <span className="text-gray-500 font-medium">Company Logo {item}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <style jsx>{`
//             @keyframes marquee {
//               0% { transform: translateX(0); }
//               100% { transform: translateX(-50%); }
//             }
//             .animate-marquee {
//               animation: marquee 30s linear infinite;
//             }
//           `}</style>
//         </section>
  
//         {/* Retail & eCommerce Section */}
//         <section className="py-16 px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Retail & eCommerce</h2>
//               <p className="text-gray-600">
//                 Today's retail landscape demands seamless integration between online and offline
//                 channels, personalized customer experiences, and agile supply chains. KClub helps
//                 retailers and eCommerce businesses meet these demands with technology solutions
//                 that bridge gaps and delight customers at every touchpoint.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Engagement & Loyalty</h3>
//                 <p className="text-gray-600">
//                   Digital loyalty programs, personalized marketing campaigns, and gamified
//                   shopping experiences to increase customer retention and lifetime value.
//                 </p>
//               </div>
              
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Inventory & Order Management</h3>
//                 <p className="text-gray-600">
//                   AI-assisted demand forecasting, automated reordering, and efficient order
//                   routing to the best fulfillment center or store.
//                 </p>
//               </div>
              
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">In-Store Technology</h3>
//                 <p className="text-gray-600">
//                   Mobile POS systems, self-checkout solutions, and in-store clienteling apps that
//                   enhance the shopping experience and empower sales associates.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Healthcare & Life Sciences Section */}
//         <section className="py-16 px-4 bg-gray-50">
//           <div className="max-w-6xl mx-auto">
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Healthcare & Life Sciences</h2>
//               <p className="text-gray-600">
//                 Healthcare and life sciences organizations operate in a complex environment
//                 where patient outcomes, data security, and regulatory compliance are paramount.
//                 KClub provides technology solutions that help hospitals, clinics, pharmaceutical
//                 companies, and research institutions modernize their operations and improve care
//                 through digital innovation.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Electronic Health Records (EHR)</h3>
//                 <p className="text-gray-600">
//                   Centralized, interoperable patient records accessible by authorized medical staff to
//                   ensure continuity of care and reduce duplicate tests.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Telehealth & Remote Monitoring</h3>
//                 <p className="text-gray-600">
//                   Secure video conferencing apps and IoT integrations (wearables, medical devices)
//                   to monitor patients remotely, enabling virtual care and timely interventions.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Healthcare Process Automation</h3>
//                 <p className="text-gray-600">
//                   Online appointment booking, digital prescriptions, inventory management for
//                   pharmacies, and automated insurance claims processing to improve operational efficiency.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* BFSI & Fintech Section */}
//         <section className="py-16 px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">BFSI & Fintech</h2>
//               <p className="text-gray-600">
//                 Banks, financial services companies, and fintech startups are under constant
//                 pressure to innovate, improve customer experience, and maintain stringent
//                 security. KClub partners with the BFSI sector to build and implement fintech
//                 solutions that modernize legacy operations and launch new digital services, all
//                 while ensuring compliance and security.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Lending & Onboarding</h3>
//                 <p className="text-gray-600">
//                   Online loan origination systems, e-KYC identity verification, and instant credit
//                   decisioning tools that make borrowing fast and user-friendly.
//                 </p>
//               </div>
              
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment & Wallet Systems</h3>
//                 <p className="text-gray-600">
//                   Custom e-wallet apps, UPI and payment gateway integrations, and contactless
//                   payment solutions to enable smooth digital transactions.
//                 </p>
//               </div>
              
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Banking CRM & Omni-Channel Services</h3>
//                 <p className="text-gray-600">
//                   Integrated platforms for managing customer relationships across branches, mobile apps,
//                   and web portals, ensuring a unified banking experience.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Education Section */}
//         <section className="py-16 px-4 bg-gray-50">
//           <div className="max-w-6xl mx-auto">
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Education</h2>
//               <p className="text-gray-600">
//                 Educational institutions are increasingly leveraging technology to enhance learning
//                 outcomes and streamline administration. KClub offers EdTech solutions that
//                 empower schools, colleges, universities, and EdTech companies to create
//                 engaging learning experiences and efficient educational operations. Our approach
//                 combines robust software with user-friendly design to meet the needs of students,
//                 educators, and administrators alike.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Admissions & Enrollment</h3>
//                 <p className="text-gray-600">
//                   End-to-end online application systems, including document uploads, eligibility
//                   checks, and admission fee payments.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Management & Collaboration</h3>
//                 <p className="text-gray-600">
//                   Platforms for course content delivery, e-learning modules, quizzes, and
//                   collaborative projects, accessible to students on web or mobile.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Lifecycle Management</h3>
//                 <p className="text-gray-600">
//                   Consolidated view of each student's journey (courses, grades, extracurriculars) for
//                   advisors and faculty, aiding in personalized mentorship.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Real Estate Section */}
//         <section className="py-16 px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Real Estate</h2>
//               <p className="text-gray-600">
//                 The real estate industry thrives on relationships, timing, and data – whether it's
//                 closing property sales, managing rental portfolios, or executing construction
//                 projects. KClub delivers specialized tech solutions for real estate developers,
//                 agencies, and property management firms to increase sales efficiency, improve
//                 client experiences, and streamline operations from the ground up.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Real Estate CRM</h3>
//                 <p className="text-gray-600">
//                   Tools to manage and categorize leads, broker networks, and customer
//                   interactions, along with sales pipeline dashboards to monitor conversion rates
//                   and team performance.
//                 </p>
//               </div>
              
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Virtual Showcasing</h3>
//                 <p className="text-gray-600">
//                   Options for 3D virtual tours or AR/VR integrations, allowing potential buyers to
//                   explore properties remotely and thereby widening your reach.
//                 </p>
//               </div>
              
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrated Property Listings</h3>
//                 <p className="text-gray-600">
//                   A unified database of properties (residential, commercial, etc.) with details, images,
//                   documents, and status, often linked to your public website for automatic updates.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Telecom & Manufacturing Section */}
//         <section className="py-16 px-4 bg-gray-50">
//           <div className="max-w-6xl mx-auto">
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">Telecom & Manufacturing</h2>
//               <p className="text-gray-600">
//                 Telecommunications and manufacturing are two industries where precision and
//                 reliability are non-negotiable. KClub brings advanced solutions to these sectors,
//                 focusing on automation, IoT, and data analytics to enhance operational efficiency
//                 and innovation.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">IoT-Enabled Monitoring</h3>
//                 <p className="text-gray-600">
//                   Deployment of sensors and IoT gateways to track machinery performance, utility
//                   consumption, or telecom infrastructure status, all viewable through a central IoT
//                   dashboard.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Predictive Maintenance</h3>
//                 <p className="text-gray-600">
//                   AI algorithms analyzing sensor and operational data to predict failures in
//                   network components or factory machines before they happen, scheduling
//                   maintenance optimally.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Workflow Automation</h3>
//                 <p className="text-gray-600">
//                   RPA and customized software to automate repetitive tasks such as network
//                   configuration updates or assembly line inspections, improving speed and reducing
//                   errors.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Newsletter Section */}
//         <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6">Join our newsletter</h2>
//             <p className="text-lg mb-8 max-w-2xl mx-auto">
//               Get the latest updates on our products, services, and industry insights delivered straight to your inbox.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto sm:max-w-xl">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
//                 Subscribe
//               </button>
//             </div>
            
//             <p className="text-sm mt-4 text-blue-100">
//               By subscribing you agree with our Privacy Policy
//             </p>
//           </div>
//         </section>
  
//         {/* CTA Section */}
//         <section className="py-16 px-4 bg-gray-100">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Business?</h2>
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//               Let's create solutions that drive efficiency, growth, and innovation for your enterprise.
//             </p>
//             <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//               Contact us
//             </button>
//           </div>
//         </section>
//       </div>
//     );
//   };
  
// export default IndustriesPage;
  
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const industries = [
  {
        name: "Retail & eCommerce",
        image: "/team-placeholder.jpg",
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
      image: "/team-placeholder.jpg",
      
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
      image: "/team-placeholder.jpg",
      
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
      image: "/team-placeholder.jpg",
      
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
      image: "/team-placeholder.jpg",
      
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
      image: "/team-placeholder.jpg",
      
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
        { src: "/relume-logo.png", alt: "Webflow" },
        { src: "/webflow-logo.png", alt: "Relume" },
        { src: "/relume-logo.png", alt: "Webflow" },
        { src: "/webflow-logo.png", alt: "Relume" },
      ];
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
          Technology Solutions Across Industries
        </h1>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          KClub has rich expertise in delivering solutions to businesses in a
          variety of industries. We know each sector has unique challenges and
          opportunities. By combining domain knowledge with the right
          technology, we help companies streamline operations, enhance customer
          experiences, and innovate faster.
              </p>
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
          <h2 className="text-lg font-semibold ">Industries Page</h2>
        </div>
      </div>
      </section>

      {/* INDUSTRIES + CAROUSELS */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
  {industries.map((industry, idx) => (
    <div key={idx} className="mb-20">
      {/* Top Row: Image + Text */}
      <div
        className={`flex flex-col md:flex-row items-center gap-10 mb-8 ${
          idx % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={industry.image} // 👈 industry object me "image" property honi chahiye
            // alt={industry.name}
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
        </div>

        {/* Heading + Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            {industry.name}:
          </h2>
          <p className="text-gray-600">{industry.description}</p>
        </div>
      </div>

      {/* Key Solutions below */}
      <h3 className="text-lg font-semibold text-blue-600 mb-6">
        Key Solutions:
      </h3>

      <div className="industry-swiper relative">
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
        >
          {industry.solutions.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination + Arrows */}
        <div className="flex justify-center items-center mt-6 gap-6">
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
    }
    .swiper-pagination-bullet {
      background: #cbd5e1;
      opacity: 1;
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
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
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
            </button> */}
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">
          Used by the world&apos;s most average companies
        </h2>
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
