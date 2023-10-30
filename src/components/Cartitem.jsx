/* eslint-disable react/prop-types */
//import React from "react";
function CartItem(props) {
  return (
    <div className="flex flex-row m-1 w-1/2 h-48 border-2 border-green-400 rounded items-center" > 
      <div className="h-40 w-40 bg-lime-600 rounded mx-4">
        placeHolder{props.image}
      </div>
      <div className="flex flex-col items-stretch">
        <h4 className="text-2xl font-semibold"
        >{props.productTitle}</h4>
        <p
        >Size: {props.size} Color: {props.color} Customization: {props.text}</p>
        <h6 className="text-blue-600 text-xl font-semibold "
        >${props.price}</h6>
      </div>
    </div>
  );
}

export default CartItem;
