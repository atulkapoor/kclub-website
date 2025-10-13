import React from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';
 import Link from "next/link";


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
              <li><Link href="/about" className="text-black transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-black transition-colors">Contact Us</Link></li>
              <li className="mt-4 font-semibold text-black">Resources</li>
              <li><Link href="/blog" className="text-black transition-colors">Blog</Link></li>
              <li><Link href="/case_studies" className="text-black transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Products</h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <Link href="/products/warehouse-management" className="text-black block">Warehouse Management</Link>
              <Link href="/products/maritime-agency-management" className="text-black block">Maritime Agency</Link>
              <Link href="/products/communication-management" className="text-black block">Communication Management</Link>
              <Link href="/products/healthcare-management" className="text-black block">Healthcare Management</Link>
              <Link href="/products/lending-management" className="text-black block">Lending Management</Link>
              <Link href="/products/transport-management" className="text-black block">Transport Management</Link>
              <Link href="/products/edtech-platform" className="text-black block">Edutech</Link>
              <Link href="/products/omnichannel-erp" className="text-black block">Omnichannel ERP</Link>
              <Link href="/products/real-estate-erp" className="text-black block">Real Estate ERP</Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/ai-services" className="text-black">AI Services</Link></li>
              <li><Link href="/services/odoo-services-page" className="text-black">ODOO Services</Link></li>
              <li><Link href="/services/saas-app-development" className="text-black">SaaS Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-black">Mobile App Development</Link></li>
              <li><Link href="/services/tech-consulting-and-assessments" className="text-black">Tech Consulting</Link></li>
            </ul>
          </div>

          {/* Industries Section */}
          {/* <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/industries" className="text-black">Industries Overview</Link></li>
            </ul>
          </div> */}

          {/* Careers Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Careers</h3>
             <ul className="space-y-2">
              <li><Link href="/careers" className="text-black transition-colors">Join Our Team</Link></li>
              <li className="mt-4 font-semibold text-black">Industries</li>
              <li><Link href="/industries" className="text-black transition-colors">Industries Overview</Link></li>
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
              <Link href="/privacy-policy" className="text-black hover:text-blue-300 underline">
                Privacy Policy
              </Link>.
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
