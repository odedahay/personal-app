import { Metadata } from 'next';
import { getBlogBySlug, getBlogsSlug, getBlogBySlugWithMarkdown } from '@/lib/blogs';
import { Blog } from '@/interfaces/Blog';
import { BlogHeader } from '@/components/blogs';
import { PageLayout } from '@/components/layouts';

// Correctly type `Props` for dynamic routes
type Props = Promise<{ slug: string }>;

// Pre-generate all static paths for blog slugs
export const generateStaticParams = async () => {
  const slugs: string[] = await getBlogsSlug(); // Ensure this function returns an array of valid slugs
  return slugs.map((slug) => ({ slug })); // Returns array of params: [{ slug: 'example-slug' }]
};

// Dynamically generate metadata for each blog
export const generateMetadata = async (props: { params: Props }): Promise<Metadata> => {
  const { slug } = await props.params;
  const blog = await getBlogBySlug(slug); // Fetch the blog by slug
  return {
    title: blog ? blog.title : "Blog's page not found", // Dynamically set title
  };
};

// Blog detail page
const BlogDetail = async (props: { params: Props }) => {
  const { slug } = await props.params; // Destructure slug from params
  const blog: Blog | null = await getBlogBySlug(slug); // Fetch blog data by slug
  const blogHTML = blog ? await getBlogBySlugWithMarkdown(slug) : null; // Fetch blog HTML content

  // Handle case where blog is not found
  if (!blog) {
    return (
      <PageLayout>
        <div className="text-center mt-10 text-xl">Blog's page not found.</div>
      </PageLayout>
    );
  }

  // Render the blog content
  return (
    <PageLayout>
      <div className="w-md m-auto md:w-4/5">
        <BlogHeader blog={blog} />
        <article className="prose lg:prose-lg markdown-image-80 max-w-full">
          {/* Render blog content as HTML */}
          <div dangerouslySetInnerHTML={{ __html: blogHTML?.content || '' }} />
        </article>
        <div className="flex justify-center mt-8">
  <a
    href="/blogs"
    className="inline-block px-4 py-2 text-lg bg-pink-400 text-white rounded-lg font-medium hover:bg-gray-200 hover:text-black transition"    
  >
    <div className='flex items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg> 
    Back to Blog List
    </div>
    
  </a>
</div>
      </div>
    </PageLayout>
  );
};

export default BlogDetail;