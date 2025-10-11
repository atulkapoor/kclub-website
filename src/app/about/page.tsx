"use client";
import { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Linkedin, Twitter, Dribbble } from "lucide-react";
import Testimonial from "@/components/Testimonials";

const testimonials = [
  {
    company: "Webflow",
    logo: "/services-img/ai-services1.png", // replace with your logo path
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    link: "#",
  },
  {
    company: "Relume",
    logo: "/services-img/ai-services1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    link: "#",
  },
  {
    company: "Webflow",
    logo: "/services-img/ai-services1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    link: "#",
  },
];

const team = [
  {
    name: "Full name",
    title: "Job title",
    image: "/services-img/ai-services1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Full name",
    title: "Job title",
    image: "/services-img/ai-services1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Full name",
    title: "Job title",
    image: "/services-img/ai-services1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Full name",
    title: "Job title",
    image: "/services-img/ai-services1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Full name",
    title: "Job title",
    image: "/services-img/ai-services1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Full name",
    title: "Job title",
    image: "/services-img/ai-services1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
];


export default function AboutPage() {

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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
  <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-30">
      {/* Top Section */}
      <div className="text-center max-w-8xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">
          Discover the People & Purpose Behind KClub
        </h1>
        <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base">
          At KClub, we believe every challenge holds an opportunity. Our team of 
          innovators, designers, and engineers build solutions that drive efficiency 
          today and unlock growth for tomorrow.
        </p>

      </div>

      {/* Image Placeholder Section */}
      <div className="w-full h-[400px] flex items-center justify-center rounded-md mt-30">
        <div>
           <img
        src="/about-img/about-banner.png"
        alt="Hero Banner"
        className="w-full h-auto object-contain"
      />
        </div>
      </div>
    </section>

    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-30">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h4 className="text-sm uppercase text-gray-500 mb-2">About us</h4>
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-blue mb-10">
            Innovators in Technology, <br /> Empowering Your Digital Journey
          </h1>
          <p className="text-gray-700 mb-4 max-w-3xl">
            We pride ourselves on crafting software that not only meets clients&apos; needs
            but blows away expectations, often redefining how organizations operate in
            the digital era.
          </p>
          <p className="text-gray-700 max-w-3xl">
            Innovation is in our DNA. We are architects of innovation, sculpting
            solutions that drive efficiency and spark growth. Guided by a robust 4D
            execution methodology – Discuss, Design, Develop, Deliver – we ensure each
            project is handled with a people-first approach, streamlined processes, and
            the latest technology. With offices in India, UAE, USA, and Singapore, our
            global team works around the clock to support our clients. We work hard,
            celebrate successes, and constantly push boundaries to turn ambitious ideas
            into game-changing realities.
          </p>
        </div>

        {/* Right Placeholder */}
       <div className="flex items-center justify-center">
        <img
          src="/about-img/about1.png"
          alt="Hero Banner"
          className="w-full max-w-xl h-auto object-contain"
        />
      </div>

      </div>

      {/* Section 2 (reversed layout) */}
      <div className="grid md:grid-cols-2 gap-2 items-center mt-20">
        {/* Left Placeholder */}
         {/* Right Placeholder */}
       <div className="flex items-center justify-start">
        <img
          src="/about-img/about2.png"
          alt="Hero Banner"
          className="w-full max-w-lg h-auto object-contain"
        />
      </div>

        {/* Right Content */}
        <div>
          <h4 className="text-sm uppercase text-gray-500 mb-2">
            Our Purpose and Aspirations
          </h4>
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">
            The Heart of KClub
          </h1>
          <p className="text-gray-700 mb-4 max-w-3xl">
            Every project we undertake is guided by our mission and vision. We believe in
            innovation with impact, integrity in execution, and lasting value creation for
            our partners. Curious to see this in action? Explore our Case Studies to
            witness how these values come alive in real client success stories.
          </p>

          <h5 className="font-semibold mb-2">Our Mission</h5>
          <p className="text-gray-700 mb-4 max-w-3xl">
            To empower businesses through innovative technology solutions that solve
            real-world challenges and drive digital transformation. We exist to deliver
            high-quality, customized products and services that enable our clients to
            thrive, grow, and outpace the competition in the digital era.
          </p>

          <h5 className="font-semibold mb-2">Our Vision</h5>
          <p className="text-gray-700 max-w-3xl">
            To be a global leader in digital transformation, recognized for reshaping
            industries with game-changing tech innovation. We aspire to continuously push
            the boundaries of what&apos;s possible, transforming how organizations work,
            connect, and succeed – ultimately building a smarter, more connected future.
          </p>
        </div>
      </div>
    </section>

    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-20 mt-10 bg-[#D4E5FD]">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">
        Trusted by businesses worldwide
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Our journey is defined by measurable impact. With every project delivered,
        client served, and milestones achieved, we continue to set new standards in
        digital transformation.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-2xl md:text-6xl text-blue font-bold">5yr+</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Experience building <br /> innovative solutions
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-6xl text-blue font-bold">85+</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Projects delivered <br /> across industries
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-6xl text-blue font-bold">50+</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Certified team of <br /> tech experts
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-6xl text-blue font-bold">100%</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Long-term <br /> client success
          </p>
        </div>
      </div>
    </section>

     <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4">
        <div className="py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue text-center">
        What our clients are saying
      </h1>
     <Testimonial/>

    </div>
    </section>

    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="uppercase tracking-wide text-gray-600">Our team</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">
          Meet the Minds Behind KClub
        </h1>
        <p className="text-gray-600 mt-4">
          Our team is a blend of innovators, creators, and problem-solvers who
          share a passion for technology and impact. Together, we bring ideas to
          life and deliver solutions that empower businesses worldwide.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col"
          >
            <div className="w-full h-56 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.title}</p>
            <p className="text-gray-600 text-sm mt-3">{member.desc}</p>
            <div className="flex gap-4 mt-4 text-gray-600">
              <a href={member.socials.linkedin} target="_blank">
                <Linkedin className="w-5 h-5 hover:text-blue-600" />
              </a>
              <a href={member.socials.twitter} target="_blank">
                <Twitter className="w-5 h-5 hover:text-sky-500" />
              </a>
              <a href={member.socials.dribbble} target="_blank">
                <Dribbble className="w-5 h-5 hover:text-pink-500" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

     <section className="container bg-color-blue text-white mx-auto px-4 md:px-6 lg:px-26 py-12 lg:py-14 mt-20 rounded-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black subpixel-antialiased text-white">
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
            href="/case_studies"
            className="px-10 py-2 bg-white text-black rounded-full border border-black hover:bg-gray-100 transition"
          >
            See case studies
          </a>
          <a
            href="/contact"
            className="px-10 py-2 bg-white text-black rounded-full border border-black hover:bg-gray-100 transition"
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
