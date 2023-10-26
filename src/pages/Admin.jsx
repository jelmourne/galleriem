import AddProduct from "../components/AddProduct";
import { Link } from "react-router-dom";
import "../index.css";

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
          <li className="mx-10">Logout</li>
        </ul>
      </nav>
      <div className="flex flex-row p-3 bg-primary">
        <div className=" w-2/3 h-screen m-3 rounded-xl shadow-xl border">
          Orders
        </div>
        <div className="flex flex-col w-1/3 ">
          <div className="h-1/2 m-3 rounded-xl shadow-xl border">
            <AddProduct />
          </div>
          <div className=" h-1/2 m-3 rounded-xl shadow-xl border">
            Product Search
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
