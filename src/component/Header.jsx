import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  const [visible, setVisible] = useState(false);
  const [svg, setSvg] = useState(1);

  const toggleSidenav = () => {
    setVisible(!visible);
    // setSvg((pe)=>(
    //   pe<3 ? pe +1:1
    // ));
  };

  return (
    <>
      <header className="bg-white p-3 px-3 flex justify-between items-center -mb-16">
        <div>Logo</div>
        <div>
          <ul className="flex gap-3">
            <li className="z-10 hidden md:block hover:text-red-600"><Link to="/">Home</Link></li>
            <li className="z-10 hidden md:block hover:text-red-600"><Link to="/services">Services</Link></li>
            <li className="z-10 hidden md:block hover:text-red-600"><Link to="/plans">Plans</Link></li>
            {/* <li className="z-10 hidden md:block hover:text-red-600"><Link to="/placeholder">########</Link></li> */}
            <li className="z-10 hidden md:block hover:text-red-600"><Link to="/schedule">Schedule Meeting</Link></li>
          </ul>
        </div>
        <div className="flex z-10">
          <button
            className="bg-yellow-500 hover:bg-amber-600 text-white py-2 px-3 rounded-bl-md">+New
          </button>
          <div className="block md:hidden mr-0 m-2 w-6 cursor-pointer z-50" onClick={toggleSidenav} aria-expanded={visible} aria-controls="sidenav">
            {/* { svg ?( */}
             <svg viewBox="4 0 500 450" fill="#fa812f">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
            {/* // )} */}
          </div>
        </div>
      </header>

      <div
        id="sidenav"
        className={`top-0 transition-opacity duration-900 ease-in-out ${
          visible ? "opacity-100 h-auto" : "opacity-0 h-0"
        } overflow-hidden `}
      >
        <div className=" absolute end-0 w-3/4 h-screen bg-amber-400">
          <h4 className="my-4 ml-5">Ad</h4>
          <hr className="text-blue-100" />

          <ul className="m-20 w-full">
            <li className="my-4 hover:text-red-600 ">               <Link to="/">Home</Link></li>
            <li className="my-4 hover:text-red-600 text-amber-50"><Link to="/services">Services</Link></li>
            <li className="my-4 hover:text-red-600">                <Link to="/plans">Plans</Link></li>
            <li className="my-4 hover:text-red-600 text-amber-50"><Link to="/placeholder">########</Link></li>
            <li className="my-4 hover:text-red-600">                <Link to="/schedule">Schedule Meeting</Link></li>
          </ul>
          <hr className="text-blue-100" />
          <ul className="ml-20 mt-10">
            <li className="text-amber-50 hover:text-red-600">     <Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
