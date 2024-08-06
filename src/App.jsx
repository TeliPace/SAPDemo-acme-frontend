import "./App.css";
import { Navbar, Form, Carousel, ProductList } from "./components";

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className="w-full min-h-screen flex items-center">
        <Carousel />
      </section>
      <section>
        <ProductList />
      </section>
      <section>
        <Form />
      </section>
      {/* <section>Order Page</section> */}
    </>
  );
}

export default App;
