// app/case_studies/[slug]/page.tsx
import Link from 'next/link';
import { getCaseStudyBySlug, getAllCaseStudies } from '../../data/studies';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  
  if (!study) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link href="/case_studies" className="text-blue-600 hover:underline">Back to Case Studies</Link>
        </div>
      </div>
    );
  }

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">

    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link href="/case_studies" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Case Studies
        </Link>

        {/* Case Study Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-600 text-sm font-medium">{study.tagline}</span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{study.category}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{study.title}</h1>
          <p className="text-black text-lg">{study.excerpt}</p>
        </div>

        {/* Featured Image */}
        {/* <img 
          src={study.imageUrl} 
          alt={study.title} 
          className="w-full h-64 object-cover rounded-lg mb-8"
        /> */}

        {/* Case Study Content */}
        <article 
          className="prose max-w-none bg-white text-black  p-8 rounded-lg shadow-md"
          dangerouslySetInnerHTML={{ __html: study.content }}
        />

        {/* Newsletter Signup */}
        <div className="bg-gray-100 rounded-lg p-8 mt-12">
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
        </div>
      </div>
    </div></main>
  );
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

// Set page title and metadata
export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  
  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }
  
  return {
    title: study.title,
    description: study.excerpt,
  };
}