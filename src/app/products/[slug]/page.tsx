import { products } from "../../data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
          <img src={product.image} alt="c-klogo" className="h-8" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue mt-5">
              {product.hero.title}
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.hero.subtitle}
            </p>

            <button className="mt-6 bg-color-blue text-white px-14 py-2 rounded-lg hover:bg-gray-800 transition">
              Get in touch
            </button>
          </div>

          {/* Right Side - Video Placeholder */}
      <img src={product.hero.image} alt="Hero Banner" className="w-full h-auto object-contain" /> 

        </div>
      </section>

      {/* Features Section */}
    <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {product.features.map((feature, index) => (
      <div
        key={index}
        className="transition p-6 flex flex-col items-center text-center"
      >
        {/* Icon */}
        <div className="w-60 h-60 flex items-center justify-center bg-white rounded-xl shadow-lg mb-6">
          <Image
            src={feature.image}
            alt={feature.title}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Schedule Demo Section */}
      <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Placeholder */}
               <img src={product.hero.image} alt="Hero Banner" className="w-full h-auto object-contain" /> 


          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-blue">
              {product.scheduledemo.title}
            </h1>
            <p className="text-gray-700 mb-4">{product.scheduledemo.subtitle}</p>
            {/* Desktop CTA */}
            <button className="mt-4 bg-color-blue text-white px-14 py-2 rounded hover:bg-gray-800 transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
