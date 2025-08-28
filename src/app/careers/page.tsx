"use client";
 import Link from "next/link";
      import jobs from "../data/jobs";
export default function Careers() {
    return (
      <main>
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Build Your Future With KClub
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          At KClub, we believe careers grow when people do. 
          Be part of a culture that values curiosity, collaboration, and growth.
        </p>

        {/* Banner */}
        <div className="mt-10">
          <div className="relative bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            {/* Placeholder image */}
            <div className="h-48 md:h-72 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 19V5a2 2 0 0 0-2-2H5a2 
                  2 0 0 0-2 2v14a2 2 0 0 
                  0 2 2h14a2 2 0 0 
                  0 2-2zM7.5 11.5l2.5 3.01L13.5 
                  10l4.5 6H6l1.5-2.5z" />
              </svg>
            </div>

            {/* Text below image */}
            <div className="py-4 bg-white border-t text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Careers Page
              </h3>
            </div>
          </div>
        </div>
      </div>
      </section>
     
       
          <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Open Positions</h1>
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
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-gray-500">{job.description}</p>
                    <p className="text-sm text-gray-400">
                      📍 {job.location} | {job.contractType}
                    </p>
                  </div>
                  <Link
                    href={`/career/${job.id}`}
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
