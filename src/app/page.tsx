import FeatureProduct from "@/components/home/Feature-Product/featureProduct";
import Banner from "@/components/home/banner/banner";
import OfferCard from "@/components/home/banner/offerCard/offerCard";
import Feature from "@/components/home/feature-Section/feature";
import Sale from "@/components/home/sale-banner/sale";
import Layouts from "@/components/layouts";
export default function Home() {
  return (
    <Layouts>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <OfferCard />
        <FeatureProduct />
        <Feature />
        <Sale />
      </div>
    </Layouts>
  );
}
