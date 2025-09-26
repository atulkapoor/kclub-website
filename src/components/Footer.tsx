// import Image from "next/image";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Twitter,
//   Youtube,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="py-12 bg-[#dfecff]">
//       <div className="container mx-auto px-4 md:px-6 lg:px-24">
//         {/* Footer Columns */}
//         <div className="grid grid-cols-1  max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-12">
//   {[
//     {
//       title: "About Us",
//       links: ["Contact Us", "Resources"],
//     },
//     {
//       title: "Products",
//       links: [
//         "CrateKLUB",
//         "MarineKLUB",
//         "PingKLUB",
//         "TheraKLUB",
//         "FinstaKLUB",
//         "FriestaKLUB",
//         "EduKLUB",
//         "OmniKLUB",
//         "EstateKLUB",
//       ],
//     },
//     {
//       title: "Services",
//       links: [
//         "AI Services",
//         "ODOO Services",
//         "Custom SAAS App Development",
//         "Mobile App Development",
//         "Tech Consulting & Assessments",
//       ],
//     },
//     {
//       title: "Industries",
//       links: [
//         "Retail & eCommerce",
//         "Healthcare & Life Sciences",
//         "BSFI & Fintech",
//         "Education",
//         "Real Estate",
//         "Telecom & Manufacturing",
//       ],
//     },
//   ].map((col) => (
//     <div key={col.title}>
//       <h4 className="font-semibold mb-4 text-sm text-black">{col.title}</h4>
//       <ul className="space-y-2 text-xs text-black">
//         {col.links.map((link) => (
//           <li key={link}>
//             <a href="#" className="hover:text-gray-900">
//               {link}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   ))}

//   {/* Newsletter Section - ek column */}
//   <div>
//     <h4 className="font-semibold mb-4 text-sm text-black">
//       Join our newsletter
//     </h4>
//     <p className="text-sm text-black mb-4">
//       Get the latest updates on our products, services, and industry insights
//       delivered straight to your inbox.
//     </p>

//     <div className="flex items-center space-x-2 mb-3">
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className="w-44 text-black  px-4 py-2 border rounded-md focus:outline-none bg-white border-black focus:ring-2 focus:ring-blue-500"
//       />
//       <button className="px-4 text-xs py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
//         Subscribe
//       </button>
//     </div>

//     <p className="text-xs text-black mb-3">
//       By subscribing you agree to with our <u>Privacy Policy</u>
//     </p>

//     <div className="flex gap-4 text-xs text-black">
//     <div className="flex gap-4 text-black">
//           <a href="#" aria-label="Facebook">
//             <Facebook size={18} />
//           </a>
//           <a href="#" aria-label="Instagram">
//             <Instagram size={18} />
//           </a>
//           <a href="#" aria-label="LinkedIn">
//             <Linkedin size={18} />
//           </a>
//           <a href="#" aria-label="Twitter">
//             <Twitter size={18} />
//           </a>
//           <a href="#" aria-label="YouTube">
//             <Youtube size={18} />
//           </a>
//         </div>
//     </div>
//   </div>
// </div>

//         {/* Bottom Row */}
//         <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-black border-t gap-4">
//           <div className="font-bold text-xl">
//              <Image
//                         src="/logo.svg"
//                         alt="Logo"
//                       width={100}
//                       height={40}
//                       />
//           </div>
//           <div className="text-sm text-black">© 2024 KClub. All rights reserved.</div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#dfecff] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* About KClub Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">About KClub</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-black transition-colors">Contact Us</a></li>
              <li className="mt-4 font-semibold text-black">Resources</li>
              <li><a href="#" className="text-black transition-colors">Blog</a></li>
              <li><a href="#" className="text-black transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Products</h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                'CrateKLUB', 'MarineKLUB', 'PingKLUB', 'TheraKLUB',
                'FinstatKLUB', 'FreightKLUB', 'EduKLUB', 'OmniKLUB', 'EstateKLUB'
              ].map((product) => (
                <a key={product} href="#" className="text-black transition-colors text-sm block">
                  {product}
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Services</h3>
            <ul className="space-y-2">
              {[
                'AI Services',
                'ODOO Services',
                'Custom SAAS App Development',
                'Mobile App Development',
                'Tech Consulting & Assessments'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-black transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Industries</h3>
            <ul className="space-y-2">
              {[
                'Retail & eCommerce',
                'Healthcare & Life Sciences',
                'BFSI & Fintech',
                'Education',
                'Real Estate',
                'Telecom & Manufacturing'
              ].map((industry) => (
                <li key={industry}>
                  <a href="#" className="text-black transition-colors text-sm">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-black">Join our newsletter</h3>
            <p className="text-black text-sm mb-4">
              Get the latest updates on our products, services, and industry insights delivered straight to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-2 mr-2 py-2 bg-white border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-[#050953] hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-black text-xs mt-3">
              By subscribing you agree to with our{' '}
              <a href="#" className="text-black hover:text-blue-300 underline">
                Privacy Policy
              </a>
            </p>
            
            {/* Social Icons - represented by pins in your design */}
            {/* <div className="mt-6 flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="bg-green-600 p-2 rounded-full">
                <div className="h-4 w-4 flex items-center justify-center">🍀</div>
              </div>
              <div className="bg-green-600 p-2 rounded-full">
                <div className="h-4 w-4 flex items-center justify-center">🍀</div>
              </div>
              <div className="bg-green-600 p-2 rounded-full">
                <div className="h-4 w-4 flex items-center justify-center">🍀</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Contact Information */}
        {/* <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Kclub</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 text-sm">
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-2 h-4 w-4" />
                <span>info@kclub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-400 mr-2 h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-400 mr-2 h-4 w-4" />
                <span>123 Business Ave, City, State 12345</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Social Media Links */}
        {/* <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
            <Instagram className="h-5 w-5" />
          </a>
        </div> */}
        
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center pt-8 border-black border-t gap-4">
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

      {/* Bottom Copyright Bar
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 KClub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div> */}
      
    </footer>
  );
};

export default Footer;