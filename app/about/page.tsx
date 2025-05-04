
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
                  I'm a UI designer and developer passionate about crafting websites and creating interactive, user-friendly designs that leave a lasting impression.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-md font-bold text-gray-900">Core Expertise:

              </h3>
              <div className="mt-4 pl-2">
                <p className="font-bold text-sm mb-2">HTML Email Mastery</p>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                
                  <li className="text-black">
                    <span>Designed 200+ responsive email campaigns with 95%+ inbox render accuracy</span>
                  </li>
                  <li className="text-black">
                    <span>Developed bulletproof templates for Salesforce Marketing Cloud/ExactTarget and Adobe Experience Manager</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pl-2">
                <p className="font-bold text-sm mb-2">UI/UX & Web Design</p>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                
                  <li className="text-black">
                    <span>Craft intuitive interfaces and responsive websites focused on conversion optimization</span>
                  </li>
                  <li className="text-black">
                    <span>Design user flows, wireframes, and full website mockups (Figma/Adobe XD)</span>
                  </li>
                  <li className="text-black">
                  Website redesigns improving usability metrics by 30%+</li>
                </ul>
              </div>
              <div className="mt-4 pl-2">
                <p className="font-semibold text-sm mb-2">Front-End Development - Designed and implemented internal system applications using:</p>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                
                  <li className="text-black">
                    <span>Fully Functional Website:</span> Custom WordPress themes (PHP/ACF)
                  </li>
                  <li className="text-black">
                    <span>Frontend Framework:</span> Angular/Next.js/Mitril JS with Tailwind CSS 
                  </li>
                  <li className="text-black">
                    <span>Backend:</span> PostgreSQL with Redis caching
                  </li>
                </ul>
              </div>
              
              <div className="mt-4 pl-2">
                <p className="font-bold text-sm mb-2">Creative Pursuits:</p>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                
                  <li className="text-black">
                    Wedding Photography - Freelance brand storytelling projects
                  </li>
                  <li className="text-black">
                    Pyrography Art - Hobby in wooden artworks
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="mt-5">
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