import axios from "axios";
import "../index.css";
import "axios";

function Login() {
  return (
    <div className="flex justify-center bg-primary items-center h-screen">
      <div className="flex flex-col bg-green h-fit justify-center items-center w-1/2 rounded-3xl p-3">
        <img className="w-1/2" src="/Logo.jpg"></img>
        <form
          className="flex flex-col w-1/2"
          onSubmit={() => {
            axios.post("");
          }}
        >
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 m-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary"
            placeholder="Username"
            name="username"
            type="text"
            required
          ></input>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 m-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary"
            placeholder="Password"
            name="password"
            type="password"
            required
          ></input>
          <input
            type="submit"
            value="Login"
            className="shadow bg-secondary m-1 text-neutral-700 hover:bg-primary focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded w-1/2"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
