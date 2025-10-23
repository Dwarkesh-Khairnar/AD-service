import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Router components
import Meet_form from "../assets/Meet_form.svg"
import Meet_join from "../assets/Meet_join.svg"

function meeting_home() {
  return (
    <div className="h-screen w-screen grid justify-center">

   <ul className="gap-13 flex mt-5 h-10">
          <li
            className="w-10"
            // onClick={create_new_meet}
            >
            <Link to="/client"><img className="ml-2 h-15 w-12" src={Meet_form} alt="" /></Link>
            Shedule Meeting
          </li>
          <li className=" w-10 ">
            <Link to="/meetjoin"><img className="ml-2 h-15 w-12" src={Meet_join} alt="" srcset="" /></Link>
          Join Meeting
          </li>
        </ul>
            </div>
  );
}

export default meeting_home;
