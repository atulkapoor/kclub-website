import jobs from "../../data/jobs";

interface JobProps {
  params: { slug: string };
}

export default function JobPage({ params }: JobProps) {
  const job = jobs.find((job) => job.id === params.slug); 

  if (!job) {
    return <div className="p-6 text-center text-red-500">Job not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-4">
        📍 {job.location} | {job.contractType}
      </p>
      <p className="mb-6">{job.details}</p>
      <p className="mb-6">{job.conclusion}</p>
      <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Apply Now
      </button>
    </div>
  );
}
