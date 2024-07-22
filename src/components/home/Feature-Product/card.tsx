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
        <div key={product.id} className="flex flex-col gap-3 text-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={200}
            className="py-2"
          />
          <h1 className="text-xl">{product.title}</h1>
          <h1 className="text-gray-400">{product.name}</h1>
          <p>${product.price}</p>
          <CiStar />
        </div>
      ))}
    </div>
  );
}

export default Card;
