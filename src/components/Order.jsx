/* eslint-disable no-unused-vars */
import { useState } from "react";
import CartItem from "./ItemCart";

function Order(props) {
  //props = order id
  const [orders, setOrder] = useState(false);
  return (
    <div className="bg-white flex flex-col rounded-xl p-3 m-2 border">
      <div className="flex justify-between">
        <p>#1234543</p>
        <p>Total: $50</p>
      </div>
      <div className="flex justify-between">
        <p>
          322 Rue des Superieurs, Sainte-Anne-des-Plaines, J4N4A5, QC, Canada
        </p>
        <img
          className=" transition-all"
          src="./Arrow.svg"
          onClick={(e) => {
            setOrder((prev) => !prev);
            e.currentTarget.classList.toggle("rotate-180");
          }}
        ></img>
      </div>
      {orders && (
        <div>
          <CartItem
            productTitle="T-Shirt"
            image=""
            size="M"
            color="red"
            text="Awesome"
            price="20.99"
          />
          <CartItem
            productTitle="T-Shirt"
            image=""
            size="M"
            color="red"
            text="Awesome"
            price="20.99"
          />
        </div>
      )}
    </div>
  );
}

export default Order;
