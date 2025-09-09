import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#eeeeee]" >
      <div className="container mx-auto px-4 md:px-6 lg:px-36">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 lg:gap-8 mb-12">
  {[
    {
      title: "About Us",
      links: ["Contact Us", "Resources"],
    },
    {
      title: "Products",
      links: [
        "CrateKLUB",
        "MarineKLUB",
        "PingKLUB",
        "TheraKLUB",
        "FinstaKLUB",
        "FriestaKLUB",
        "EduKLUB",
        "OmniKLUB",
        "EstateKLUB",
      ],
    },
    {
      title: "Services",
      links: [
        "AI Services",
        "ODOO Services",
        "Custom SAAS App Development",
        "Mobile App Development",
        "Tech Consulting & Assessments",
      ],
    },
    {
      title: "Industries",
      links: [
        "Retail & eCommerce",
        "Healthcare & Life Sciences",
        "BSFI & Fintech",
        "Education",
        "Real Estate",
        "Telecom & Manufacturing",
      ],
    },
  ].map((col) => (
    <div key={col.title}>
      <h4 className="font-semibold mb-4 text-sm text-black">{col.title}</h4>
      <ul className="space-y-2 text-xs text-black">
        {col.links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-gray-900">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))}

  {/* Newsletter Section - ek column */}
  <div>
    <h4 className="font-semibold mb-4 text-sm text-black">
      Join our newsletter
    </h4>
    <p className="text-sm text-black mb-4">
      Get the latest updates on our products, services, and industry insights
      delivered straight to your inbox.
    </p>

    <div className="flex items-center space-x-2 mb-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-44 text-black  px-4 py-2 border rounded-md focus:outline-none bg-white border-black focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 text-xs py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
        Subscribe
      </button>
    </div>

    <p className="text-xs text-black mb-3">
      By subscribing you agree to with our <u>Privacy Policy</u>
    </p>

    <div className="flex gap-4 text-xs text-black">
    <div className="flex gap-4 text-black">
          <a href="#" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="YouTube">
            <Youtube size={18} />
          </a>
        </div>
    </div>
  </div>
</div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-black border-t gap-4">
          <div className="font-bold text-xl">
             <Image
                        src="/logo.svg"
                        alt="Logo"
                      width={100}
                      height={40}
                      />
          </div>
          <div className="text-sm text-black">© 2024 KClub. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
