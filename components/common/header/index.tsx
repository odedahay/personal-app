import Image from 'next/image';
import Link from "next/link";

const Header = () => {
    return (
       
        <section className="bg-white dark:bg-gray-900 lg:px-6 ">
            <div className="grid max-w-screen-xl px-4 py-0 mx-auto lg:gap-0 xl:gap-0 lg:py-4 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1> */}

                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">
                     <span className="block xl:inline">My</span>{' '}
                     <span className="block text-pink-400 xl:inline">Creative Corner</span>
                </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    I'm Rod Dahay, a passionate UI designer and developer. Dive into my portfolio to discover my work experience and explore insightful blogs on the latest in tech.</p>
                    
                    <Link href="/blogs/category/Portfolio" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-pink-400  hover:bg-pink-600 md:px-10 
                    md:text-lg">
                        My Portfolio
                    </Link>
                 

                    <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                       My Contact
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        priority
                        width={520}
                        height={420}
                        alt="Hero"
                        src="/images/icon-home.png"
                        sizes="100%"
                    />

                </div>
            </div>
        </section>
    )
}

export default Header;