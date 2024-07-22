import React from "react";
import Header from "./header/header";
import Banner from "../home/banner/banner";
import OfferCard from "../home/banner/offerCard/offerCard";
import FeatureProduct from "../home/Feature-Product/featureProduct";

function Layouts() {
  return (
    <>
      <Header />
      <Banner />
      <OfferCard />
      <FeatureProduct />
    </>
  );
}

export default Layouts;
