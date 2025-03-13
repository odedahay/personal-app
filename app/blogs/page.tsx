import { BlogList } from "@/components/blogs";
import { PageLayout } from "@/components/layouts";
import { getBlogs } from "@/lib/blogs";
import CategoryList from "@/components/blogs/CategoryList";

const BlogsPage = async () => {
  // Fetch all blogs
  const blogs = await getBlogs();

  // Extract unique categories for filtering
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <PageLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">All Blogs</h2>

      {/* Category List */}
      <CategoryList categories={categories} />

      {/* Blog List */}
      <BlogList blogs={blogs} />
    </PageLayout>
  );
};

export default BlogsPage;