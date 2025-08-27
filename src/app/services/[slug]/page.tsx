import { services } from "../../data/services";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((p) => ({ slug: p.slug }));
}

export default async function ServiceDetail({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((p) => p.slug === slug);

  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-200 flex flex-col items-center justify-center py-40">
        <div className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-md">
          <svg
            className="w-12 h-12 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7l6 6 4-4 8 8M21 21H3V3h18v18z"
            />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold mt-6">
          AI Services Page
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Transform Your Business with the Power of AI
          </h2>
        </div>

        {/* Right Content */}
        <div className="text-gray-700">
          <p className="mb-6 leading-relaxed">
            Our AI and machine learning solutions go beyond automation they
            enable predictive insights, process optimization, and intelligent
            decision-making. Whether it&apos;s data-driven forecasting,
            recommendation engines, chatbots, or computer vision applications,
            we design AI systems tailored to your business challenges. By
            integrating seamlessly into your operations, our AI solutions empower
            you to unlock efficiency, reduce costs, and gain a competitive edge
            in the digital-first era.
          </p>
          <button className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Schedule a demo
          </button>
        </div>
      </section>

        <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Harness the Power of Artificial Intelligence for Your Business
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our AI services help you leverage artificial intelligence and
              machine learning to solve complex business challenges and unlock
              new opportunities. We bring cutting-edge AI capabilities to your
              organization—from automating routine tasks with smart algorithms
              to uncovering patterns in big data that drive strategic
              decision-making. KREOS&apos;s AI-driven tools will work closely with
              your industry&apos;s unique context and develop bespoke AI solutions
              that give you a competitive edge.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-md">
            <svg
              className="w-12 h-12 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7l6 6 4-4 8 8M21 21H3V3h18v18z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image Placeholder */}
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-md">
            <svg
              className="w-12 h-12 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7l6 6 4-4 8 8M21 21H3V3h18v18z"
              />
            </svg>
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Comprehensive AI Development and Integration
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We have experience building a variety of AI-driven applications.
              Whether you need to implement a predictive analytics model to
              forecast demand, deploy a natural language chatbot for customer
              service, or use computer vision to improve services quality
              control, our AI team can design and deliver solutions tailored to
              your requirements. Our expertise spans industries, and we bring a
              holistic approach that ensures successful integration with your
              workflows. By working closely with your team, we develop AI
              applications that provide value, scale with your business, and
              transform the way you work.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
            <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Placeholder image */}
                    <div className="w-50 h-50 bg-gray-200 flex items-center justify-center rounded mb-4">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={50}
                        height={50}
                        className="opacity-70"
                      />
                    </div>
      
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mt-2">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
      
     
      
            {/* CTA Section */}
            <section className="container bg-gray-800 text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Left Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Explore Our Other Services, See Our Impact
                  </h2>
                  <p className="text-gray-300 mt-2 max-w-lg">
                    Discover the full range of solutions we offer and explore case
                    studies that showcase how we&apos;ve helped businesses transform
                    through technology
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
}
