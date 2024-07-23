import Button from "@/components/button/button";

function Banner() {
  return (
    <div
      className="bg-cover bg-center h-screen w-full"
      style={{
        backgroundImage: `url('/home-new-bg-free-img.jpg')`,
      }}
    >
      <div className="w-full  md:full lg:w-1/2 h-full flex flex-col justify-center p-10">
        <h1 className="text-5xl leading-relaxed">
          Raining Offers For Hot Summer!
        </h1>
        <p className="text-xl mt-4">25% Off On All Products</p>
        <div className="gap-4 flex mt-10">
          <Button>Shop Now</Button>
          <button className="border border-white py-2 px-4">
            FIND MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
