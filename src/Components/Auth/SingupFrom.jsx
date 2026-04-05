import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

function SingupFrom() {
    const [responseMessage, setResponseMessage] = useState('');
    const [FormData, setformData] = useState({
      "company_name":"",
      "mail":"",
      "secondary_mail":"",
      "role":"",
      "password":"",
      "Confirm_password":"",
      "key_words":"",
    })

    const SubmitHandel=(event)=>{
        event.preventDefault();
        // console.log('FormData Form Frontend:', FormData)
          
        axios.post("http://localhost:5000/api/Auth/singUp",FormData)
        .then((response)=>{
           setResponseMessage("Post created successfully!"+JSON.stringify(response.data));
        })
        .catch((err)=>{
           setResponseMessage("Error creatingPost",err);
        })
        console.log(responseMessage);
    }

    const valueAddHandelr = (event)=>{
      const {name,value}=event.target; 

     setformData((priData)=>({
      ...priData,
      [name]:value
     }));

    }

  return (
    <>
    <div className='h-16'></div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
         SingUp
        </h2>
        <form className="space-y-4" onSubmit={SubmitHandel}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your company name"
              name='company_name'
              onChange={valueAddHandelr}
              />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
              >
             Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              name='mail'
              onChange={valueAddHandelr}
              />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
              >
            Secondry Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              name='secondary_mail'
              onChange={valueAddHandelr}
              />
          </div>
          {/* Role Field */}
          <div>
            <label
              htmlFor="Role"
              className="block text-sm font-medium text-gray-700"
              >
              Role
            </label>
            <input
              type="Role"
              id="Role"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Role"
              name='role'
              onChange={valueAddHandelr}
              />
          </div>
          {/* Passwords Field */}
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
              >
              Password
            </label>
            <input
              type="password"
              id="date"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Password"
              name='password'
              onChange={valueAddHandelr}
              />
           
          </div>
          {/* Confirm passwords Field */}
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
              >
             Confirm Password
            </label>
            <input
              type="password"
              id="date"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Password"
              name='Confirm_password'
              onChange={valueAddHandelr}
              />
           
          </div>

        
          <label htmlFor="Describe_Business">Describe Business</label>
          <textarea
            type="textarea"
            name="Describe_Business"
            id="Describe_Business"
            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            maxlength="150" placeholder="useing key words in 150 char"
            Name='key_words'
            onChange={valueAddHandelr}
            ></textarea>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-amber-500 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              SingUp
            </button>
          </div>
        </form>

       <p className="text-sm text-center text-gray-600">
            Already have an account{" : "}
              <Link to="/loginFrom">
                  <span className="text-amber-500 hover:underline hover:text-green-600">
                   Login
                  </span>
              </Link>
        </p>
        </div>
      </div>
    </>
  )
}

export default SingupFrom