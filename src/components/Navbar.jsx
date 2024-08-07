import React from "react";
import { BsCart4 } from "react-icons/bs";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-primary text-white p-6 fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span className="flex flex-row gap-2 justify-center items-center">

        <img src="logo.png" className="size-8"/>
        <div className="text-3xl font-bold">ACME</div>
        </span>
        <div className="flex items-center space-x-4">
          <a href="" className="hover:underline">
            About Us
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#form" className="hover:underline">
            Contact Us
          </a>
          <div className="relative">
            <span className="material-icons">
              <BsCart4 />
            </span>
            <span className="absolute -top-3 -right-5 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
