import type { NextPage } from "next";
import Head from "next/head";

import { Footer, NavBar } from "@/components/common";
import { FunctionComponent, PropsWithChildren } from "react";


const PageLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 space-y-8 md:px-6 pb-10">
                <NavBar />
                <div className="mx-auto max-w-2xl py-4 md:py-8 md:max-w-7xl">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageLayout;