import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav className="bg-secondary flex justify-center p-3">
      <ul className="flex justify-between w-10/12 items-center">
        <li>
          <Link to={"/"} className="flex justify-between">
            <img className="w-3/12 inline-flex" src="./Home.svg"></img> Home
          </Link>
        </li>
        <li>
          <Link to={"/Gallery"} className="flex justify-between">
            <img className="w-3/12 inline-flex" src="./Image.svg"></img> Gallery
          </Link>
        </li>
        <li className="text-green text-2xl font-light">GallerieM</li>
        <li>
          <Link to={"/Shop"} className="flex justify-between">
            <img className="w-4/12 inline-flex" src="./Shopping.svg"></img> Shop
          </Link>
        </li>
        <li className="flex justify-between">
          <img className="w-5/12 inline-flex" src="./Basket.svg"></img> Cart
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
