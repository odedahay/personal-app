
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/interfaces/Blog";
import { shortify } from "@/lib/client/utils";

type Props = {
    blog: Blog
}

export const BlogItem = ({blog}: Props)=> {
//export const BlogItem:React.FC<Props> = ({ blog }) => {
    return (
        <div key={blog.slug} className="group">
            <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                <Link legacyBehavior href={`/blogs/${blog.slug}`}>
                    <a>
                        <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                            <Image
                                priority
                                fill
                                style={{ objectFit: "cover" }}
                                src={blog.coverImage}
                                className="rounded-lg hover:cursor-pointer"
                                alt={blog.title}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </a>
                </Link>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                        <span aria-hidden="true" className="inset-0" />
                        {shortify(blog.title)}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {shortify(blog.description)}
                    </p>
                </div>
            </div>
            <Link
                legacyBehavior
                href={`/blogs/${blog.slug}`}>
                <a className="text-sm font-bold text-gray-700">
                    Read More
                </a>
            </Link>
        </div>
    )
}