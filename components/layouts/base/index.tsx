import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Footer, Header, NavBar } from "@/components/common";
import { FunctionComponent, PropsWithChildren } from "react";

const BaseLayout:FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8  pb-10">
            <NavBar />
            <Header />

                {/* <div className="relative">
                    <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                       

                    </div> */}
                    {/* <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <Image
                            priority
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt="Header"
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1369&q=60"
                        />
                    </div> */}
                {/* </div> */}

                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BaseLayout;