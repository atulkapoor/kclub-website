import React from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#dfecff] text-white container-fluid mx-auto px-4 md:px-6 lg:px-36 py-10 lg:pt-10">
      <div className="max-w-12xl py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* About KClub Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">About KClub</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-black transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-black transition-colors">Contact Us</a></li>
              <li className="mt-4 font-semibold text-black">Resources</li>
              <li><a href="/blog" className="text-black transition-colors">Blog</a></li>
              <li><a href="/case_studies" className="text-black transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Products</h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <a href="/products/warehouse-management" className="text-black block">Warehouse Management</a>
              <a href="/products/maritime-agency-management" className="text-black block">Maritime Agency</a>
              <a href="/products/communication-management" className="text-black block">Communication Management</a>
              <a href="/products/healthcare-management" className="text-black block">Healthcare Management</a>
              <a href="/products/lending-management" className="text-black block">Lending Management</a>
              <a href="/products/transport-management" className="text-black block">Transport Management</a>
              <a href="/products/edtech-platform" className="text-black block">Edutech</a>
              <a href="/products/omnichannel-erp" className="text-black block">Omnichannel ERP</a>
              <a href="/products/real-estate-erp" className="text-black block">Real Estate ERP</a>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/ai-services" className="text-black">AI Services</a></li>
              <li><a href="/services/odoo-services-page" className="text-black">ODOO Services</a></li>
              <li><a href="/services/saas-app-development" className="text-black">SaaS Development</a></li>
              <li><a href="/services/mobile-app-development" className="text-black">Mobile App Development</a></li>
              <li><a href="/services/tech-consulting-and-assessments" className="text-black">Tech Consulting</a></li>
            </ul>
          </div>

          {/* Industries Section */}
          {/* <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/industries" className="text-black">Industries Overview</a></li>
            </ul>
          </div> */}

          {/* Careers Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Careers</h3>
             <ul className="space-y-2">
              <li><a href="/careers" className="text-black transition-colors">Join Our Team</a></li>
              <li className="mt-4 font-semibold text-black">Industries</li>
              <li><a href="/industries" className="text-black transition-colors">Industries Overview</a></li>
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
                className="px-2 mr-2 py-2 bg-white border border-gray-700 rounded text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-[#050953] hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-black text-xs mt-3">
              By subscribing you agree to our{' '}
              <a href="/privacy-policy" className="text-black hover:text-blue-300 underline">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center pt-8 border-black border-t gap-4">
          <div className="font-bold text-xl">
            <Image src="/logo.svg" alt="Logo" width={100} height={40} />
          </div>
          <div className="text-sm text-black">
            © 2025 KClub. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
