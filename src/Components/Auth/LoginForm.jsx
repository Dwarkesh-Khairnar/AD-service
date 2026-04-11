import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function LoginForm() {
  const [data, setData] = useState({})
  const [responseMessage, setResponseMessage] = useState("");

  const SubmitHandel = (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const result = axios.post("http://localhost:5000/api/Auth/singin", data)
      if (result.lenght === 0) setResponseMessage("Server not respond")
      setResponseMessage("Login successfull")
    }
    catch (error) {
      console.error("Error on login process" + error);
      setResponseMessage("Error on login" + error)
    }
  }

  const valueAddHandelr = (event) => {
    const { name, value } = event.target;

    setData((privalue) => ({
      ...privalue,
      [name]: value
    }))
  }

  return (
    <>
      {/* <div className="h-16"></div> */}
      <div className="h-full flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl ">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>

          <form onSubmit={SubmitHandel} className="space-y-5">
            <div>
              <label htmlFor="Mail">Mail</label>
              <input
                type="email"
                name="email"
                onChange={valueAddHandelr}
                className="shadow border rounded-md p-1 w-full border-gray-500 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="hast">Password</label>
              <input
                type="password"
                name="hast"
                onChange={valueAddHandelr}
                className="shadow border rounded-md p-1 w-full border-gray-500 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-amber-500 hover:bg-green-500"
            >
              Login
            </button>
          </form>

          <p className="w-full text-center">
            Don't have an account? <Link to="/singup" className="text-amber-500 hover:text-green-500 hover:underline">Sing-Up</Link>
          </p>

          <p className="w-full text-center text-amber-500 hover:text-red-500 hover:underline">
            <Link>Forgot Password?</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
