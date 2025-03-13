"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  categories: string[];
};

const CategoryList: React.FC<Props> = ({ categories }) => {
  const pathname = usePathname();

  // Define the custom order of categories
  const customOrder = ['Design', 'Portfolio', 'Tech', 'Others'];

  // Sort categories based on the custom order
  const sortedCategories = categories.sort((a, b) => customOrder.indexOf(a) - customOrder.indexOf(b));

  return (
    <div className="mb-12">
      <span className="font-semibold">Categories:</span>
      <ul className="flex flex-wrap gap-4 mt-2">
        {/* All Blogs */}
        <li>
          <Link
            href="/blogs"
            className={`px-4 py-2 rounded-lg ${
              pathname === "/blogs" ? "bg-pink-400 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            All
          </Link>
        </li>

        {/* Individual Categories */}
        {sortedCategories.map((category) => (
          <li key={category}>
            <Link
              href={`/blogs/category/${category}`}
              className={`px-4 py-2 rounded-lg ${
                pathname === `/blogs/category/${category}` ? "bg-pink-400 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
