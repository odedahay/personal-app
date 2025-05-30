'use client';
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";

import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from "./navigation";
import { ContentSearch } from "@/components/search";


const NavBar = () => {
    const pathname = usePathname()
    return (
        <>
            <Popover>
                <div className="max-w-7xl py-6">
                    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
                        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <Link href="/">
                                    <img className="h-10 w-auto" src="/images/roddahay-logo.svg" alt="Rod Dahay" />

                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                    </PopoverButton>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                            {navigation.map((item) => (
                                <Link 
                                key={item.name} 
                                href={item.href} 
                                className={`px-3 py-2 rounded-md text-lg font-medium ${
                                    pathname?.startsWith(item.href)
                                      ? "bg-pink-400 text-white"
                                      : "text-gray-900 hover:bg-gray-200"
                                  }`}
                                >
                                        {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden md:block">
                            <ContentSearch />
                        </div>
                    </nav>
                    {/* <div className="border-b border-gray-200 p-1 w-full inline-block"></div> */}
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <PopoverPanel
                        focus
                        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div className='pb-7'>
                                    <img className="h-10 w-auto" src="/images/roddahay-logo.svg" alt="Rod Dahay" />
                                </div>
                                <div className="-mr-2">
                                    <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close main menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div className="space-y-1 px-5 pt-6 pb-3">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} className={`-m-3 mb-4 flex items-center rounded-md p-3 hover:bg-gray-50 
                                        ${pathname?.startsWith(item.href) ? 
                                            "bg-pink-400 text-white" : 
                                            "text-gray-900"}`}>
                                        
                                            {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="px-4 pb-8 mb-8 pt-4">
                                <ContentSearch />
                            </div>
                        </div>
                    </PopoverPanel>
                </Transition>
            </Popover>
            {/* NAVIGATION END */}
        </>
    )
}

export default NavBar