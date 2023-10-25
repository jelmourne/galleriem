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
      <div className="bg-primary flex justify-around">
        <Product
          product="Shirt"
          image="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698019200&semt=sph"
          likes="2"
          color="blue"
          price="59.99"
        ></Product>
        <Product
          product="Shirt"
          image="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698019200&semt=sph"
          likes="2"
          color="blue"
          price="59.99"
        ></Product>
        <Product
          product="Shirt"
          image="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698019200&semt=sph"
          likes="2"
          color="blue"
          price="59.99"
        ></Product>
        <Product
          product="Shirt"
          image="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698019200&semt=sph"
          likes="2"
          color="blue"
          price="59.99"
        ></Product>
      </div>
    </>
  );
}

export default Home;
