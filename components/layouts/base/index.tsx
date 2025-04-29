import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Footer, Header, NavBar } from "@/components/common";
import { FunctionComponent, PropsWithChildren } from "react";

const BaseLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-2 md:px-4 space-y-8 lg:px-8 pb-10">
                <NavBar />
                <Header />
                <div className="">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BaseLayout;