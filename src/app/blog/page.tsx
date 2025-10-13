"use client";
import Link from "next/link";
import { useState } from "react";
import { getAllPosts } from "../data/blog";

export default function BlogPage() {
  const blogPosts = getAllPosts();

  // Extract unique categories dynamically
  const categories = ["View all", ...new Set(blogPosts.map((post) => post.category))];

  // Manage selected category
  const [selectedCategory, setSelectedCategory] = useState("View all");

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "View all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const popularPosts = blogPosts.slice(0, 5); // Example: top 5 as popular

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
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
      <header className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">The Digital Journal</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2 max-w-lg">
            Stay updated with the latest insights, strategies, and success stories
            in digital transformation, technology, and business innovation.
          </p>
        </div>
      </header>

      {/* Category & Search Section */}
      <div className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Dynamic Category Buttons */}
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? "bg-blue-900 text-white"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
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

      {/* Main Blog Section */}
      <div className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Blog Posts Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredPosts.slice(0, 4).map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              {/* Blog Thumbnail */}
              <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{post.category}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block text-lg font-semibold mb-2 hover:text-blue-900 transition-colors"
                >
                  {post.title}
                </Link>
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
              <div key={post.slug} className="flex items-start gap-3">
                <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
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
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
