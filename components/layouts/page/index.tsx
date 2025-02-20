import type { NextPage } from "next";
import Head from "next/head";

import { Footer, NavBar } from "@/components/common";
import { FunctionComponent, PropsWithChildren } from "react";


const PageLayout:FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8 pb-10">
          
                <div className="bg-white pb-8 lg:w-full lg:max-w-7xl">
                    <NavBar />
                </div>

                <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageLayout;