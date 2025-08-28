// export default function BlogSection() {
//     return (
//         <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">

//       <section className="w-full">
//         {/* Hero Banner */}
//         <div className="bg-gray-200 flex flex-col items-center justify-center py-16">
//           <div className="w-24 h-24 bg-gray-300 rounded flex items-center justify-center">
//             <span className="text-gray-500">🖼️</span>
//           </div>
//           <h1 className="mt-6 text-2xl md:text-3xl font-bold text-gray-800">
//             Blog Main Page
//           </h1>
//         </div>
  
//         {/* Tagline + Text Section */}
//         <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           {/* Left: Tagline */}
//           <h2 className="text-2xl font-bold text-gray-900">
//             Catchy Tagline
//           </h2>
  
//           {/* Right: Paragraph */}
//           <p className="text-gray-600 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Suspendisse varius enim in eros elementum tristique. Duis cursus,
//             mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
//             libero vitae erat.
//           </p>
//         </div>
//             </section>
//         </main>
        
//     );
//   }
  
// app/blog/page.tsx
import Link from 'next/link';
import { getAllPosts } from '../data/blog';

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Posts</h1>
          {/* Category filter would go here */}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="text-blue-600 font-medium">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.introduction?.substring(0, 150)}...</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Written by {post.author}</span>
                  <span>{post.publishDate}</span>
                </div>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-100 rounded-lg p-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to newsletter</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to receive the latest blog posts to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing you agree to with our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}