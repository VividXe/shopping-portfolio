import Image from "next/image";
import Button from "@/components/button/button";

function OfferCard() {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-8 container mx-auto p-10">
      <a href="/detail" className="relative">
        <Image
          src="/women-fashion-free-img.jpg"
          width={400}
          height={400}
          alt="image"
        />
        <div
          className="absolute bottom-1
         p-10"
        >
          <h1 className="text-2xl"> 20% Off On Tank Tops</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin ac dictum.
          </p>
          <Button>Shop Now</Button>
        </div>
      </a>
      <a href="/detail" className="relative">
        <Image
          src="/men-fashion-free-img.jpg"
          width={400}
          height={400}
          alt=""
        />
        <div
          className="absolute bottom-1
         p-10"
        >
          <h1 className="text-2xl">Latest Eyewear For You</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin ac dictum.
          </p>
          <Button>Shop Now</Button>
        </div>
      </a>
      <a href="/detail" className="relative">
        <Image
          src="/footwear-free-img.jpg"
          width={400}
          height={400}
          alt="image"
        />
        <div
          className="absolute bottom-1
         p-10"
        >
          <h1 className="text-2xl">Let Lorem Suit Up!</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin ac dictum.
          </p>
          <Button>Check Out</Button>
        </div>
      </a>
    </div>
  );
}

export default OfferCard;
