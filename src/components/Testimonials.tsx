import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Partnering with KClub truly transformed how we operate. Their 4D methodology made the entire process smooth — from initial discussion to delivery — and the solution exceeded expectations.",
      name: "Anita Rao",
      position: "Head of Digital Strategy",
      company: "FinEdge Solutions",
      logo: "/webflow-logo.png",
    },
    {
      text: "KClub’s team embodies innovation. They didn’t just build software; they reimagined our systems to drive efficiency. Their people-first approach made collaboration seamless.",
      name: "Rahul Desai",
      position: "COO",
      company: "HealthSync India",
      logo: "/relume-logo.png",
    },
    {
      text: "From the very first discussion to deployment, KClub delivered with integrity and precision. Their global team supported us across time zones and always kept us ahead in the digital race.",
      name: "Sophie Lee",
      position: "Product Lead",
      company: "EduWave Global",
      logo: "/webflow-logo.png",
    },
    {
      text: "Working with KClub was a game-changer. Their innovative thinking, streamlined processes, and commitment to lasting impact helped us accelerate our growth trajectory.",
      name: "Karan Mehta",
      position: "Founder & CEO",
      company: "TechNova Labs",
      logo: "/relume-logo.png",
    },
  ];

  return (
    <>
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
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="border rounded-lg p-10 flex flex-col justify-between h-full mb-15">
                {/* Stars */}
                <div className="flex mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <span key={idx} className="text-color-blue text-lg">
                        ★
                      </span>
                    ))}
                </div>

                {/* Testimonial */}
                <p className="text-black text-sm mb-6 leading-relaxed">
                  &quot;{t.text}&quot;
                </p>

                {/* Footer: profile + company */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t">
                  {/* Profile */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-sm text-black">
                        {t.name}
                      </p>
                      <p className="text-xs text-black">
                        {t.position}, {t.company}
                      </p>
                    </div>
                  </div>

                  {/* Company logo */}
                  <div className="flex items-center gap-2">
                    <img
                      src={t.logo}
                      alt={t.company}
                      className="h-10 w-30 object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
