"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Mounts children into <body> so the modal is always on top of the page */
function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  // Close on ESC + lock page scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Prevent overlay-click from closing when clicking inside the card
  const stop = (e: React.MouseEvent) => e.stopPropagation();

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
    <ModalPortal>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-2 sm:p-4 overflow-y-auto"
        onMouseDown={onClose}
        aria-modal="true"
        role="dialog"
      >
        {/* Card */}
        <div
          className="w-[95vw] sm:w-[90vw] md:w-[85vw] max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row my-6 max-h-[90vh] overflow-y-auto"
          onMouseDown={stop}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-black"
          >
            ✕
          </button>

          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
            <img src="/logo.svg" alt="Logo" className="h-12 mb-6" />

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name*" className="border p-2 w-full" />
                <input type="text" placeholder="Designation*" className="border p-2 w-full" />
                <input type="email" placeholder="Email*" className="border p-2 w-full" />
                <input type="text" placeholder="Phone Number*" className="border p-2 w-full" />
                <input type="text" placeholder="Company Name*" className="border p-2 w-full" />
                <input type="text" placeholder="Industry*" className="border p-2 w-full" />
              </div>

              <input
                type="text"
                placeholder="Which product or service are you interested in*"
                className="border p-2 w-full"
              />
              <textarea placeholder="Message*" className="border p-2 w-full h-24"></textarea>

              <button
                type="submit"
                className="bg-black text-white w-full py-2 hover:bg-gray-800 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Testimonial */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center text-center">
            <div className="text-xl text-blue">★★★★★</div>
            <p className="mt-4 text-gray-700 font-medium">
              “Partnering with KClub truly transformed how we operate. Their 4D methodology made the entire process smooth — from initial discussion to delivery — and the solution exceeded expectations.”
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span>
                  <strong>Anita Rao</strong>
                  <br />
                 Head of Digital Strategy
                </span>
              </div>
              <img src="/webflow-logo.png" alt="Webflow" className="h-6" />
            </div>

            {/* Slider Controls (dummy) */}
            <div className="mt-6 flex justify-center items-center gap-4 text-gray-500">
              <button>←</button>
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              </div>
              <button>→</button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind "component class" for inputs */}
      <style jsx global>{`
        .input {
          @apply w-full rounded-md border border-gray-300 px-3 py-2 outline-none
                 focus:ring-2 focus:ring-black/70 focus:border-black transition;
        }
      `}</style>
    </ModalPortal>
  );
}