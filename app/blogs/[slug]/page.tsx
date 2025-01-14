import { Metadata } from 'next';
import { getBlogBySlug, getBlogsSlug, getBlogBySlugWithMarkdown } from '@/lib/blogs';
import { Blog } from '@/interfaces/Blog';
import { BlogHeader } from '@/components/blogs';
import { PageLayout } from '@/components/layouts';

type Props = { params: { slug: string } };

// Pre-generate all static paths
export const generateStaticParams = async () => {
  const slugs: string[] = await getBlogsSlug();
  return slugs.map((slug) => ({ slug }));
};

// Generate dynamic metadata
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const blog = await getBlogBySlug(params.slug);
  return {
    title: blog ? blog.title : "Blog's page not found",
  };
};

const BlogDetail = async ({ params }: Props) => {
  const { slug } = params;
  const blog: Blog | null = await getBlogBySlug(slug);
  const blogHTML = blog ? await getBlogBySlugWithMarkdown(slug) : null;

  if (!blog) {
    return (
      <PageLayout>
        <div className="text-center mt-10 text-xl">Blog's page not found.</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="w-2/3 m-auto">
        <BlogHeader blog={blog} />
        <article className="prose lg:prose-lg markdown-image-50">
          <div dangerouslySetInnerHTML={{ __html: blogHTML?.content || '' }} />
        </article>
      </div>
    </PageLayout>
  );
};

export default BlogDetail;