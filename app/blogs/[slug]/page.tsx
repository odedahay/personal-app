import { Metadata } from 'next';
import { getBlogBySlug, getBlogsSlug, getBlogBySlugWithMarkdown } from '@/lib/blogs';
import { Blog } from '@/interfaces/Blog';
import { BlogHeader } from '@/components/blogs';
import { PageLayout } from '@/components/layouts';

// Correctly type `Props` for dynamic routes
type Props = { params: { slug: string } };

// Pre-generate all static paths for blog slugs
export const generateStaticParams = async () => {
  const slugs: string[] = await getBlogsSlug(); // Ensure this function returns an array of valid slugs
  return slugs.map((slug) => ({ slug })); // Returns array of params: [{ slug: 'example-slug' }]
};

// Dynamically generate metadata for each blog
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const blog = await getBlogBySlug(params.slug); // Fetch the blog by slug
  return {
    title: blog ? blog.title : "Blog's page not found", // Dynamically set title
  };
};

// Blog detail page
const BlogDetail = async ({ params }: Props) => {
  const { slug } = params; // Destructure slug from params
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
      <div className="w-2/3 m-auto">
        <BlogHeader blog={blog} />
        <article className="prose lg:prose-lg markdown-image-50">
          {/* Render blog content as HTML */}
          <div dangerouslySetInnerHTML={{ __html: blogHTML?.content || '' }} />
        </article>
      </div>
    </PageLayout>
  );
};

export default BlogDetail;