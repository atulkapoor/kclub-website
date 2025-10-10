"use client";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "@/components/CTA";
import Link from "next/link";
import Testimonial from "@/components/Testimonials";


export default function Home() {
const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const industries = [
  "Retail & eCommerce",
  "Logistics & Supply Chain",
  "Healthcare & Life Sciences",
  "BFSI & Fintech",
  "Telecom & Manufacturing",
  "Education",
  "Real Estate",
];
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

  const solutions = [
  {
    title: "AI for Business",
    desc: "Smarter decisions, faster outcomes - powered by AI-driven automation and insights.",
    icon: "/home-img/home-s1.png",
  },
  {
    title: "ODOO for Efficiency",
    desc: "Streamline operations with tailored ODOO ERP solutions that adapt to your business needs.",
    icon: "/home-img/home-s2.png",
  },
  {
    title: "SAAS That Scales",
    desc: "Build secure, scalable cloud applications designed for flexibility and long-term growth.",
    icon: "/home-img/home-s3.png",
  },
  {
    title: "Tech Consulting & Assessments",
    desc: "Identify opportunities, optimize systems, and future-proof your business with expert consulting.",
    icon: "/home-img/home-s4.png",
  },
];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:pt-20 bg-[#EDF5FF]">
  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
    
    {/* Left Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#1A2B6B]">
        Pioneering the Future of <br />
        Tech Transformation, <br />
        Today
      </h1>
      <p className="text-gray-600 mb-8 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
        We help businesses across industries embrace digital transformation
        with intelligent products, scalable platforms, and custom technology
        services.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button
          className="px-6 py-3 rounded-lg bg-[#2563EB] text-white font-medium shadow-md hover:bg-[#1E4FDB] transition"
          onClick={openModal}
        >
          Request a Demo
        </button>
         <Link href="/services"  className="px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 font-medium shadow-md hover:bg-gray-100 transition">
          Explore Our Solutions
        </Link>
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src="/home-img/home-banner.png"
        alt="Hero Banner"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</section>

        {/* Trusted Partners */}
        
      <section
        className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-8"
      >
        <p className="text-center text-gray-600 mb-8 text-sm">
          Trusted Across Industries
        </p>
      <div className="overflow-hidden whitespace-nowrap w-full bg-white">
        <div className="flex animate-scroll">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center mx-8 shrink-0"
            >
              <img src={logo.src} alt={logo.alt} className="h-8 mr-2" />
              {/* <span className="text-blue font-medium">{logo.alt}</span> */}
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {logos.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center mx-8 shrink-0"
            >
              <img src={logo.src} alt={logo.alt} className="h-8 mr-2" />
              {/* <span className="text-blue font-medium">{logo.alt}</span> */}
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Innovation Section */}
    <section
  className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-16"
  data-aos="fade-up"
  data-aos-easing="linear"
  data-aos-delay="200"
>
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
    {/* LEFT SIDE - TEXT */}
    <div className="w-full lg:w-1/2 mt-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-blue">
        Innovation Backed by Experience
      </h2>

      <div className="flex items-start gap-10 mb-10">
        <div className="font-bold text-blue leading-none">
          <span className="text-5xl md:text-8xl ">85+</span><br/><br/>
          <span>Projects Delivered</span>
        </div>
        <div className="text-gray-700 font-medium">
        With over 5 years in operation and a team of 50+ certified professionals, 
        KClub helps businesses transform challenges into tailored technology solutions. 
        From AI-powered platforms to enterprise-grade applications, we deliver innovations 
        that streamline operations, boost efficiency, and enhance customer experiences.
        </div>
      </div>
    </div>

    <div className="w-full lg:w-1/2 flex justify-center"> 
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center"> 
      <img src="/home-img/home-about.png" alt="Hero Banner" className="w-full h-auto object-contain" /> 
      </div> 
      </div>
  </div>
</section>


      {/* Solutions */}
        <section
      className="container-fluid mx-auto px-4 md:px-6 lg:px-36 pt-16"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="400"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue">
          Our Solutions That Drive Digital Transformation
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Power your growth with AI, ERP, and digital solutions built around your business needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((solution, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-8 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-lg text-blue font-semibold mb-3">
                {solution.title}
              </h3>
              <p className="text-sm text-gray-600">{solution.desc}</p>
            </div>
            <div className="mt-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <img
                  src={solution.icon}
                  alt={`${solution.title} icon`}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-10">
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          ←
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          →
        </button>
      </div>
    </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-20 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue">
          Products & Industries We Empower
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Innovative solutions designed to transform operations across every sector.
        </p>
      </div>

      <div className="flex justify-center">
      <img
        src="/home-img/home-product.png" 
        alt="Who We Empower"
        className="w-full max-w-4xl h-auto object-contain"
      />
    </div>

    </section>

      <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-10">
        <div className="py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 subpixel-antialiased text-blue text-center">
        The Impact in Our Clients&apos; Words
      </h1>
         {/* <p className="text-sm tracking-wide text-blue-500 text-center mb-8">
          Because we don&apos;t just deliver services, we deliver outcomes.</p> */}
    <Testimonial/>

    </div>
      </section>
      {/* <section className="ml-36 mr-36"> */}
      <section className="mx-2 sm:mx-6 md:mx-2 lg:mx-14 xl:mx-16 2xl:mx-34">
        <HeroSection 
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

        />
      </section>

      {/* <section className="container bg-color-blue text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 rounded-md mb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content  
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mt-2 max-w-lg">
            Let&apos;s create solutions that drive efficiency, growth, and innovation for your enterprise.
          </p>
        </div>

        <div className="flex gap-4">
          {/* <a
            href="#case-studies"
            className="px-10 py-2 bg-white text-blue rounded-full border border-black hover:bg-gray-100 transition"
          >
            See case studies
          </a>  
          <a
            href="#contact"
            className="px-14 py-2 bg-white text-blue rounded-full border border-black hover:bg-gray-100 transition"
          >
            Contact us
          </a>
        </div>
      </div>
    </section> */}
      <PopupForm isOpen={open} onClose={closeModal} />

    </main>
  );
}
