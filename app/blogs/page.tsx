import { BlogList } from "@/components/blogs";
import { PageLayout } from "@/components/layouts";
import { getBlogs } from "@/lib/blogs";
import Link from "next/link";

const BlogsPage = async () => {
  // Fetch all blogs
  const blogs = await getBlogs();

  // Extract unique categories for filtering
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  // Define the custom order of categories
  const customOrder = ['Design', 'Portfolio', 'Tech', 'Others'];

  // Sort categories based on the custom order
  const sortedCategories = categories.sort((a, b) => customOrder.indexOf(a) - customOrder.indexOf(b));

  return (
    <PageLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">All Blogs</h2>

      {/* Category List */}
      <div className="mb-12">
        <span className="font-semibold">Categories:</span>
        <ul className="flex flex-wrap gap-4 mt-2">
          {/* All Blogs */}
          <li>
            <Link
              href="/blogs"
              className="px-4 py-2 rounded-lg bg-pink-400 text-white hover:bg-pink-600"
            >
              All
            </Link>
          </li>

          {/* Individual Categories */}
          {/* {categories.map((category) => ( */}
          {sortedCategories.map((category) => (
            <li key={category}>
              <Link
                href={`/blogs/category/${category}`}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Blog List */}
      <BlogList blogs={blogs} />
    </PageLayout>
  );
};

export default BlogsPage;