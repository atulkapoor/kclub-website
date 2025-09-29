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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen w-screen">
        <div className="w-full h-full">
          <img
            src={service.hero.image}
            alt="Hero Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold subpixel-antialiased text-blue">
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
           <div className="w-full max-w-sm md:max-w-md lg:max-w-xl flex flex-col items-center"> 
      <img src={service.scheduledemo.image} alt="Hero Banner" className="w-full h-auto object-contain" /> 
      </div> 
          {/* Left Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue">
              {service.comparedemo?.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
                {service.comparedemo?.subtitle}
            </p>
          </div>
          <div className="w-full max-w-sm md:max-w-md lg:max-w-xl flex flex-col items-center"> 
              <img src={service.comparedemo?.image} alt="Hero Banner" className="w-full h-auto object-contain" /> 
          </div> 
        </div>
      </section>
        
     {service.support ? 
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image Placeholder */}
 <div className="w-full max-w-sm md:max-w-md lg:max-w-xl flex flex-col items-center"> 
              <img src={service.support?.image} alt="Hero Banner" className="w-full h-auto object-contain" /> 
          </div> 
          {/* Right Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue">
              {service.support?.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
                {service.support?.subtitle}
            </p>
          </div>
         
        </div>
      </section>
      : ""}

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
              <h3 className="text-lg mb-8 font-semibold text-blue">
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
