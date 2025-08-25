
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Linkedin, Twitter, Dribbble } from "lucide-react";

const testimonials = [
  {
    company: "Webflow",
    logo: "/logos/webflow.svg", // replace with your logo path
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    link: "#",
  },
  {
    company: "Relume",
    logo: "/logos/relume.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    link: "#",
  },
  {
    company: "Webflow",
    logo: "/logos/webflow.svg",
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
    image: "/team-placeholder.jpg",
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
    image: "/team-placeholder.jpg",
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
    image: "/team-placeholder.jpg",
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
    image: "/team-placeholder.jpg",
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
    image: "/team-placeholder.jpg",
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
    image: "/team-placeholder.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
  <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto mb-12 mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Discover the People & <br /> Purpose Behind KClub
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          At KClub, we believe every challenge holds an opportunity. Our team of 
          innovators, designers, and engineers build solutions that drive efficiency 
          today and unlock growth for tomorrow.
        </p>
      </div>

      {/* Image Placeholder Section */}
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
          <h2 className="text-lg font-semibold">About Us Page</h2>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-sm uppercase text-gray-500 mb-2">About us</h4>
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Innovators in Technology, <br /> Empowering Your Digital Journey
          </h1>
          <p className="text-gray-700 mb-4">
            We pride ourselves on crafting software that not only meets clients’ needs
            but blows away expectations, often redefining how organizations operate in
            the digital era.
          </p>
          <p className="text-gray-700">
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
        <div className="bg-gray-200 w-full h-[350px] flex items-center justify-center rounded-md">
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
      </div>

      {/* Section 2 (reversed layout) */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
        {/* Left Placeholder */}
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

        {/* Right Content */}
        <div>
          <h4 className="text-sm uppercase text-gray-500 mb-2">
            Our Purpose and Aspirations
          </h4>
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            The Heart of KClub
          </h1>
          <p className="text-gray-700 mb-4">
            Every project we undertake is guided by our mission and vision. We believe in
            innovation with impact, integrity in execution, and lasting value creation for
            our partners. Curious to see this in action? Explore our Case Studies to
            witness how these values come alive in real client success stories.
          </p>

          <h5 className="font-semibold mb-2">Our Mission</h5>
          <p className="text-gray-700 mb-4">
            To empower businesses through innovative technology solutions that solve
            real-world challenges and drive digital transformation. We exist to deliver
            high-quality, customized products and services that enable our clients to
            thrive, grow, and outpace the competition in the digital era.
          </p>

          <h5 className="font-semibold mb-2">Our Vision</h5>
          <p className="text-gray-700">
            To be a global leader in digital transformation, recognized for reshaping
            industries with game-changing tech innovation. We aspire to continuously push
            the boundaries of what’s possible, transforming how organizations work,
            connect, and succeed – ultimately building a smarter, more connected future.
          </p>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
        Trusted by businesses worldwide
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Our journey is defined by measurable impact. With every project delivered,
        client served, and milestones achieved, we continue to set new standards in
        digital transformation.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">5yr+</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Experience building <br /> innovative solutions
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">85+</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Projects delivered <br /> across industries
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">50+</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Certified team of <br /> tech experts
          </p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">100%</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Long-term <br /> client success
          </p>
        </div>
      </div>
    </section>

     <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
        <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        What our clients are saying
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <SwiperSlide key={i}>
            <div className="border p-6 rounded-lg shadow p-10">
              <h3 className="font-semibold mb-2">Company {i}</h3>
              <p className="text-gray-600 text-sm mb-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis cursus, mi quis viverra ornare.”
              </p>
              <p className="text-sm text-gray-500">Name, Position</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>

    <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="uppercase tracking-wide text-gray-600">Our team</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Meet the Minds Behind KClub
        </h2>
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

     <section className="container bg-gray-800 text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Let’s Build the Future Together
          </h2>
          <p className="text-gray-300 mt-2 max-w-lg">
            Explore how we’ve helped businesses across industries transform
            through innovation and technology.
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
    </main>
  );
}
