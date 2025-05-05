import type { NextPage } from "next";
import Link from "next/link";
import { BlogList } from "@/components/blogs";
import { PortfolioList } from "@/components/portfolios";
import { BaseLayout } from "@/components/layouts";
import { getBlogs } from "@/lib/blogs";
import { saveSearchData } from "@/lib/md";
import { getPortfolios } from "@/lib/portfolios";

const Home: NextPage = async () => {

  const blogs = await getBlogs();
  const portfolios = await getPortfolios();

  const content = {
    blogs,
    portfolios
  }

  saveSearchData(content);

  // Limit to 4 blogs
  const limitedBlogs = blogs.slice(0, 8);

  // Filter portfolios from blogs based on category "Portfolio"
  const portfolioBlogs = blogs.filter(blog => blog.category === "Portfolio");

  // Limit to 4 portfolios
  // const limitedPortfolios = portfolios.slice(0, 4);
  //const limitedPortfolios = portfolioBlogs.slice(0, 4);

  return (
    <BaseLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Newest Blogs
        <Link href="/blogs" className='text-sm ml-1 text-pink-500'>
            (See All)
        </Link>
      </h2>
      <div className="mb-12">
        <BlogList blogs={limitedBlogs}/>
      </div>
      <div className="flex flex-row justify-between items-center">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Portfolios
          <Link href="/blogs/category/Portfolio" className='text-sm ml-1 text-pink-500'>
              (See All)
          </Link>
        </h2> */}
         
         <Link href="/blogs" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-pink-400  hover:bg-pink-600 md:px-10 
          md:text-lg" target="_blank">
              Explore All Design Blog Articles
          </Link>

        <Link href="https://odedahay.github.io/assets/rodelio_dahay_portfolio.pdf" target="_blank" className='text-pink-500 rounded hover:text-white px-3 py-[5px] hover:bg-pink-700 text-sm font-bold '>
              View My Old Portfolio
          </Link>
      </div>
      {/* <PortfolioList portfolios={limitedPortfolios} /> */}
      {/* <BlogList blogs={limitedPortfolios} /> */}
    </BaseLayout>
  )
}

export default Home