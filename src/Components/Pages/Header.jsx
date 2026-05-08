import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Cookie from 'js-cookie'

const flex_hoverUnderlineClass =
  "relative cursor-pointer " +
  "after:content-[''] after:absolute after:left-0 after:bottom-[-0px] " +
  "after:w-0 after:h-[1.5px] after:bg-[#dff] " +
  "after:transition-width after:duration-400 after:ease-linear " +
  "hover:after:w-full " +
  "z-50 hidden md:block " +
  "hover:text-[#dff]";

function Header() {
  const [sidenav, setsidenav] = useState(false);
  const [svg, setSvg] = useState(1);
  const svgs = [
    <svg viewBox="4 0 500 450" fill="#fa812f ">
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>,
    <svg viewBox="4 0 500 450" fill="#fa812f">
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </svg>,
  ];
  const trueFalse = useRef(false)
  const [displayButton, setDisplayButton] = useState(true); // Changed to state
  const [value, setValue] = useState("")


  useEffect(() => {
    if (trueFalse.current) return;
    trueFalse.current = true
    const checkCookie = async () => {

      if (Cookie.get("name").slice('')[0] === undefined) {
        setDisplayButton(true)
      } else {
        setValue(Cookie.get("name").slice('')[0])
        setDisplayButton(false)
      }
    }
    checkCookie()

  }, [displayButton])


  const toggleSidenav = () => {
    setsidenav(!sidenav);
    // Update the index to show the next SVG
    setSvg((prevIndex) => (prevIndex + 1) % svgs.length);
  };

  return (
    <>
      <header className="bg-transparent fixed w-screen z-15 ">
        <div className="w-screen mx-auto flex items-center font-semibold text text-gray-800 justify-between pt-1.5 px-4">
          <img src="https://i.ibb.co/tp0HGvKN/logo-ad.png" alt="Logo" className="w-13" />
          <div>
            <ul className="flex gap-3">
              <li className={flex_hoverUnderlineClass}><Link to="/">Home</Link></li>
              <li className={flex_hoverUnderlineClass}><Link to="/services">Services</Link></li>
              <li className={flex_hoverUnderlineClass}><Link to="/plans">Plans</Link></li>
              <li className={flex_hoverUnderlineClass}><Link to="/schedule">Meeting</Link></li>
              {/* <li className={flex_hoverUnderlineClass}><Link to="/Contact">Contact</Link></li> */}
              <li className={flex_hoverUnderlineClass}><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/schedule" className="hidden lg:block text-white text-xs font-black border-b-2 border-amber-400 pb-1 hover:text-amber-400 transition-all">
              BOOK A MEETING
            </Link>

            {displayButton ? (
              <Link
                to="/singup"
                className="bg-amber-400 hover:bg-white md:mt-0 mt-1.5 hover:text-amber-600 text-teal-900 font-black px-6 py-2.5 rounded-full text-sm transition-all shadow-lg active:scale-95"
              >
                SIGN UP
              </Link>
            ) : (
              <div className="bg-white/20 backdrop-blur-md text-white mt-2 py-2 px-6 rounded-full border border-white/30 font-bold">
                {value}
              </div>
            )}

            <div
              className="block md:hidden ml-2 w-6 mt-1 cursor-pointer z-50"
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
        className={`fixed inset-0 top-0 left-0 z-12 transform transition-all duration-900 ease-in-out ${sidenav ? "translate-y-0 opacity-100 h-full" : "-translate-y-full opacity-0 h-0"
          }`}>
        <div className=" absolute top-0 w-full h-full bg-amber-400 z-12 border-l-2 border-white">
          <hr className="mt-10 text-transparent" />

          <ul className={`mt-8 fixed inset-0 top-30 left-15 transform transition-all duration-400 ease-in-out ${sidenav ? "block" : "hidden"}`}>
            <li className="my-4 text-5xl font-bold text-amber-50 opacity-55" onClick={toggleSidenav}>{" "}<Link to="/">Home</Link>{" "}</li>
            <li className="my-4 text-4xl font-stretch-50% text-gray-800" onClick={toggleSidenav}>{" "}<Link to="/services">Services</Link>{" "}</li>
            <li className="my-4 text-5xl" onClick={toggleSidenav}>{" "}<Link to="/plans">Plans</Link>{" "}</li>
            <li className="my-4 text-4xl font-extrabold opacity-50 text-amber-50" onClick={toggleSidenav}>{" "}<Link to="/schedule">Schedule <br /> Meeting</Link>{" "}</li>
            <li className="my-4 text-4xl" onClick={toggleSidenav}>{" "}<Link to="/#">Ragistration</Link>{" "}</li>
            {/* <li className="my-4 text-4xl font-bold text-gray-800"                  onClick={toggleSidenav}>{" "}<Link to="/Contact">Contact</Link>{" "}</li> */}
            <li className="my-4 text-4xl font-semibold opacity-55" onClick={toggleSidenav}>{" "}<Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
