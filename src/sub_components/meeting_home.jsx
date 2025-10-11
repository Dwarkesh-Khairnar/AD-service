import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Router components

function meeting_home() {
  return (
    <ul className="gap-3 flex mt-5 ml-5">
      <li
        className=" bg-blue-500 p-2 rounded-4xl"
        // onClick={create_new_meet}
      >
        <Link to="/Claint">Meeting requsta</Link>
      </li>
      <li className="bg-green-400 p-2 rounded-4xl">
        <Link to="/Sales">Join Room</Link>
      </li>
    </ul>
  );
}

export default meeting_home;
