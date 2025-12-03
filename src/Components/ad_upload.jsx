import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

function ad_upload() {
  return (
    <div className="h-full w-full flex justify-center mt-30">
      <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
        Live your Ad
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
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Video file
          </label>
          <input
            type="file"
            id="file"
            accept="video/*"
            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="upload your video file"
          />
        </div>

        {/* Key Word field */}
        <label htmlFor="Describe_Business">Describe Business</label>
        <textarea
          type="textarea"
          name="Describe_Business"
          id="Describe_Business"
          className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          maxlength="150"
          placeholder="Enter up to 150 characters"
        ></textarea>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-amber-500 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Upload
          </button>
        </div>
      </form>
      <p className="text-sm text-center text-gray-600 mt-1">
        If you need a help:{" "}
       <Link to="/contact" className="text-green-600 hover:underline">
        Contact
      </Link>
      </p>
    </div>
    </div>
  );
}

export default ad_upload;
