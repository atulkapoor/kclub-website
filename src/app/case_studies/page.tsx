// app/case-studies/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllCaseStudies, getAllCategories } from '../data/studies';

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         study.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

    return (
        <main className="min-h-screen bg-white">
 {/* Page Header */}
 <section className="flex flex-col items-center justify-center h-screen w-screen">
 <div className="w-full h-full">

                <img
            src="case_studies-img/hero.png"  
            className="w-full   object-contain"
          />  
                <div className="flex justify-between text-center mb-12 mt-8"> 
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Catchy Tagline  
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Catchy Tagline - Turning Ideas into Impact – Real Stories, Real Results.
          </p>
        </div>
      </div>
      </section>
    <div className="min-h-screen bg-gray-50 pb-8 mt-12">
      <div className="container mx-auto px-4">
           
        

        {/* Filters and Search */}
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCaseStudies.map((study) => (
            <div key={study.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover" /> */}
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

        {/* Newsletter Signup */}
        {/* <div className="bg-gray-100 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign up for our newsletter</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By clicking Sign Up you&apos;re confirming that you agree with our Terms and Conditions.
            </p>
          </div>
        </div> */}
      </div>
        </div>
      </main>
  );
}