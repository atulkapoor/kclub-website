import Link from "next/link";
import { getAllPosts } from "../data/blog";

export default function BlogPage() {
  const blogPosts = getAllPosts();
  const popularPosts = blogPosts.slice(0, 5); // Example: top 5 as popular

  return (
    <main className="min-h-screen bg-white text-gray-900">

          <section className="flex flex-col items-center justify-center">
        <div className="w-full h-auto">
          <img
            src="/blog-img/hero.png"           
            alt="Hero Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Header Section */}
      <header className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">The Digital Journal</h1>
          <div>
     <p className="text-sm md:text-base text-gray-600 mt-2 max-w-lg">
            Stay updated with the latest insights, strategies, and success stories
            in digital transformation, technology, and business innovation.
          </p>
          </div>
        </div>
      </header>

      {/* Category and Search Bar */}
      <div className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
            View all
          </button>
          <button className="text-gray-700 hover:text-blue-900">
            Category one
          </button>
          <button className="text-gray-700 hover:text-blue-900">
            Category two
          </button>
          <button className="text-gray-700 hover:text-blue-900">
            Category three
          </button>
          <button className="text-gray-700 hover:text-blue-900">
            Category four
          </button>
        </div>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full md:w-80">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-3 py-2 text-sm focus:outline-none"
          />
          <button className="bg-blue-900 text-white px-4 py-2 text-sm hover:bg-blue-800">
            Search
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Blog Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogPosts.slice(0, 4).map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              {/* Placeholder Image Box */}
              <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5h18M3 19h18M3 5l9 7 9-7"
                  />
                </svg>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{post.category}</p>
                <h2 className="text-lg font-semibold mb-2 hover:text-blue-900 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.introduction?.substring(0, 120)}...
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="font-medium">{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar - Popular Blogs */}
        <aside className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6">Popular blogs</h3>
          <div className="flex flex-col gap-6">
            {popularPosts.map((post) => (
              <div key={post.slug}>
                <div className="flex items-start gap-3">
                  {/* Placeholder Image for Sidebar */}
                  <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5h18M3 19h18M3 5l9 7 9-7"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">{post.category}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold hover:text-blue-900"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {post.introduction?.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
