import AddProduct from "../components/AddProduct";
import { Link } from "react-router-dom";
import "../index.css";
import Order from "../components/Order";
import ListProduct from "../components/ListProduct";

function Admin() {
  /*if (localStorage.getItem("admin")) {
    console.log("dsadsa");
  } else {
    dashboard = <Login />;
    */

  return (
    <>
      <nav className="bg-secondary">
        <ul className="flex justify-between p-3 items-center">
          <li>
            <Link to={"/"} className="mx-10 text-green text-2xl">
              GallerieM
            </Link>
          </li>
          <li className="mx-10 text-red-700 font-semibold">Logout</li>
        </ul>
      </nav>
      <div className="flex flex-row p-3 bg-primary h-screen ">
        <div className="w-2/3 rounded-xl shadow-xl p-3 m-3 overflow-y-auto bg-white">
          <Order />
        </div>
        <div className="flex flex-col w-1/3">
          <div className="h-2/3 m-3 rounded-xl shadow-xl bg-white">
            <AddProduct />
          </div>
          <div className="h-1/3 m-3 rounded-xl shadow-xl p-3 overflow-y-auto bg-white">
            <ListProduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
