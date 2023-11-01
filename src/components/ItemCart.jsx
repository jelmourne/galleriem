/* eslint-disable react/prop-types */
//import React from "react";
function CartItem(props) {
  return (
    <div className="flex flex-row bg-white p-1 h-36 items-center border-b-[1px] border-opacity-10">
      <div className="h-28 aspect-square bg-lime-600 rounded mx-4 ">
        placeHolder{props.image}
      </div>
      <div className="flex flex-col items-stretch">
        <h4 className="text-2xl font-semibold">{props.productTitle}</h4>
        <p>
          Size: {props.size} Color: {props.color} Customization: {props.text}
        </p>
        <h6 className="text-blue-600 text-xl font-semibold ">${props.price}</h6>
      </div>
    </div>
  );
}

export default CartItem;
