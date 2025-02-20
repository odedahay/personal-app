import Image from 'next/image';
import Link from "next/link";

const Header = () => {
    return (
        // <main classNameName="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        //     <div classNameName="sm:text-center lg:text-left">
        //         <h1 classNameName="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        //             <span classNameName="block xl:inline">Welcome to my</span>{' '}
        //             <span classNameName="block text-indigo-600 xl:inline">little space</span>
        //         </h1>
        //         <p classNameName="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
        //         My name is Rod Dahay, a UI designer and developer. Feel free to explore my work experience and blogs on tech-related topics.
        //         </p>
        //         <div classNameName="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        //             <div classNameName="rounded-md shadow">
        //                 <a
        //                     href="#"
        //                     classNameName="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
        //                 >
        //                     My Portfolio
        //                 </a>
        //             </div>
        //             <div classNameName="mt-3 sm:mt-0 sm:ml-3">
        //                 <a
        //                     href="#"
        //                     classNameName="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
        //                 >
        //                     CV
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </main>
        <section className="bg-white dark:bg-gray-900 lg:px-6 ">
            <div className="grid max-w-screen-xl px-4 py-0 mx-auto lg:gap-0 xl:gap-0 lg:py-4 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1> */}

                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">
                     <span className="block xl:inline">Welcome to my</span>{' '}
                     <span className="block text-indigo-600 xl:inline">little space</span>
                </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        My name is Rod Dahay, a UI designer and developer. Feel free to explore my work experience and blogs on tech-related topics.</p>
                    
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600  hover:bg-indigo-700 md:px-10 md:text-lg">
                        My Portfolio
                    </a>
                 

                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                       My Contact
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        priority
                        width={520}
                        height={390}
                        alt="Hero"
                        src="/images/phone-mockup.png"
                        sizes="100%"
                    />

                </div>
            </div>
        </section>
    )
}

export default Header;