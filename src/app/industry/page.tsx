export default function IndustriesPage() {
    return (
        <main>

      <div className="w-full flex flex-col items-center py-12">
        {/* Page Title */}
        <div className="max-w-2xl text-center mb-10">
          <h1 className="text-2xl font-bold mb-3">Page title</h1>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
            ut commodo diam libero vitae erat.
          </p>
        </div>
  
        {/* Image Placeholder */}
        <div className="w-full max-w-5xl bg-gray-200 flex flex-col items-center justify-center rounded-lg p-16">
          {/* Placeholder image icon */}
          <div className="w-20 h-20 bg-gray-300 flex items-center justify-center rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5l4.5-4.5 4.5 4.5 6-6 4.5 4.5M3 6.75h.008v.008H3V6.75z"
              />
            </svg>
          </div>
  
          {/* Industries Page Title */}
          <h2 className="text-xl font-semibold mt-6">Industries Page</h2>
        </div>
            </div> 
    <div className="w-full max-w-6xl mx-auto py-16 space-y-20">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Short heading goes here</h2>
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
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 9 9-9" />
          </svg>
        </div>
      </div>

      {/* Section 2 (Image Left, Text Right) */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image placeholder */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 9 9-9" />
          </svg>
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Short heading goes here</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Short heading goes here</h2>
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
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 9 9-9" />
          </svg>
        </div>
      </div>

      {/* Section 2 (Image Left, Text Right) */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image placeholder */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 9 9-9" />
          </svg>
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Short heading goes here</h2>
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
            
        </main>
            
    );
  }
  