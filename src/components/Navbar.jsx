import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ACME</div>
        <div className="space-x-4">
          <a href="#section1" className="hover:underline">
            Section 1
          </a>
          <a href="#section2" className="hover:underline">
            Section 2
          </a>
          <a href="#section3" className="hover:underline">
            Section 3
          </a>
          <a href="#section4" className="hover:underline">
            Section 4
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
