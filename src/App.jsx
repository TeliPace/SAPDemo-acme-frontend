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
      <section className="w-full min-h-screen flex items-center">
        <Carousel />
      </section>
      <section className="w-full min-h-screen flex items-center">
        <ProductList addToCart={addToCart} />
      </section>
      <section className="w-full min-h-screen flex items-center">
        <Form />
      </section>
      <Footer />
    </>
  );
}

export default App;
