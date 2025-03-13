import { BlogList } from "@/components/blogs";
import { PageLayout } from "@/components/layouts";
import { getBlogs } from "@/lib/blogs";
import Link from "next/link";
import CategoryList from "@/components/blogs/CategoryList";

// type Params = {
//   params: { category: string };
// };

type Params = Promise<{ category: string }>;

export const generateStaticParams = async () => {
    const blogs = await getBlogs();
    const categories = [...new Set(blogs.map((blog) => blog.category))];
  
    return categories.map((category) => ({
      category,
    }));
  };

const CategoryPage = async (props: { params : Params}) => {
  const { category } = await props.params;

  // Fetch all blogs
  const blogs = await getBlogs();

  // Filter blogs by category
  const filteredBlogs = blogs.filter((blog) => blog.category === category);

  // Extract unique categories for filtering
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <PageLayout>
       <CategoryList categories={categories} />

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        "{category}" Category 
        {/* <Link href="/blogs" className='text-sm ml-1 text-pink-400'>
            (Back to All Blogs)
        </Link> */}
      </h2>

      {/* Blog List */}
      <BlogList blogs={filteredBlogs} />
    </PageLayout>
  );
};

export default CategoryPage;