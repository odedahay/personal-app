
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
              About Me
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
              {/* <h3 className="sr-only">Description</h3> */}
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  I’m a UI designer and developer passionate about crafting websites and creating interactive, user-friendly designs that leave a lasting impression.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-bold text-gray-900">Skillfully trained through experience in multiple agencies, I specialize in:

              </h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">UI Designing: Crafting intuitive and visually appealing user interfaces.</span></li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Developing WordPress Themes: Building custom, responsive, and dynamic WordPress themes.</span></li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Developing Applications: Expertise in Django, Angular, Next.js, and CSS for creating robust and scalable web applications.</span></li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">CMS Management/Development: Proficient in managing and developing content management systems for seamless user experiences.</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Photography: Capturing compelling visuals to enhance storytelling and design.</span></li>

                  <li className="text-gray-400">
                    <span className="text-gray-600">Pyrography: Creating unique, handcrafted designs through wood-burning art.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <div className="mt-4 space-y-6">
                <article className="text-sm text-gray-600">
                  <p className="text-base text-gray-900 mb-6">
                    As a dedicated UI Designer and Developer, I specialize in creating functional, user-centric designs that empower users to achieve their goals effortlessly. With a strong foundation in design principles, I craft visually appealing and intuitive interfaces that prioritize usability and accessibility. My passion lies in designing beautiful, seamless experiences that enhance and simplify everyday interactions.
                  </p>
                  <p className="text-base text-gray-900">
                    I am committed to continuous growth, constantly refining my skills and staying updated with the latest design trends. A collaborative team player at heart, I thrive in environments where I can work alongside others to bring innovative ideas to life. I am excited to contribute my expertise and creativity to your team, helping to deliver exceptional user experiences that make a meaningful impact.
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