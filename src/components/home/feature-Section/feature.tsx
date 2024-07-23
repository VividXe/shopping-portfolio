import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { BiSolidDiscount } from "react-icons/bi";
import { GrRestroomWomen } from "react-icons/gr";
import Pager from "@/components/pager";
function Feature() {
  return (
    <Pager>
      <div className="flex flex-wrap   md:flex-nowrap items-center p-10">
        <div className="text-black flex flex-col gap-4 text-center items-center p-10">
          <IoEarthOutline className="text-7xl" />
          <h1 className="text-2xl ">Worldwide Shipping</h1>
          <p className="leading-6">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.
          </p>
        </div>
        <div className="text-black flex flex-col gap-4 text-center items-center p-10">
          <GrRestroomWomen className="text-7xl" />
          <h1 className="text-2xl">Best Quality</h1>
          <p className="leading-6">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.
          </p>
        </div>
        <div className="text-black flex flex-col gap-4 text-center items-center p-10">
          <BiSolidDiscount className="text-7xl" />
          <h1 className="text-2xl">Best Offers</h1>
          <p className="leading-6">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.
          </p>
        </div>
        <div className="text-black flex flex-col gap-4 text-center items-center p-10">
          <GrSecure className="text-7xl" />
          <h1 className="text-2xl">Secure Payments</h1>
          <p className="leading-6">
            It elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.
          </p>
        </div>
      </div>
    </Pager>
  );
}

export default Feature;
