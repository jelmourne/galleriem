import "../index.css";
import { useState } from "react";
function Product() {
  const [heart, setHeart] = useState(false);

  return (
    <div className="flex flex-col items-center bg-blue-900 w-1/6 h-96">
      <p>Product tile</p>
      <div className="flex w-10/12 h-5/6">
        <img
          className="absolute z-50"
          src={heart}
          onClick={() => {
            console.log("test");
          }}
        ></img>
        <img src="https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
      <div className="flex">
        <div></div>
      </div>
    </div>
  );
}

export default Product;
