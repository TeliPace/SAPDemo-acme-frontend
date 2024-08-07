import "./App.css";
import React, { useState } from "react";
import { Navbar, Form, Carousel, ProductList, Footer } from "./components";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <>
      <section>
        <Navbar cartCount={cart.length} />
      </section>
      <section className="w-full min-h-screen flex items-center mt-20">
        <Carousel />
      </section>
      <section id="products" className="w-full min-h-screen flex items-center justify-center">
        <ProductList addToCart={addToCart} />
      </section>
      <section id="form" className="w-full min-h-screen flex items-center">
        <Form />
      </section>
      <Footer />
    </>
  );
}

export default App;
