import React from 'react'

export default function Custom_Saas() { 
    const services1 = [
        {
          title: "IT Assessment & Audit",
          desc: "We conduct comprehensive audits of your existing systems, software, and processes. This involves reviewing infrastructure (servers, cloud usage, networking), application portfolios, data management, and security protocols. We then pinpoint pain points such as bottlenecks, outdated technologies, or security vulnerabilities. The result is an objective snapshot of 'where you are now' and recommendations on what needs attention.",
        },
        {
          title: "Digital Transformation Roadmap",
          desc: "Based on your business goals (be it scaling operations, improving customer experience, or cutting costs), we outline a strategic plan. This might include adopting new technologies like cloud services or AI, process automation, or system integrations. We prioritize initiatives by impact and feasibility, giving you a phased approach that delivers quick wins and long-term value. You’ll receive a clear roadmap with timelines and resource estimates to confidently move forward.",
        }, 
      ]; 
    return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
          
        <section className="w-full bg-white py-16">
          {/* Top Heading with Image Placeholder */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7l9-4 9 4-9 4-9-4zm0 8l9 4 9-4m-9-4v8"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-800">
              Custom SaaS App Development Page
            </h2>
          </div>
    
          {/* Content Section */}
          <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
            {/* Left Heading */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Scalable SAAS <br /> Applications Built for Growth
              </h3>
            </div>
    
            {/* Right Description */}
            <div className="text-gray-600 leading-relaxed">
              <p>
                We design and build scalable SaaS (Software-as-a-Service)
                applications that leverage the power of cloud infrastructure. Our
                expertise spans product ideation, architecture design, development,
                and deployment delivering secure, high-performing web and mobile
                SaaS platforms. Whether you’re launching a new product or scaling an
                existing one, we focus on user-centric design, robust backend
                systems, and flexible integrations to ensure your app delivers
                lasting value to customers and evolves seamlessly with market
                demands.
              </p>
              <button className="mt-6 px-6 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-700 transition">
                Schedule a Demo
              </button>
            </div>
          </div>
            </section>
            <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {services1.map((service, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            {/* Image Placeholder */}
            <div className="w-full h-52 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-600 text-sm">Img</span>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </section> 
            </main>
      );
    }; 
