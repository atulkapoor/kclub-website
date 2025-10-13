export default function IndustriesPage() {
  const logos = [
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
    { src: "/relume-logo.png", alt: "Webflow" },
    { src: "/webflow-logo.png", alt: "Relume" },
  ];
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">


      <div className="w-full flex flex-col items-center py-12">
        {/* Page Title */}
        <div className="max-w-2xl text-center mb-10"> 
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
              
              Page title</h1>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
            ut commodo diam libero vitae erat.
          </p>
        </div>
  
        {/* Image Placeholder */}
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
          <h2 className="text-lg font-semibold ">Industries Page</h2>
        </div>
      </div>
            </div> 
    <div className="w-full max-w-6xl mx-auto py-16 space-y-20">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
        Short heading goes here</h1>
          <p className="text-gray-600 mb-4">
            Morbi ac imperdiet in adipiscing dui aliquet id. Tellus id scelerisque est ultrices
            ultricies. Duis sit sed et id bibendum quis egestas. Quisque tristique consequat quam
            dui. Nisi et scelerisque amet nulla pulvinar habitasse.
          </p>
          <p className="text-gray-600 mb-4">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
            tristique pharetra consequat est odio felis mauris. Est egestas egestas nisl id at quis
            etiam nec. Netus dis est sit eget nibh.
          </p>
          <p className="text-gray-600">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
            urna arcu arcu, sit. Orci, ornare quam ipsum et, cras ut mauris. Ut cursus vitae et diam.
            Donec posuere donec scelerisque eget est.
          </p>
        </div>

        {/* Right: Image placeholder */}
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
      </div>

      {/* Section 2 (Image Left, Text Right) */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image placeholder */}
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

        {/* Right: Text */}
        <div>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
        Short heading goes here</h1>
          <p className="text-gray-600 mb-4">
            Morbi ac imperdiet in adipiscing dui aliquet id. Tellus id scelerisque est ultrices
            ultricies. Duis sit sed et id bibendum quis egestas. Quisque tristique consequat quam
            dui. Nisi et scelerisque amet nulla pulvinar habitasse.
          </p>
          <p className="text-gray-600 mb-4">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
            tristique pharetra consequat est odio felis mauris. Est egestas egestas nisl id at quis
            etiam nec. Netus dis est sit eget nibh.
          </p>
          <p className="text-gray-600">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
            urna arcu arcu, sit. Orci, ornare quam ipsum et, cras ut mauris. Ut cursus vitae et diam.
            Donec posuere donec scelerisque eget est.
          </p>
        </div>
      </div>
    </div> 
    <div className="w-full max-w-6xl mx-auto py-16 space-y-20">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
        Short heading goes here</h1>
          <p className="text-gray-600 mb-4">
            Morbi ac imperdiet in adipiscing dui aliquet id. Tellus id scelerisque est ultrices
            ultricies. Duis sit sed et id bibendum quis egestas. Quisque tristique consequat quam
            dui. Nisi et scelerisque amet nulla pulvinar habitasse.
          </p>
          <p className="text-gray-600 mb-4">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
            tristique pharetra consequat est odio felis mauris. Est egestas egestas nisl id at quis
            etiam nec. Netus dis est sit eget nibh.
          </p>
          <p className="text-gray-600">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
            urna arcu arcu, sit. Orci, ornare quam ipsum et, cras ut mauris. Ut cursus vitae et diam.
            Donec posuere donec scelerisque eget est.
          </p>
        </div>

        {/* Right: Image placeholder */}
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
      </div>

      {/* Section 2 (Image Left, Text Right) */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image placeholder */}
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

        {/* Right: Text */}
        <div>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
        Short heading goes here</h1>
          <p className="text-gray-600 mb-4">
            Morbi ac imperdiet in adipiscing dui aliquet id. Tellus id scelerisque est ultrices
            ultricies. Duis sit sed et id bibendum quis egestas. Quisque tristique consequat quam
            dui. Nisi et scelerisque amet nulla pulvinar habitasse.
          </p>
          <p className="text-gray-600 mb-4">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
            tristique pharetra consequat est odio felis mauris. Est egestas egestas nisl id at quis
            etiam nec. Netus dis est sit eget nibh.
          </p>
          <p className="text-gray-600">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
            urna arcu arcu, sit. Orci, ornare quam ipsum et, cras ut mauris. Ut cursus vitae et diam.
            Donec posuere donec scelerisque eget est.
          </p>
        </div>
      </div>
        </div>  
        <section className="container bg-gray-800 text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight subpixel-antialiased text-black subpixel-antialiased text-white">
          Schedule a Demo
          </h2>
          <p className="text-gray-300 mt-2 max-w-lg">
            Explore how we&apos;ve helped businesses across industries transform
            through innovation and technology.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <a
            href="#case-studies"
            className="px-5 py-2 bg-black text-white rounded hover:bg-gray-700 transition"
          >
            Button
          </a>
          {/* <a
            href="#contact"
            className="px-5 py-2 bg-black text-white rounded hover:bg-gray-700 transition"
          >
            Contact us
          </a> */}
        </div>
      </div>
    </section>
      <section className="text-white mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-14 mt-20 rounded-md">
     <div className="overflow-hidden whitespace-nowrap w-full bg-white">
      <div className="flex animate-scroll">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center mx-8 shrink-0"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 mr-2" />
            {/* <span className="text-black font-medium">{logo.alt}</span> */}
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {logos.map((logo, i) => (
          <div
            key={`dup-${i}`}
            className="flex items-center mx-8 shrink-0"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 mr-2" />
            {/* <span className="text-black font-medium">{logo.alt}</span> */}
          </div>
        ))}
      </div>
    </div>
    </section>
            
        </main>
            
    );
  }
  