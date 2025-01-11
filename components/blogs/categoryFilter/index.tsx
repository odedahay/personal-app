// components/CategoryFilter.tsx
import { ChangeEvent } from 'react';

type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter: React.FC<Props> = ({ categories, selectedCategory, onCategoryChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        Filter by Category
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;