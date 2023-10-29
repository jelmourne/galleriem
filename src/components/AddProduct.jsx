import { useEffect, useState } from "react";

function AddProduct() {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("#000000");

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img className="h-56 aspect-square object-cover" id="productImg"></img>
      <input type="text" className="w-2/3" placeholder="Product Name"></input>
      <input
        type="number"
        className="w-2/3"
        min="0.01"
        step="0.01"
        placeholder="Price"
      ></input>
      <textarea
        placeholder="Description"
        className="resize-none rounded-md w-2/3"
      ></textarea>
      <div className="flex w-full justify-around">
        <div className="flex flex-col">
          <div className="flex">
            <p>Toggle Product Size</p>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="flex flex-col relative h-12">
          <div className="flex ">
            <input
              type="color"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                if (colors.length < 9) {
                  setColors((colors) => [...colors, color]);

                  const colorAdded = document.getElementById("colors");
                  colorAdded.innerHTML += `<div class="h-5 border aspect-square" style="background:${color}"></div>`;
                }
              }}
            >
              Add Color
            </button>
          </div>
          <div id="colors" className="flex absolute bottom-0"></div>
        </div>
      </div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => {
          const img = e.target.files[0];
          if (img) {
            document.getElementById("productImg").src =
              URL.createObjectURL(img);
          }
        }}
      ></input>
      <input type="submit" value="Add Product"></input>
    </div>
  );
}

export default AddProduct;
