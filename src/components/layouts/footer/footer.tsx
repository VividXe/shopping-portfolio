import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-5 text-black h-[450px] p-10">
      <div className="col-span-2 flex flex-col gap-5 items-start justify-center">
        <a href="/home" className="text-3xl font-bold">
          DHK
        </a>
        <h1 className="text-2xl">The best look anytime, anywhere.</h1>
      </div>
      <div className="col-span-1 flex flex-col justify-center gap-4 text-gray-400 text-lg">
        <h1 className="text-2xl text-black"> For Her</h1>
        <div className="flex flex-col gap-1">
          <h1> Jeans </h1>
          <h1> Tops and Shirts</h1>
          <h1> Women Jackets</h1>
          <h1> Heels and Flats</h1>
          <h1> Women Accessories</h1>
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center gap-4 text-gray-400 text-lg">
        <h1 className="text-2xl text-black"> For Him</h1>
        <div className="flex flex-col gap-1">
          <h1> Men Jeans </h1>
          <h1> Men Shirts </h1>
          <h1> Men Shoes</h1>
          <h1> Men Jackets</h1>
          <h1> Men Accessories</h1>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-10 justify-center">
        <h1 className="text-2xl">Subscribe</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-8 py-4 border outline-none"
          />
          <button className="text-black px-4 py-2 bg-blue-400">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
