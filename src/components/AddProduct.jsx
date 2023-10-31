import { useState } from "react";

function AddProduct() {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("#000000");

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img
        className="h-56 aspect-square object-cover m-3"
        id="productImg"
      ></img>
      <input
        type="text"
        className="w-2/3 my-2"
        placeholder="Product Name"
      ></input>
      <input
        type="number"
        className="w-2/3 my-2"
        min="0.01"
        step="0.01"
        placeholder="Price"
      ></input>
      <textarea
        placeholder="Description"
        className="resize-none rounded-md w-2/3 my-2"
      ></textarea>
      <div className="flex w-2/3 justify-around">
        <div className="flex flex-col w-full">
          <div className="flex text-start">
            <p>Toggle Product Size&nbsp;</p>
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
              Add
            </button>
          </div>
          <div id="colors" className="flex absolute bottom-0"></div>
        </div>
      </div>

      <input
        type="file"
        accept="image/png, image/jpeg"
        className="w-3/4"
        onChange={(e) => {
          const img = e.target.files[0];
          if (img) {
            document.getElementById("productImg").src =
              URL.createObjectURL(img);
          }
        }}
      ></input>
      <div className="flex justify-end w-full p-4">
        <input
          type="submit"
          className="bg-black text-white p-2 rounded-lg hover:cursor-pointer active:hover:scale-95"
          value="Add Product"
        ></input>
      </div>
    </div>
  );
}

export default AddProduct;
