"use client";
 import Link from "next/link";
import jobs from "../data/jobs";
import { useState } from "react";
      
const categories = ["View all", "Category one", "Category two", "Category three",];

export default function Careers() {

  const [selectedCategory, setSelectedCategory] = useState("View all");
  const [search, setSearch] = useState("");

  // Filter jobs based on category + search
  const filteredJobs = jobs.filter((job) => {
    const matchesCategory =
      selectedCategory === "View all" || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase()) ||
      job.type.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">

          Build Your Future With KClub
        </h1>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          At KClub, we believe careers grow when people do. 
          Be part of a culture that values creativity, collaboration,<br /> and impact.
        </p>

        {/* Banner */}
        <div className="bg-gray-200 w-full h-[400px] mt-10 flex items-center justify-center rounded-md">
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
          <h2 className="text-lg font-semibold">Careers Page</h2>
        </div>
      </div>
      </div>
      </section>
      <div className="max-w-6xl mx-2 p-6">
      {/* Header */}
      <h1 className="text-3xl text-black font-bold mb-2">Open Positions</h1>
      <p className="mb-6 text-black">
        Explore opportunities across roles and join a team where every position contributes to shaping the future of digital transformation.
      </p>

      {/* Categories + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Categories */}
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-indigo-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border text-black rounded-md px-4 py-2 w-64"
          />
          <button
            onClick={() => setSearch("")}
            className="bg-indigo-900 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-lg p-6 shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-black">{job.title}</h2>
                <span className="text-sm text-black bg-gray-200 px-2 py-1 rounded">
                  {job.department}
                </span>
                <p className="text-gray-600 mt-2">
                  {job.description.slice(0, 80)}...
                </p>
                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span>📍 {job.location}</span>
                  <span>⏱ {job.type}</span>
                </div>
              </div>
              <Link
                href={`/careers/${job.slug}`}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Apply Now →
              </Link>
            </div>
          ))
        ) : (
          <div className="text-gray-600">No jobs found.</div>
        )}
      </div>
    </div>
       
          {/* <div className="max-w-5xl mx-auto py-6">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
          Open Positions</h1>
            <p className="mb-6 text-black text-sm ">
              Explore opportunities across roles and join a team where every position contributes to shaping the future of digital transformation.
            </p>
      
            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="border p-4 rounded-lg shadow-sm flex justify-between items-center"
                >
                  <div>
                  <h2 className="text-xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
                  {job.title}</h2>
                    <p className="text-gray-500">{job.description}</p>
                    <p className="text-sm text-gray-400">
                      📍 {job.location} | {job.contractType}
                    </p>
                  </div>
                  <Link
                    href={`/careers/${job.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>  */}
          </main>
  );
}
