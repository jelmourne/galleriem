import "../index.css";
import Navbar from "../components/Navbar";
import CartItem from "../components/Cartitem";
function Cart() {
  return (
    <>
      <Navbar />
      <div className="text-center bg-green p-4">
        <p className="text-2xl font-bold text-white">CART</p>
      </div>
      <CartItem 
      productTitle = "T-Shirt" 
      image = ""
      size = "M"
      color = "red" 
      text = "Awesome" 
      price = "20.99"
      />
      <CartItem 
      productTitle = "Mug" 
      size = "M"
      color = "White" 
      text = "Yoooo" 
      price = "14.99"
      />
      <CartItem 
      productTitle = "Dress" 
      size = "S"
      color = "Green" 
      text = "" 
      price = "49.99"
      />
      
    </>
  );
}

export default Cart;
