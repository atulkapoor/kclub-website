"use client";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";

export default function Home() {
const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
      <section
        className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
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
              <button className="btn-color-blue text-white px-6 py-3 rounded text-sm font-medium" onClick={openModal}>
                REQUEST A QUOTE
              </button>
              <button className="border text-black border-gray-300 px-6 py-3 rounded hover:bg-gray-50 text-sm font-medium">
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
        className="container mx-auto px-4 md:px-6 lg:px-36 py-8"
      >
        <p className="text-center text-gray-600 mb-8 text-sm">
          Trusted Across Industries
        </p>
        <div className="flex justify-center items-center space-x-6 md:space-x-8 overflow-x-auto">
          {["Webflow", "Relume", "Webflow", "Relume", "Webflow", "Relume"].map(
            (partner, i) => (
              <span
                key={i}
                className="h-6 md:h-8 flex-shrink-0 text-gray-500 text-sm md:text-base"
              >
                {partner}
              </span>
            )
          )}
        </div>
      </section>

      {/* Innovation Section */}
      <section
        className="container mx-auto px-4 md:px-6 lg:px-36 py-16"
        data-aos="fade-up" data-aos-easing="linear" data-aos-delay="200"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
              Innovation Backed by Experience
            </h2>
            <div className="mb-6">
              <div className="text-4xl text-black md:text-5xl font-bold mb-2">85+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              With over 5 years in innovation and a team of tech-certified
              professionals, we deliver strategic insights and custom platform
              development that enhance customer experiences.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="bg-gray-300 w-full max-w-sm md:max-w-md lg:max-w-lg h-60 md:h-72 lg:h-80 rounded flex items-center justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        className="container mx-auto px-4 md:px-6 lg:px-36 py-16"
         data-aos="fade-up" data-aos-easing="linear" data-aos-delay="400"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black text-center">
          Our Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Web Development", "Mobile Apps", "Cloud Solutions", "AI Tools", "Cybersecurity", "IoT Systems"].map(
            (solution, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-lg text-black font-semibold mb-2">{solution}</h3>
                <p className="text-sm text-gray-600">
                  High-quality {solution.toLowerCase()} tailored to your business
                  needs.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Products & Industries */}
      <section className="bg-gray-100 py-16"  data-aos="fade-up" data-aos-easing="linear" data-aos-delay="200">
        <div className="container mx-auto px-4 md:px-6 lg:px-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black text-center">
            Products & Industries
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Healthcare", "Education", "Finance", "Retail"].map((ind, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg text-black font-semibold mb-2">{ind}</h3>
                <p className="text-sm text-gray-600">
                  Innovative solutions for the {ind.toLowerCase()} sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 md:px-6 lg:px-36 py-16"  data-aos="fade-up" data-aos-easing="linear" data-aos-delay="200">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((t) => (
            <div
              key={t}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
              <p className="text-gray-600 mb-4">
                “KClub completely transformed our business with their modern
                tech solutions. Highly recommended!”
              </p>
              <span className="font-semibold text-black">Client {t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-color-blue text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black subpixel-antialiased text-white">
          Ready to Transform Your Business?
        </h2>
        <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-100 transition"  onClick={openModal}>
          Get in Touch
        </button>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 md:px-6 lg:px-36 py-16"  data-aos="fade-up" data-aos-easing="linear" data-aos-delay="200">
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news, events, and opportunities at
            KClub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded border border-gray-300 w-full sm:w-80"
            />
            <button className="btn-color-blue text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <PopupForm isOpen={open} onClose={closeModal} />

    </main>
  );
}
