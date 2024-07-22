import React from "react";
import Header from "./header/header";
import Banner from "../home/banner/banner";
import OfferCard from "../home/banner/offerCard/offerCard";
import FeatureProduct from "../home/Feature-Product/featureProduct";
type Props = {
  children: React.ReactNode;
};

function Layouts(props: Props) {
  return (
    <div className="">
      <Header />
      <Banner />
      <OfferCard />
      <FeatureProduct />
    </div>
  );
}

export default Layouts;
