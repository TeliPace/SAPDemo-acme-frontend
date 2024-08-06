import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40,
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div id="products" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
