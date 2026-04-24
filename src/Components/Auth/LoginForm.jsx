import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import lodingPage from "../loding";
import axios from 'axios'

function LoginForm() {
  const [data, setData] = useState({})
  const [responseMessage, setResponseMessage] = useState("");
  const [responseColor, setResponseColor] = useState({});
  const [loding, setloding] = useState(false)
  const Navigate = useNavigate();

  const SubmitHandel = async (e) => {
    e.preventDefault();

    try {
      setloding(true);
      const result = await axios.post("http://localhost:5000/api/Auth/singIn", data)
      if (result.data.lenght === 0) setResponseMessage("Server not respond")
      // Store token in localStorage 
      localStorage.setItem("token", result.data.secret)

      setResponseMessage("Login successfull")
      setResponseColor({ color: "green" })

      if (result.statusText) {
        setTimeout(() => {
          Navigate('/')
          setloding(false)
        }, 3000);
      }
    }
    catch (error) {
      setResponseMessage(error.response.data.message)
      setResponseColor({ color: "red" })
      setloding(false)
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
                required
              />
            </div>

            <div>
              <label htmlFor="hast">Password</label>
              <input
                type="password"
                name="hast"
                onChange={valueAddHandelr}
                className="shadow border rounded-md p-1 w-full border-gray-500 text-gray-800"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-amber-500 hover:bg-green-500"
            >
              {loding? <lodingPage/>:"login"}  // temp loginf try
            </button>
          </form>

          <p className="w-full text-center" style={responseColor}>
            <span>{responseMessage}</span>
          </p>

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
