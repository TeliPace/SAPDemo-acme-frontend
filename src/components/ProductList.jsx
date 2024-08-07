import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Branded Nutella Jars",
    image: "nutella.jpg",
  },
  {
    id: 2,
    name: "Skincare",
    image: "prods.jpg",
  },
  {
    id: 3,
    name: "Branded Ale",
    image: "ale.jpg",
  },
  {
    id: 4,
    name: "Various",
    image: "swag.jpg",
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div  className="container mx-auto py-16 w-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold mb-8">Products</h2>
      <div className="grid grid-cols-2 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href="#form"
          className="bg-accent text-white py-4 px-8 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          Checkout
        </a>
      </div>
    </div>
  );
};

export default ProductList;
