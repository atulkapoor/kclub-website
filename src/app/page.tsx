"use client";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
  ];

  const solutions = [
  {
    title: "AI for Business",
    desc: "Smarter decisions, faster outcomes - powered by AI-driven automation and insights.",
    icon: "🤖",
  },
  {
    title: "ODOO for Efficiency",
    desc: "Streamline operations with tailored ODOO ERP solutions that adapt to your business needs.",
    icon: "☁️",
  },
  {
    title: "SAAS That Scales",
    desc: "Build secure, scalable cloud applications designed for flexibility and long-term growth.",
    icon: "📦",
  },
  {
    title: "Tech Consulting & Assessments",
    desc: "Identify opportunities, optimize systems, and future-proof your business with expert consulting.",
    icon: "📊",
  },
];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
      <section
        className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
        <div className="flex bg-gray-300 flex-col lg:flex-row items-center gap-8 lg:gap-12 rounded">
          <div className="w-full bg-white lg:w-1/2 text-center lg:text-left lg:py-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
              Pioneering the Future of <br />
              Tech Transformation, <br />
              Today
            </h1>
            <p className="text-gray-600 mb-8 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              We help companies and industry leaders build and optimize their
              digital ecosystems through custom technology solutions to drive
              innovation and transformation through quality platforms, and
              custom technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="border px-4 py-2 rounded-lg bg-color-blue text-white inline-block shadow-md hover:shadow-lg transition" onClick={openModal}>
                Reequest a Demo
              </button>
              <button className="flex text-black items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 shadow-md hover:shadow-lg">
                Explore Our Solutions
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-60 md:h-72 lg:h-100 rounded flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                </div>
                <h1 className="text-4xl font-semibold">Home Page</h1>
              </div>
            </div>
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
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-black">
        Innovation Backed by Experience
      </h2>

      <div className="flex items-start gap-10 mb-10">
        <div className="font-bold text-black leading-none">
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

    {/* RIGHT SIDE - IMAGE PLACEHOLDER */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <div className="bg-gray-200 w-full h-64 md:h-72 lg:h-80 rounded flex items-center justify-center">
        <svg
          className="w-12 h-12 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
        </svg>
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
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
              <h3 className="text-lg text-black font-semibold mb-3">
                {solution.title}
              </h3>
              <p className="text-sm text-gray-600">{solution.desc}</p>
            </div>
            <div className="mt-6">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white text-xl">
                {solution.icon}
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          Products & Industries We Empower
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Innovative solutions designed to transform operations across every sector.
        </p>
      </div>

      {/* Desktop Flower Layout */}
      <div className="relative hidden lg:flex items-center justify-center w-[700px] h-[700px] mx-auto">
        {/* Center Circle */}
        <div className="absolute flex items-center justify-center w-48 h-48 rounded-full bg-blue-600 text-white text-center font-semibold shadow-lg z-10">
          Industries
        </div>

        {/* Orbiting Circles */}
        {industries.map((industry, i) => {
          const angle = (i / industries.length) * 2 * Math.PI;
          const radius = 260; // distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              className="absolute flex items-center justify-center w-40 h-40 rounded-full bg-white text-center text-sm font-medium text-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transition"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {industry}
            </div>
          );
        })}
      </div>

      {/* Mobile Grid Fallback */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:hidden mt-10">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-6 rounded-full shadow bg-white text-center text-sm font-medium text-gray-800"
          >
            {industry}
          </div>
        ))}
      </div>
    </section>

      <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-10">
        <div className="py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 subpixel-antialiased text-black text-center">
        The Impact in Our Clients&apos; Words
      </h1>
         {/* <p className="text-sm tracking-wide text-black-500 text-center mb-8">
          Because we don&apos;t just deliver services, we deliver outcomes.</p> */}
       <div className="cr">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="pb-12"
      >
        {[1, 2, 3, 4].map((i) => (
          <SwiperSlide key={i}>
            <div className="border rounded-lg p-10 flex flex-col justify-between h-full mb-15">
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx} className="text-color-blue text-lg">★</span>
                  ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                diam libero vitae erat.&quot;
              </p>

              {/* Footer: profile + company */}
              <div className="flex justify-between items-center mt-auto pt-4 border-t">
                {/* Profile */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-sm">Name Surname</p>
                    <p className="text-xs text-gray-500">Position, Company</p>
                  </div>
                </div>

                {/* Company logo (placeholder box here) */}
                <div className="flex items-center gap-2">
                  <img src="/webflow-logo.png" alt="Webflow" className="h-6 w-30" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    </div>
    </section>

      <section className="container bg-color-blue text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 rounded-md mb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
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
            className="px-10 py-2 bg-white text-black rounded-full border border-black hover:bg-gray-100 transition"
          >
            See case studies
          </a> */}
          <a
            href="#contact"
            className="px-14 py-2 bg-white text-black rounded-full border border-black hover:bg-gray-100 transition"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
      <PopupForm isOpen={open} onClose={closeModal} />

    </main>
  );
}
