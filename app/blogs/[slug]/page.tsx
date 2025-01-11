// "use client";
import { Metadata } from 'next';
import { getBlogBySlug, getBlogsSlug, getBlogBySlugWithMarkdown } from '@/lib/blogs';
import { Blog } from '@/interfaces/Blog';
import { BlogHeader } from '@/components/blogs';
import { PageLayout } from '@/components/layouts';

// type Props = {params: { slug: string }; };
type Params = Promise<{ slug: string}>

// Dynamically generate static paths
// export const generateStaticParams = async () => {
//   const slugs: string[] = await getBlogsSlug();
//   return slugs.map((slug) => ({
//     slug,
//   }));
// };

// export const metadata: Metadata = {
//   title: 'Blog'
// };

const BlogDetail = async (props: { params: Params }) => {
  const { slug } = await props.params;
  const blog =  await getBlogBySlug(slug);
  const blogHTML = blog ? await getBlogBySlugWithMarkdown(slug) : null;


  // if (blog) {
  //   metadata.title = blog.title;
  // } else {
  //   return (
  //     <PageLayout>
  //       <div className="text-center mt-10 text-xl">Blog not found.</div>
  //     </PageLayout>
  //   );
  // }

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