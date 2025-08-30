"use client";
 import Link from "next/link";
      import jobs from "../data/jobs";
export default function Careers() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">

          Build Your Future With KClub
        </h1>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          At KClub, we believe careers grow when people do. 
          Be part of a culture that values curiosity, collaboration, and growth.
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
     
       
          <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
          Open Positions</h1>
            <p className="mb-6 text-gray-600">
              Explore opportunities across roles and join a team where innovation contributes to shaping the future.
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
          </div> 
          </main>
  );
}
