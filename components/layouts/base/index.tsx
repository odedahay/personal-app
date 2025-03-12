import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Footer, Header, NavBar } from "@/components/common";
import { FunctionComponent, PropsWithChildren } from "react";

const BaseLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8 pb-10">
                <NavBar />
                <Header />
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BaseLayout;