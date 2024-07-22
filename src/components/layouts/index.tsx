import React from "react";
import Header from "./header/header";
import Banner from "../home/banner/banner";
import OfferCard from "../home/banner/offerCard/offerCard";
import FeatureProduct from "../home/Feature-Product/featureProduct";

function Layouts() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Banner />
      <OfferCard />
      <FeatureProduct />
    </div>
  );
}

export default Layouts;
