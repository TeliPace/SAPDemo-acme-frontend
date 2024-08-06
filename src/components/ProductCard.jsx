import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="mt-2">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
