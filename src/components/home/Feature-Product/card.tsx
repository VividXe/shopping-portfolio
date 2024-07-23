import Image from "next/image";
import { CiStar } from "react-icons/ci";

type Products = {
  id: number;
  title: string;
  name: string;
  price: number;
  image: string;
};
function Card({ products }: { products: Products[] }) {
  return (
    <div className="grid items-center justify-center grid-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-8 p-10">
      {products.map((product) => (
        <a
          href="#"
          key={product.id}
          className="flex flex-col items-center md:items-start gap-3.5 text-lg w-96 h-[500px] p-2 sm:w-full shadow-md bg-white"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={200}
            className="py-2"
          />
          <h1 className="text-xl truncate w-96">{product.title}</h1>
          <h1 className="text-gray-400">{product.name}</h1>
          <p>${product.price}</p>
          <CiStar className="text-xl text-yellow-400" />
          <button className="border bg-[#2B7FAF] rounded-md hover:bg-[#53829d] text-white border-white py-2 px-4">
            Add to Cart
          </button>
        </a>
      ))}
    </div>
  );
}

export default Card;
