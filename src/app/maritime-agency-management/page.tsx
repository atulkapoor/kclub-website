import Image from "next/image";

const features = [
  {
    title: "Real-Time Inventory Tracking",
    description:
      "Always know your stock levels across locations with live updates.",
    image: "/placeholder.png",
  },
  {
    title: "Order Picking Optimization",
    description:
      "Consulting to prioritize AI use-cases and develop a roadmap aligned with your business objectives.",
    image: "/placeholder.png",
  },
  {
    title: "Barcode & RFID Integration",
    description:
      "Quick scanning for accurate inventory updates and error reduction.",
    image: "/placeholder.png",
  },
  {
    title: "Warehouse Analytics Dashboard",
    description:
      "Visualize orders, stock movement, and KPIs to drive continuous improvement.",
    image: "/placeholder.png",
  },
  {
    title: "Integration Ready",
    description:
      "Seamlessly connect with ERP, e-commerce, and shipping systems for end-to-end automation.",
    image: "/placeholder.png",
  },
];

export default function WareHouseManagment() {

      return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                     <img src="/cklub-logo.png" alt="c-klogo" className="h-8 mr-2 h-14" />
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight mt-5">
                        Intelligent Tools for the Modern Supply Chain
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        CrateKLUB is an advanced Warehouse Management System (WMS) that digitizes and optimizes 
                        your warehouse operations from end to end. It provides real-time visibility into inventory 
                        levels and automates key processes, ensuring stock is always accurate and orders are fulfilled faster. 
                        With CrateKLUB, you can streamline everything from receiving and put-away to picking, packing, 
                        and shipping — reducing errors and operational costs. Ready to modernize your warehouse?
                    </p>

                    <button className="mt-6 bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
                        Get in touch
                    </button>
                    </div>

                    {/* Right Side - Video Placeholder */}
                    <div className="relative bg-gray-300 h-160 flex items-center justify-center rounded-lg">
                    <button className="w-14 h-14 bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition">
                        ▶
                    </button>
                    </div>
                </div>
                </section>

                <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                    {features.map((feature, index) => (
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

                        <h3 className="text-2xl md:text-2xl lg:text-2xl font-semibold text-gray-900 text-sm md:text-base">
                        {feature.title}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm mt-2">
                        {feature.description}
                        </p>
                    </div>
                    ))}
                </div>
                </section>

                 <section className="container mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
                    {/* Section 1 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                   

                        {/* Right Placeholder */}
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

                             {/* Left Content */}
                        <div>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            Smart Warehouse Management, Simplified
                        </h1>
                        <p className="text-gray-700 mb-4">
                            Designed for modern supply chains, CrateKLUB empowers your warehouse managers with intelligent tools like smart storage allocation and route-optimized picking. Barcode and RFID integration improve tracking accuracy, while analytics dashboards offer insights into inventory turnover and warehouse performance. Whether you run a single stockroom or multiple distribution centers, CrateKLUB scales to keep your inventory moving efficiently. Ready to see how it works?
                        </p>
                        {/* Desktop CTA */}
                        <button className="hidden lg:block bg-black text-white px-4 py-2 rounded text-sm">
                            Schedule a Demo
                        </button>
                        </div>
                    </div>
                </section>

                 <section className="container bg-gray-800 text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        {/* Left Content */}
                        <div>
                        <h2 className="text-3xl md:text-4xl lg:text45xl font-bold mb-6 leading-tight">
                            Explore Our Other Services, See Our Impact
                        </h2>
                        <p className="text-gray-300 mt-2 max-w-lg">
                            Discover the full range of solutions we offer and explore case studies that 
                            showcase how we&apos;ve helped businesses transform through technology
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
      )
}