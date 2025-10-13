
  import { jobs } from "../../data/jobs";
  import Image from "next/image";
  import { notFound } from "next/navigation";
  
  type PageProps = {
    params: Promise<{
      slug: string;
    }>;
  };
  
  export async function generateStaticParams() {
    return jobs.map((p) => ({ slug: p.slug }));
  }
  
  export default async function JobDetail({ params }: PageProps) {
    const { slug } = await params;
  
    const job = jobs.find((p) => p.slug === slug);
  
    if (!job) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="container-fluid mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-30">
        <div className="max-w-4xl mx-auto p-6">
          {/* Example if you later add an image:
          <Image
            src={job.image}
            alt={job.title}
            width={800}
            height={400}
            className="rounded-lg mb-6"
          /> */}

          <h1 className="text-3xl font-bold">{job.title}</h1>
          <span className="inline-block bg-gray-200 text-sm px-2 py-1 rounded mt-2">
            {job.department}
          </span>

          <p className="mt-4 text-gray-700">{job.description}</p>

          <div className="flex gap-6 mt-4 text-gray-600">
            <span>📍 {job.location}</span>
            <span>⏱ {job.type}</span>
          </div>

          {/* Example link if you add an apply page:
          <Link
            href={`/careers/${slug}/apply`}
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Apply Now
          </Link>
          */}
        </div>
      </section>
    </main>
  );
}