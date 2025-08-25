import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Services",
      website: "www.aiservices.com",
      email: "admin@aiservices.com"
    },
    {
      title: "0000 Services",
      website: "www.aaa.gov.au",
      email: "admin@aaa.gov.au"
    },
    {
      title: "SAAS App Development",
      website: "www.services.com",
      email: "admin@aaa.gov.au"
    },
    {
      title: "Mobile App Development",
      website: "www.services.com",
      email: "admin@aaa.gov.au"
    },
    {
      title: "Tech Consulting & Assessment",
      website: "www.techconsultancy.com",
      email: "admin@aaa.gov.au"
    },
    {
      title: "Why Clients Choose KClub",
      website: "www.techconsultancy.com",
      email: "admin@aaa.gov.au"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Our Services Page</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Transforming Businesses with End-to-End Digital Services</h2>
          <p className="text-xl opacity-90">Comprehensive solutions to drive your digital transformation</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Key Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Website:</p>
                    <a href={`https://${service.website}`} className="text-blue-600 hover:underline">{service.website}</a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email:</p>
                    <a href={`mailto:${service.email}`} className="text-blue-600 hover:underline">{service.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Digital Strategy?</h2>
          <p className="text-xl mb-8">Contact us today to discuss how we can transform your business</p>
          <a 
            href="https://www.techconsultancy.com" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="bg-gray-700 px-4 py-2 rounded">Vestibbon Medium</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;