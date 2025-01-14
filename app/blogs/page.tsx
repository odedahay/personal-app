import { BlogList } from "@/components/blogs";
import { PageLayout } from "@/components/layouts";
import { getBlogs } from "@/lib/blogs";
import Link from "next/link";

// Generate static paths for all unique blog categories
export const generateStaticParams = async () => {
  // Fetch all blogs
  const blogs = await getBlogs();

  // Extract unique categories
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  // Return an array of paths for all categories (and the "All" filter for `/blogs`)
  return categories.map((category) => ({ category })) || [{ category: "" }];
};

type SearchParams = { category?: string }; // Simplified type for searchParams

const BlogsPage = async (props: { searchParams: SearchParams }) => {
  // Extract category from searchParams
  const selectedCategory = props.searchParams.category || "";

  // Fetch all blogs
  const blogs = await getBlogs();

  // Filter blogs based on the selected category
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  // Extract unique categories for filtering
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <PageLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Blogs</h2>

      {/* Category Filter Buttons */}
      <div className="mb-4">
        <span className="font-semibold">Filter by Category:</span>
        <ul className="flex gap-2 mt-2">
          {/* All Categories */}
          <li>
            <Link
              href="/blogs"
              className={`px-3 py-1 rounded-lg ${
                !selectedCategory ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              All
            </Link>
          </li>

          {/* Individual Categories */}
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blogs?category=${category}`}
                className={`px-3 py-1 rounded-lg ${
                  selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Blog List */}
      <BlogList blogs={filteredBlogs} />
    </PageLayout>
  );
};

export default BlogsPage;