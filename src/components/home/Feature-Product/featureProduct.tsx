import Card from "./card";
const products = [
  {
    id: 1,
    title: "DNK Black Shoes",
    name: "Men",
    price: 100,
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3.jpg",
  },
  {
    id: 2,
    title: "Dark Blue Jeans",
    name: "Men",
    price: 200,
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-600x600.jpg",
  },
  {
    id: 3,
    title: "Black Denim Jeans",
    name: "Men",
    price: 300,
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1-600x600.jpg",
  },
  {
    id: 4,
    title: "Basic Blue Jeans",
    name: "Women",
    price: 400,
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-600x600.jpg",
  },
  {
    id: 5,
    title: "Gray Denim Shorts",
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
    title: "Dark Blue Jeans",
    name: "Men",
    price: 200,
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-600x600.jpg",
  },
  {
    id: 10,
    title: "DNK Black Shoes",
    name: "Men",
    price: 100,
    image:
      "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3.jpg",
  },
];
function FeatureProduct() {
  return (
    <div className="bg-gray-50 text-black mt-10">
      <h1 className="text-center text-4xl p-20">Featured Products</h1>
      <Card products={products} />
    </div>
  );
}

export default FeatureProduct;
