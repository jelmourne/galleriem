/* eslint-disable react/prop-types */
import "../index.css";
import { useEffect, useState } from "react";
function Product(props) {
  const [heart, setHeart] = useState(false);
  const [like, setLike] = useState(parseInt(props.likes));
  const [button, setButton] = useState(false);

  useEffect(() => {
    const addButton = document.getElementById("addButton");
    button == false
      ? (addButton.style.display = "none")
      : (addButton.style.display = "flex");
  }, [button]);

  return (
    <div className="flex flex-col w-1/6 h-96">
      <p className="flex justify-center">{props.product}</p>
      <div
        className="flex w-full h-5/6 relative"
        onMouseEnter={() => {
          setButton(true);
        }}
        onMouseLeave={() => {
          setButton(false);
        }}
      >
        <div className="absolute right-1 top-1 z-50 flex items-end">
          <p>{like}&nbsp; </p>
          <img
            className="hover:cursor-pointer"
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
        <div className="absolute right-5 z-50 flex bottom-5">
          <button
            id="addButton"
            className="justify-center items-center bg-black rounded-full h-10 w-10"
          >
            <input type="image" className="m-4" src="/Add.svg" />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div>{props.color}</div>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default Product;
