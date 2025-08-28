// app/blog/[slug]/page.tsx
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../data/blog';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}
// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = getAllPosts();
    
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }
  
  // Set page title and metadata
  export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    
    if (!post) {
      return {
        title: "Post Not Found",
      };
    }
    
    return {
      title: post.title,
      description: post.introduction?.substring(0, 160),
    };
  }

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Posts
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-blue-600 font-medium mb-4">
            <span>{post.category}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 gap-2">
            <div>
              <span className="font-medium">Written by</span> {post.author}
            </div>
            <div className="sm:mx-2 hidden sm:block">•</div>
            <div>
              <span className="font-medium">Published on</span> {post.publishDate}
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 whitespace-pre-line">{post.introduction}</p>
        </div>

        {/* Article Image with Caption */}
        {/* <figure className="mb-8">
          <img 
            src={post.imageUrl || "/api/placeholder/800/400"} 
            alt={post.imageCaption} 
            className="w-full h-64 object-cover rounded-lg"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            {post.imageCaption}
          </figcaption>
        </figure> */}

        {/* Middle Section */}
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 whitespace-pre-line">{post.middleSection}</p>
        </div>

        {/* Quote */}
        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-8 text-xl">
          {post.quote}
        </blockquote>

        {/* Continuation */}
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 whitespace-pre-line">{post.continuation}</p>
        </div>

        {/* Conclusion */}
        <div className="prose max-w-none mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 whitespace-pre-line">{post.conclusion}</p>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-100 rounded-lg p-8 my-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to newsletter</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to receive the latest blog posts to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing you agree to with our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Related posts</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
                View all
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center text-sm text-blue-600 font-medium mb-2">
                    <span>{relatedPost.category}</span>
                    <span className="mx-2">•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedPost.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                  <Link 
                    href={`/blog/${relatedPost.slug}`} 
                    className="text-blue-600 font-medium hover:text-blue-800"
                  >
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

