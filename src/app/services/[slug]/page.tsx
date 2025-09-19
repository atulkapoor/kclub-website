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
      <section className="bg-gray-200 flex flex-col items-center justify-center py-40 mt-20">
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
          {service.name}
        </h1>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold subpixel-antialiased text-black text-gray-900">
            {service.hero.title}
          </h2>
        </div>

        {/* Right Content */}
        <div className="text-gray-700">
          <p className="mb-6 leading-relaxed">
             {service.hero.subtitle}
          </p>
          <button className="px-14 py-2 bg-black text-white rounded-lg bg-color-blue transition">
            Schedule a demo
          </button>
        </div>
      </section>

        <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
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
          {/* Left Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              {service.scheduledemo.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {service.scheduledemo.subtitle}
            </p>
          </div>

         
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image Placeholder */}

          {/* Right Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              {service.comparedemo?.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
                {service.comparedemo?.subtitle}
            </p>
          </div>

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

      {/* Features Section */}
     <section className="container mx-auto px-4 md:px-6 py-12 lg:py-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col text-center hover:shadow-lg transition"
            >
              {/* Image */}
              {/* <div className="w-16 h-16 mx-auto bg-gray-100 flex items-center justify-center rounded-full mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="opacity-80"
                />
              </div> */}

              {/* Title */}
              <h3 className="text-lg mb-8 font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container bg-color-blue mb-10 text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-white">
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
            className="px-10 py-2 bg-white text-black rounded-full border border-black hover:bg-gray-100 transition"
          >
            See case studies
          </a>
          <a
            href="#contact"
            className="px-10 py-2 bg-white text-black rounded-full border border-black hover:bg-gray-100 transition"
          >
            Contact us
          </a>
        </div>
        </div>
      </section>
    </main>
  );
}
