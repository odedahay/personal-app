
import Link from "next/link";
import Image from "next/image";
import { Portfolio } from "@/interfaces/Portfolio";
import { shortify } from "@/lib/client/utils";

type Props = {
    portfolio: Portfolio
}


export const PortfolioItem: React.FC<Props> = ({ portfolio }) => {
    return (
        <div key={portfolio.slug} className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Image
                    src={portfolio.coverImage}
                    className="h-full w-full object-cover object-center"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Portfolio By Rod Dahay"
                />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
                <Link legacyBehavior href={`/portfolios/${portfolio.slug}`}>
                    <a>
                        <span className="absolute inset-0" />
                        {shortify(portfolio.title)}
                    </a>
                </Link>
            </h3>
            <p className="text-base font-semibold text-gray-900">{shortify(portfolio.description)}</p>
        </div>
    )
}
