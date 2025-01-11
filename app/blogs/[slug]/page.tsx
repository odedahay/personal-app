import { Metadata } from 'next';
import { getBlogBySlug, getBlogsSlug, getBlogBySlugWithMarkdown } from '@/lib/blogs';
import { Blog } from '@/interfaces/Blog';
import { BlogHeader } from '@/components/blogs';
import { PageLayout } from '@/components/layouts';


interface Params {
  slug: string;
}

// Generate static paths for dynamic routing
export const generateStaticParams = async () => {
  const slugs: string[] = await getBlogsSlug();
  return slugs.map((slug) => ({
    slug,
  }));
};

// Generate metadata dynamically
export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.title,
  };
};

const BlogDetail = async ({ params }: { params: Params }) => {
  const { slug } = params;

  // Fetch the blog content
  const blog: Blog | null = await getBlogBySlug(slug);
  const blogHTML = blog ? await getBlogBySlugWithMarkdown(slug) : null;

  // If the blog doesn't exist, show a "not found" message
  if (!blog) {
    return (
      <PageLayout>
        <div className="text-center mt-10 text-xl">Blog not found.</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="w-2/3 m-auto">
        <BlogHeader blog={blog} />
        <article className="prose lg:prose-lg markdown-image-50">
          <div dangerouslySetInnerHTML={{__html: blogHTML?.content || ''}} />
        </article>
      </div>
    </PageLayout>
  );
};

export default BlogDetail;