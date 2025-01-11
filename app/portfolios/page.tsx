import { PageLayout } from "@/components/layouts";
import PortfolioList from "@/components/portfolios/portfolioList";
import { getPortfolios } from "@/lib/portfolios";

const PortfoliosPage = async() => {
    const portfolios = await getPortfolios();

    return ( 
        <PageLayout>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Portfolios</h2>
            <PortfolioList portfolios={portfolios} />
        </PageLayout>
     );
}
 
export default PortfoliosPage;