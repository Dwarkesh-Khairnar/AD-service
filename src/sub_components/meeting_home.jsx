import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Router components
import Meet_form from "../assets/Meet_form.svg";
import Meet_join from "../assets/Meet_join.svg";
import man_reisent from "../assets/man_with_responsive.svg";
function meeting_home() {
  return (
    <div className="">
      <div className=" h-45 grid items-center justify-center">
        <h1 className=" font-semibold text-[300%]">Welcome to Our Meeting Hub</h1>
        <p className=" font-sans">Bridging Connections for Success</p>
      </div>
      <div className="h-35 md:mt-4 flex justify-center mt-16 gap-14">
        <div className="">
          <ul className=" flex mt-5 h-10">
            <li className="w-10">
              <Link to="/client">
                <img className="ml-2 h-15 w-12" src={Meet_form} alt="" />
                <span className="text-sm text-center grid">
                  Requist Meeting
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-gray-500 w-0.5"></div>
        <div>
          <ul className=" flex mt-5 h-10">
            <li className=" w-10 ">
              <Link to="/meetjoin">
                <img
                  className="ml-1.5 h-15 w-12"
                  src={Meet_join}
                  alt=""
                  srcset=""
                />
              </Link>
              <span className="text-sm text-center grid">Join Meeting</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center md:mt-20">
        <img src={man_reisent} className="h-80" />
      </div>
      <div className="w-screen flex justify-center mt-3">
      <span className="text-red-600">This feacher is only for cleint and Company Representative discution </span>

      </div>
    </div>
  );
}

export default meeting_home;
