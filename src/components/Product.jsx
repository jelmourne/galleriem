/* eslint-disable react/prop-types */
import "../index.css";
import { useState } from "react";
function Product(props) {
  const [heart, setHeart] = useState(false);
  const [like, setLike] = useState(parseInt(props.likes));

  return (
    <div className="flex flex-col w-1/6 h-96 m-3">
      <p className="flex justify-center">{props.product}</p>
      <div className="flex w-full h-5/6 relative">
        <div className="absolute right-0 z-50 flex items-end">
          <p>{like}&nbsp; </p>
          <img
            src={heart == false ? "/Heart.svg" : "/HeartFilled.svg"}
            onClick={() => {
              if (heart === false) {
                setHeart(true);
                setLike(like + 1);
              } else {
                setHeart(false);
                setLike(like - 1);
              }
            }}
          ></img>
        </div>
        <img src={props.image}></img>
      </div>
      <div className="flex justify-between">
        <div>{props.color}</div>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default Product;
