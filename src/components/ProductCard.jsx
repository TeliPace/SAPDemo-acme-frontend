import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4 w-full flex flex-col items-center">

        <h3 className="text-xl font-bold">{product.name}</h3>


        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition duration-300"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
