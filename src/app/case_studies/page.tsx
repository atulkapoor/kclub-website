// app/case-studies/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllCaseStudies, getAllCategories } from "../data/studies";

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesCategory =
      selectedCategory === "All" || study.category === selectedCategory;
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white mt-18">
      <section className="flex flex-col items-center justify-center">
        <div className="w-full h-auto">
          <img
            src="case_studies-img/hero.png"
            alt="Hero Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* 
    <div className="min-h-screen bg-gray-50 pb-8 mt-12">
      <div className="container mx-auto px-4">
           
        

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === 'All' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg 
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCaseStudies.map((study) => (
            <div key={study.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-600 text-sm font-medium">{study.tagline}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{study.category}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h2>
                <p className="text-gray-600 mb-4">{study.excerpt}</p>
                <Link 
                  href={`/case_studies/${study.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {study.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No case studies found matching your criteria.</p>
          </div>
        )}
      </div>
        </div> */}

      <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
            Our CaseStudies
          </h2>
          <p className="text-gray-600 max-w-3xl">
            At KClub, we believe in real impact backed by real work. Our case
            studies highlight how we’ve partnered with businesses across
            industries to scale operations, improve efficiency, and build
            technology that transforms outcomes. Explore our featured stories
            below.
          </p>
        </div>

        {/* Filter + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Show all
          </button>

          <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 outline-none bg-gray-100 text-gray-700"
            />
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img
              src="/case_studies-img/case-studies1.png"
              alt="Mswipe"
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img
              src="/case_studies-img/case-studies2.png"
              alt="Mswipe"
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img
              src="/case_studies-img/case-studies3.png"
              alt="Mswipe"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
