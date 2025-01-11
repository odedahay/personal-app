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

  // Limit to 4 blogs and 4 portfolios
  const limitedBlogs = blogs.slice(0, 4);
  const limitedPortfolios = portfolios.slice(0, 4);

  return (
    <BaseLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Newest Blogs
        <Link legacyBehavior href="/blogs">
          <a className='text-sm ml-1 text-indigo-600'>
            (See All)
          </a>
        </Link>
      </h2>

      <BlogList blogs={limitedBlogs} />
      <br></br>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Portfolios
        <Link legacyBehavior href="/portfolios">
          <a className='text-sm ml-1 text-indigo-600'>
            (See All)
          </a>
        </Link>
      </h2>
      <PortfolioList portfolios={limitedPortfolios} />
    </BaseLayout>
  )
}

export default Home