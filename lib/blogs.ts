import { join } from "path";
import { Blog } from "@/interfaces/Blog";
import { getAllItems, getDir, getFileNames, getItemInPath, markdownToHTML } from "./md";


const BLOG_DIR = getDir('/content/blogs');


const getBlogFileNames = () => { return getFileNames(BLOG_DIR); }

// const getBlogsSlug = () =>{
//     return getBlogFileNames().map(filename => filename.replace(/\.md$/, ''));
// }

const getBlogsSlug = async (): Promise<string[]> => {
  try {
    const fileNames = getBlogFileNames();
    return fileNames.map((filename) => filename.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
};

const getBlog = (filename: string): Blog => {
  const blog = getItemInPath(join(BLOG_DIR, filename)) as Blog;
  blog.slug = filename.replace(/\.md$/, '');
 
  return blog;
}

const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
  try {
    const fileName = `${slug}.md`;
    const blog = getBlog(fileName);
    return blog || null;
  } catch (error) {
    console.error(`Error fetching blog with slug "${slug}":`, error);
    return null;
  }
};

// const getBlogBySlugWithMarkdown = async (slug: string): Promise<Blog | null> => {
//   const blog = await getBlogBySlug(slug);
//   if (blog) {
//     blog.content = await markdownToHTML(blog.content);
//   }
//   return blog;
// }

// const getBlogs = (): Blog[] => {
//   const names = getBlogFileNames();
//   return getAllItems(names, getBlog) as Blog[];
// }

const getBlogBySlugWithMarkdown = async (slug: string): Promise<Blog | null> => {
  try {
    const blog = await getBlogBySlug(slug);
    if (blog) {
      blog.content = await markdownToHTML(blog.content);
    }
    return blog;
  } catch (error) {
    console.error(`Error converting markdown for blog with slug "${slug}":`, error);
    return null;
  }
};

const getBlogs = async (): Promise<Blog[]> => {
  try {
    const fileNames = getBlogFileNames();
    const blogs = fileNames.map((fileName) => getBlog(fileName));
    blogs.sort((blog1, blog2) => new Date(blog2.date).getTime() - new Date(blog1.date).getTime());
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};


export {
  getBlogs,
  getBlogsSlug,
  getBlogBySlug,
  getBlogBySlugWithMarkdown
}