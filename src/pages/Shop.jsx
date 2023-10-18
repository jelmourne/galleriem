import "../index.css";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center bg-green p-4">
        <p className="text-2xl font-bold text-white">Shop</p>
      </div>
      <div className="bg-primary">
        <Product></Product>
      </div>
    </>
  );
}

export default Home;
