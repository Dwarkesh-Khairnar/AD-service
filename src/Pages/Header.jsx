import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/img/logo_ad.png";

function Header() {
  const [visible, setVisible] = useState(false);
  const [svg, setSvg] = useState(1);
  const svgs = [
    <svg viewBox="4 0 500 450" fill="#DD0303 ">
  <path xmlns="http://www.w3.org/2000/svg" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
    </svg>,
    <svg viewBox="4 0 500 450" fill="#fa812f">
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </svg>,
  ];

  const toggleSidenav = () => {
    setVisible(!visible);
    // Update the index to show the next SVG
    setSvg((prevIndex) => (prevIndex + 1) % svgs.length);
  };

  return (
    <>
      <header className="bg-white p-2 pr-3 flex justify-between items-center -mb-16 border-b-2">
        <img src={logo} alt="Logo" className="w-13"/>
        <div>
          <ul className="flex gap-3">
            <li className="z-50 hidden md:block hover:text-red-600">
              <Link to="/">Home</Link>
            </li>
            <li className="z-50 hidden md:block hover:text-red-600">
              <Link to="/services">Services</Link>
            </li>
            <li className="z-50 hidden md:block hover:text-red-600">
              <Link to="/plans">Plans</Link>
            </li>
            {/* <li className="z-50 hidden md:block hover:text-red-600"><Link to="/placeholder">########</Link></li> */}
            <li className="z-50 hidden md:block hover:text-red-600">
              <Link to="/schedule">Schedule Meeting</Link>
            </li>
          </ul>
        </div>
        <div className="flex z-50">
          <button className="bg-yellow-500 hover:bg-amber-600 text-white py-2 px-3 rounded-bl-md">
            +New
          </button>
          <div
            className="block md:hidden mr-0 m-2 w-6 cursor-pointer z-50"
            onClick={toggleSidenav}
            aria-expanded={visible}
            aria-controls="sidenav"
          >
            {svgs[svg]}
          </div>
        </div>
      </header>

      <div
        id="sidenav"
        className={`top-0 transition-opacity duration-200 ease-in-out ${
          visible ? "opacity-100 h-auto" : "opacity-0 h-0 pointer-events-none"
        } overflow `}
      >
        <div className=" absolute end-0 w-3/4 h-full bg-amber-400 z-10 border-l-1 border-white">
          <h4 className="my-4 ml-5">Ad</h4>
          <hr className="text-blue-100" />

          <ul className="m-20 w-full"> 
              <li className="my-4 hover:text-red-600 "                onClick={toggleSidenav}> <Link to="/">Home</Link> </li> 
              <li className="my-4 hover:text-red-600 text-amber-50" onClick={toggleSidenav}> <Link to="/services">Services</Link> </li> 
              <li className="my-4 hover:text-red-600"                 onClick={toggleSidenav}> <Link to="/plans">Plans</Link> </li> 
              <li className="my-4 hover:text-red-600 text-amber-50" onClick={toggleSidenav}> <Link to="/schedule">Schedule Meeting</Link> </li> 
              <li className="my-4 hover:text-red-600"                 onClick={toggleSidenav}> <Link to="/#">Ragistration</Link> </li>
          </ul>
          <hr className="text-blue-100" />
          <ul className="ml-20 mt-10">
            <li className="text-amber-50 hover:text-red-600"onClick={toggleSidenav}>
              {" "}
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
