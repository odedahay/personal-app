import { Metadata } from 'next';
import Image from "next/image";

import { PageLayout } from '@/components/layouts';
import { Portfolio } from '@/interfaces/Portfolio';
import { getPorfolioBySlugWithMarkdown, getPortfolioBySlug } from '@/lib/portfolios';

// type Props = {
//     params: { slug: string };
// };

type Params = Promise<{ slug: string}>

export const metadata: Metadata = {
    title: 'Portfolio'
  };

const PortfolioDetail = async (props: { params: Params }) => {
    const { slug } = await props.params;
    const portfolio: Portfolio | null = await getPortfolioBySlug(slug);
    const blogHTML = portfolio ? await getPorfolioBySlugWithMarkdown(slug) : null;

    if (portfolio) {
        metadata.title = portfolio.title;
      } else {
        return (
          <PageLayout>
            <div className="text-center mt-10 text-xl">Portfolio's page not found.</div>
          </PageLayout>
        );
      }
    

    return (
        <PageLayout>
            <div className="pt-1">
                <div className="mx-auto max-w-2xl px-4 pt-1 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-5 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{portfolio?.title}</h1>
                    </div>
                    <div className="mt-4 lg:row-span-3 lg:mt-0 relative">
                        <Image
                            priority
                            fill
                            style={{ objectFit: "cover" }}
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                            alt=""
                            src={portfolio?.coverImage || '/path/to/default/image.jpg'}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        />
                    </div>
                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                        <div>
                            <h3 className="sr-only">Description</h3>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{portfolio?.description}</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-sm font-bold text-gray-900">Highlights</h3>
                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {portfolio?.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="text-sm font-bold text-gray-900">Details</h2>
                            <div className="mt-4 space-y-6">
                                <article className="text-sm text-gray-600">
                                    <div dangerouslySetInnerHTML={{ __html: blogHTML?.content || '' }} />
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default PortfolioDetail;