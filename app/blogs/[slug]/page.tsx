import { Metadata } from 'next';
import { getBlogBySlug, getBlogsSlug, getBlogBySlugWithMarkdown } from '@/lib/blogs';
import { Blog } from '@/interfaces/Blog';
import { BlogHeader } from '@/components/blogs';
import { PageLayout } from '@/components/layouts';

interface BlogParams {
  slug: string;
}

// Dynamically generate static paths
export const generateStaticParams = async () => {
  const slugs: string[] = await getBlogsSlug();
  return slugs.map((slug) => ({
    slug,
  }));
};

// Generate metadata dynamically
export const generateMetadata = async ({ params }: { params: BlogParams }): Promise<Metadata> => {
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

const BlogDetail = async ({ params }: { params: BlogParams }) => {
  const { slug } = await params;
  const blog: Blog | null = await getBlogBySlug(slug);
  const blogHTML = blog ? await getBlogBySlugWithMarkdown(slug) : null;

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