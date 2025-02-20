
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/layouts";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";


export const metadata = {
  title: 'About Rod Dahay'
}

const About = () => {
  return (
    <PageLayout>

      <div className="pt-1">
        <div className="mx-auto max-w-2xl px-4 pt-1 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-5 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              About Rod Dahay
            </h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0 relative">
            <Image
              priority
              width={500}
              height={500}
              className="w-full"
              alt=""
              src={'/images/the-voice.png'}
              sizes="100%"
            />
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  I’m a UI designer and developer with a passion for creating websites and developing interactive, user-friendly designs.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-bold text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">UI Designing</span></li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Developing WP theme</span></li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Developing Django App</span></li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Photography</span></li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Pyrography</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-bold text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <article className="text-sm text-gray-600">
                  <p className="text-base text-gray-900">
                    As a UI Designer and Developer, I specialize in crafting functional, user-centric designs that empower users to achieve their goals with ease and efficiency. With a solid foundation in design principles, I create visually appealing and intuitive interfaces that prioritize usability. My passion lies in designing beautiful, user-friendly experiences that simplify and enhance people’s lives. I am constantly seeking opportunities to grow, refine my skills, and stay ahead of the latest design trends. A collaborative team player at heart, I thrive in environments where I can work with others to bring innovative ideas to life. I am eager to contribute my expertise and creativity to your team, helping to deliver exceptional user experiences that make a lasting impact.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default About;