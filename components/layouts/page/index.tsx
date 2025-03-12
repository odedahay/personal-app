import type { NextPage } from "next";
import Head from "next/head";

import { Footer, NavBar } from "@/components/common";
import { FunctionComponent, PropsWithChildren } from "react";


const PageLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8 pb-10">
                <NavBar />
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageLayout;