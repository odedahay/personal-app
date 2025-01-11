import { PageLayout } from "@/components/layouts";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: 'About Rod Dahay'
}

const About = () => {
  return (
    <PageLayout>
      <div className="page-layout">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">This page is under construction</h1>
        <div className="relative">
          <h2 className="text-sm font-bold text-gray-900 mt-11 ms-11">
            <Link href="/">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ArrowLeftCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              Back to home</Link>
          </h2>
        </div>

      </div>
    </PageLayout>
  )
}

export default About;