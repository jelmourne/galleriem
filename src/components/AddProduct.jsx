import { useEffect, useState } from "react";

function AddProduct() {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("#000000");
  useEffect(() => {
    console.log(colors);
  }, [colors]);

  return (
    <div className="flex justify-center items-center h-full">
      <input type="text" placeholder="Product Name"></input>
      <input type="number" min="0.01" step="0.01" placeholder="Price"></input>
      <div>
        <input
          type="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setColors((colors) => [...colors, color]);
          }}
        >
          Add Color
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
