import React from 'react'

export default function Custom_Saas() { 
    const features = [
        {
          title: "Full-Stack Development",
          desc: "Expertise in front-end (React, Angular, etc.) and back-end (Node.js, Python, Java) development to create complete web applications.",
        },
        {
          title: "Cloud Infrastructure",
          desc: "Deployment on leading cloud platforms (AWS, Azure, Google Cloud) using services that auto-scale and load-balance for reliability.",
        },
        {
          title: "Multi-Tenant Architecture",
          desc: "Designing the app to securely serve multiple clients (tenants) with isolated data, essential for B2B SaaS offerings.",
        },
        {
          title: "API & Integration Friendly",
          desc: "Building robust REST/GraphQL APIs for easy integration with mobile apps or third-party services, extending your SaaS ecosystem.",
        },
        {
          title: "DevOps & Continuous Delivery",
          desc: "Automated testing, continuous integration, and deployment pipelines to release updates quickly and confidently.",
        },
      ];
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
          <h2 className="text-lg font-semibold">              Custom SaaS App Development Page
          </h2>
        </div>
      </div>
    
          {/* Content Section */}
          <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
            {/* Left Heading */}
            <div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">

                Scalable SAAS <br /> Applications Built for Growth
              </h1>
            </div>
    
            {/* Right Description */}
            <div className="text-gray-600 leading-relaxed">
              <p>
                We design and build scalable SaaS (Software-as-a-Service)
                applications that leverage the power of cloud infrastructure. Our
                expertise spans product ideation, architecture design, development,
                and deployment delivering secure, high-performing web and mobile
                SaaS platforms. Whether you&apos;re launching a new product or scaling an
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

            {/* Text */}
            <div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
            {service.title}</h1>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
            </section> 
            <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {/* Image Placeholder */}
            <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-md mb-4">
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

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section> 
            <section className="container bg-gray-800 text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-white">
Ready to Elevate Your Digital Strategy?          
</h2>
          <p className="text-gray-300 mt-2 max-w-lg">
              Partner with KClub&apos;s experts to design, build, and implement technology solutions 
              that accelerate growth and drive measurable impact.
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
    }; 
