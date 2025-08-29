import jobs from "../../data/jobs";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ✅ Static paths generate
export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.id, // ya slugify(job.title) bhi kar sakte ho SEO ke liye
  }));
}

// ✅ Job detail page
export default async function JobPage({ params }: PageProps) {
  const { slug } = await params; // params ko await kiya

  const job = jobs.find((job) => job.id === slug);

  if (!job) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">
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
    </div></main>
  );
}
