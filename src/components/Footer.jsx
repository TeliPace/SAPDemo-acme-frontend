import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-sm">1234 Main Street, Anytown, USA</p>
          <p className="text-sm">
            Email: contact@acme.com | Phone: (123) 456-7890
          </p>
        </div>
        <div className="mb-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            LinkedIn
          </a>
        </div>
        <div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} ACME. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
