import { Blog } from "@/interfaces/Blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    blog: Blog
}

const BlogHeader: React.FC<Props> = ({ blog }) => {
    return (
        <div className="blog-detail-header">
          
          <h1 className="font-bold text-4xl mb-1">{blog.title}</h1>
          <div className="flex flex-row justify-between mb-2">
            <div className="flex items-center">
              {/* <div className="flex-shrink-0">
                  <span className="sr-only">{blog.author}</span>
                  <div className="relative h-10 w-10 !mb-0">
                    <Image
                      priority
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                      src={blog.authorImage} alt={blog.author}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    />
                  </div>
              </div> */}
              <div className="ml-0 flex my-3">
                <p className="text-sm font-medium text-gray-900 !mb-0 mr-2">
                  <Link href="/about" className="hover:underline">
                    {blog.author}
                  </Link>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500 mr-2">
                  <p>|</p>
                </div>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={blog.date}>{blog.date}</time>
                </div>
              </div>
            </div>
            <div className="flex self-end">
              {/* Social Links Here */}
            </div>
          </div>
          <h2 className="blog-detail-header-subtitle mb-2 text-xl text-gray-600 mb-5">
            {blog.description}
          </h2>
          
          <div className="h-96 bg-black mx-auto w-full relative">
            <Image
              priority
              fill
              style={{ objectFit: "cover" }}
              src={blog.coverImage} alt={blog.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
          </div>
        </div>
    );
}
 
export default BlogHeader;