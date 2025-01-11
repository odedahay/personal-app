import { join } from "path";
import { Portfolio } from "@/interfaces/Portfolio";
import { getAllItems, getDir, getFileNames, getItemInPath, markdownToHTML } from "./md";


const PORTFOLIO_DIR = getDir("/content/portfolios");

const getPortfoliosFileNames = () => {
  return getFileNames(PORTFOLIO_DIR);
}
const getPortfolio = (fileName: string): Portfolio => {
  const portfolio = getItemInPath(join(PORTFOLIO_DIR, fileName)) as Portfolio;
  portfolio.slug = fileName.replace(/\.md$/, "");
  return portfolio;
}

const getPortfolios = (): Portfolio[] => {
  const names = getPortfoliosFileNames();
  return getAllItems(names, getPortfolio) as Portfolio[];
}


const getPortfolioBySlug = async (slug: string): Promise<Portfolio | null> => {
  try {
    const fileName = `${slug}.md`;
    const portfolio = getPortfolio(fileName);
    return portfolio || null;
  } catch (error) {
    console.error(`Error fetching portfolio with slug "${slug}":`, error);
    return null;
  }
};

const getPorfolioBySlugWithMarkdown = async (slug: string): Promise<Portfolio | null> => {
  const portfolio = await getPortfolioBySlug(slug);
  if (portfolio) {
    portfolio.content = await markdownToHTML(portfolio.content);
  }
  return portfolio;
}

export { getPortfolios, getPorfolioBySlugWithMarkdown, getPortfolioBySlug };