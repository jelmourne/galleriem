import "../index.css";
import Navbar from "../components/Navbar";
import CartItem from "../components/ItemCart";
function Cart() {
  return (
    <>
      <Navbar />
      <div className="bg-primary p-4">
        <div className="w-2/3 p-3 bg-white shadow-xl rounded-xl">
          <CartItem
            productTitle="T-Shirt"
            image=""
            size="M"
            color="red"
            text="Awesome"
            price="20.99"
          />
          <CartItem
            productTitle="Mug"
            size="M"
            color="White"
            text="Yoooo"
            price="14.99"
          />
          <CartItem
            productTitle="Dress"
            size="S"
            color="Green"
            text=""
            price="49.99"
          />
        </div>
      </div>
    </>
  );
}

export default Cart;
