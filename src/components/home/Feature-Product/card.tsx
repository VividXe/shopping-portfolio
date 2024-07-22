import Image from "next/image";
import { CiStar } from "react-icons/ci";
function Card() {
  const qd = "/women-fashion-free-img.jpg";
  const products = [
    {
      id: 1,
      title: "DNK Blue Shoes",
      name: "Men",
      price: 100,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3.jpg",
    },
    {
      id: 2,
      title: "Dark Brown Jeans",
      name: "Men",
      price: 200,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-600x600.jpg",
    },
    {
      id: 3,
      title: "Blue Denim Jeans",
      name: "Men",
      price: 300,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1-600x600.jpg",
    },
    {
      id: 4,
      title: "Basic Gray Jeans",
      name: "Women",
      price: 400,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-600x600.jpg",
    },
    {
      id: 5,
      title: "Blue Denim Shorts",
      name: "Women",
      price: 500,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-600x600.jpg",
    },
    {
      id: 6,
      title: "Anchor Bracelet",
      name: "Accessories",
      price: 600,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2-600x600.jpg",
    },
    {
      id: 7,
      title: "Boho Bangle Bracelet",
      name: "Accessories",
      price: 700,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-600x600.jpg",
    },
    {
      id: 8,
      title: "Light Brown Purse",
      name: "Accessories",
      price: 200,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1-600x600.jpg",
    },
    {
      id: 9,
      title: "Dark Brown Jeans",
      name: "Men",
      price: 200,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-600x600.jpg",
    },
    {
      id: 10,
      title: "DNK Blue Shoes",
      name: "Men",
      price: 100,
      image:
        "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3.jpg",
    },
  ];
  return (
    <div className="grid items-center justify-center grid-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-8 p-10">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-3 text-lg">
          <Image
            src={product.image}
            alt=""
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
      {/* <div>
        <Image src={qd} alt="" width={200} height={200} />
        <h1>DNK Yellow Shoes</h1>
        <p>men</p>
        <p>$120</p>
        <CiStar />
      </div>
      <div>
        <Image src={qd} alt="" width={200} height={200} />
        <h1>DNK Yellow Shoes</h1>
        <p>men</p>
        <p>$120</p>
        <CiStar />
        </div> */}
    </div>
  );
}

export default Card;
