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
      <div className="bg-primary"></div>
      <Product
        product="Shirt"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1920px-Image_created_with_a_mobile_phone.png"
        likes="2"
        color="blue"
        price="59.99"
      ></Product>
    </>
  );
}

export default Home;
