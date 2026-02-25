import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/img/logo_ad.png";

const flex_hoverUnderlineClass =
  "relative cursor-pointer " +
  "after:content-[''] after:absolute after:left-0 after:bottom-[-0px] " +
  "after:w-0 after:h-[1.5px] after:bg-red-600 " +
  "after:transition-width after:duration-400 after:ease-linear " +
  "hover:after:w-full " +
  "z-50 hidden md:block " +
  "hover:text-red-600";

function Header() {
  const [sidenav, setsidenav] = useState(false);
  const [svg, setSvg] = useState(1);
  const svgs = [
    <svg viewBox="4 0 500 450" fill="#DD0303 ">
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>,
    <svg viewBox="4 0 500 450" fill="#fa812f">
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </svg>,
  ];

  const toggleSidenav = () => {
    setsidenav(!sidenav);
    // Update the index to show the next SVG
    setSvg((prevIndex) => (prevIndex + 1) % svgs.length);
  };

  return (
    <>
      <header className="bg-transparent fixed w-screen z-15">
      <div  className="w-screen mx-auto flex items-center font-thin text-blue-100 justify-between h-16 px-4">
        <img src={logo} alt="Logo" className="w-13" />
        <div>
          <ul className="flex gap-3">
            <li className={flex_hoverUnderlineClass}><Link to="/">Home</Link></li>
            <li className={flex_hoverUnderlineClass}><Link to="/services">Services</Link></li>
            <li className={flex_hoverUnderlineClass}><Link to="/plans">Plans</Link></li>
            <li className={flex_hoverUnderlineClass}><Link to="/schedule">Meeting</Link></li>
            <li className={flex_hoverUnderlineClass}><Link to="/docs">Docs</Link></li>
          </ul>
        </div>
        <div className="flex z-50">
          <button className="bg-yellow-500 hover:bg-amber-600 text-white py-2 px-3 rounded-bl-md">
            +New
          </button>
          <div
            className="block md:hidden mr-0 m-2 w-6 cursor-pointer z-50"
            onClick={toggleSidenav}
            aria-expanded={sidenav}
            aria-controls="sidenav"
          >
            {svgs[svg]}
          </div>
        </div>
        </div>
      </header>

      <div
      id="sidenav"
      className={`fixed inset-0 top-0 left-0 z-10 transform transition-all duration-400 ease-in-out ${sidenav ? " y-0 -z-1 opacity-100 h-[70%]":"y-full opacity-0 z-50 h-0"}`}
      >
        <div className=" absolute top-0 w-full h-full bg-amber-400 z-10 border-l-2 border-white">
          <hr className="mt-10 text-transparent" />

          <ul className={`mt-8 ml-20 fixed inset-0 top-0 left-0 transform transition-all duration-400 ease-in-out ${sidenav ? "block":"hidden"}`}>
            <li className="my-4 hover:text-red-600 text-5xl font-bold text-amber-50 opacity-55"                 onClick={toggleSidenav}>{" "}<Link to="/">Home</Link>{" "}</li>
            <li className="my-4 hover:text-red-600 text-4xl font-stretch-50% text-gray-800" onClick={toggleSidenav}>{" "}<Link to="/services">Services</Link>{" "}</li>
            <li className="my-4 hover:text-red-600 text-5xl"                 onClick={toggleSidenav}>{" "}<Link to="/plans">Plans</Link>{" "}</li>
            <li className="my-4 hover:text-red-600 text-4xl font-extrabold opacity-50 text-amber-50" onClick={toggleSidenav}>{" "}<Link to="/schedule">Schedule Meeting</Link>{" "}</li>
            <li className="my-4 hover:text-red-600 text-4xl"                 onClick={toggleSidenav}>{" "}<Link to="/#">Ragistration</Link>{" "}</li>
            <li className="my-4 hover:text-red-600 text-4xl font-bold text-gray-800" onClick={toggleSidenav}>{" "}<Link to="/docs">Docs</Link>{" "}</li>
            <li className="my-4 hover:text-red-600 text-4xl font-semibold opacity-55"     onClick={toggleSidenav}>{" "}<Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
