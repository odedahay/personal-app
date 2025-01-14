import { BlogList } from "@/components/blogs";
import { PageLayout } from "@/components/layouts";
import { getBlogs } from "@/lib/blogs";
import Link from "next/link";

const BlogsPage = async ({ searchParams }: { searchParams: { category?: string } }) => {
    // Get the selected category from searchParams
    const selectedCategory = searchParams.category || "";

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