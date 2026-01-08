import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Router components

function client_m_form() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Meeting Scheduling/Request
        </h2>
        <form className="space-y-4">
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
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Work Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          {/* Mobaile Field */}
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="number"
              id="number"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your number"
            />
          </div>
          {/* Timeing Field */}
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Suggest Date and Time
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your number"
            />
            <input
              type="time"
              id="time"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your number"
            />
          </div>

          {/* Name_Client Field */}
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Name Of Representative
            </label>
            <input
              type="text"
              id="Name-Client"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name of Representative"
            />
          </div>
          <label htmlFor="Describe_Business">Describe Business</label>
          <textarea
            type="textarea"
            name="Describe_Business"
            id="Describe_Business"
            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
           maxlength="150" placeholder="Enter up to 150 characters"
          ></textarea>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-amber-500 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Request
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an Id?{" : "}
        <Link to="/meetjoin"><span className="text-amber-500 hover:underline">
            Join Meeting
          </span></Link>
          
        </p>
      </div>
    </div>
  );
}

export default client_m_form;
