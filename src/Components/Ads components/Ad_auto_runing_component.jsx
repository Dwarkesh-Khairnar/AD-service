import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Navigate, redirect } from "react-router-dom";

function ad_runner({ children }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [timesing, setTimesing] = useState(true);
  const [cross, setCross] = useState(false);
  const [cundown, setCundown] = useState("");
  const [adlink, setAdlink] = useState("");
  const [targetlink, settargetlink] = useState("");
  const [resetskip, setresetskip] = useState(0);
  const [inactiveter, setinactiveter] = useState(0)
  const timerRef = useRef(null);
  const inactivity_time = 5000;
  const skiptime = 5;
  let skiptimetemp = skiptime;

  // Skip button display timeing
  const skipstart = () => {
    setTimesing(true);
    // setShowOverlay(true);
    if(!showOverlay) setShowOverlay(true)
    setCross(false);
    for (let index = skiptime; index >= 0; index--) {
      setTimeout(() => {
        console.log("timeout:", index);
        setCundown(index);
        if (index == 0) {
          setTimesing(false);
          setCross(true);
        }
      }, (skiptimetemp - index) * 1000);
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false);
        setinactiveter(0)
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    // setShowOverlay(false);

    timerRef.current = setTimeout(() => {
      // setShowOverlay(true);
      skipstart();
      console.log("No interaction for 5 seconds");
    }, inactivity_time);
  };

  useEffect(() => {
    // When the overlay is visible we *disable* the listeners
    if (showOverlay) {
      // clean any pending timeout so the overlay isn’t triggered again
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const events = [
      "mousemove",
      "mousedown",
      "keydown",
      "touchstart",
      "touchmove",
      "scroll",
      "wheel",
    ];

    events.forEach((event) => window.addEventListener(event, resetTimer));
    // Start when page loads
    resetTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [showOverlay]);

  useEffect(() => {
  if (showOverlay && inactiveter === 0) {
    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:5000/api/Curl/fetch-ad");
        // console.log(result.data.ad_link,result.data.target_link);
        setAdlink(result.data.ad_link)
        settargetlink(result.data.ad_link)
        setinactiveter(1);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }
}, [showOverlay, inactiveter]);

const redirectto=()=>{
    window.location.href=targetlink;
}
  

  return (
    <div className="app">
      {children}

      {/* GLOBAL OVERLAY */}
      {showOverlay && (
        <div
          className=" fixed bg-black flex justify-center items-center z-100 inset-0"
          onClick={() => setShowOverlay(true),redirectto}
        >
          <div
            className="bg-white p-2 rounded-2xl text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Skip Timeing button */}
            {timesing && (
              <span
                className="absolute top-1.5 right-4 font-bold cursor-pointer hover:text-red-600"
                // onClick={() => setShowOverlay(false)}
              >
                {cundown}
              </span>
            )}

            {cross && (
              <span
                className="absolute top-1.5 right-4 font-bold cursor-pointer hover:text-red-600"
                onClick={closeOverlay}
              >
                &times;
              </span>
            )}

            <p className="mt-3">Ad run by dwarkesh and team</p>

            <div className="md:w-150 md:h-100 w-full h-96">
              <div className="w-full h-full bg-transparent absolute pr-4">
                <div className="w-full h-10 bg-black"></div>
              </div>
              <iframe
                width={"100%"}
                height={"100%"}
                frameborder="0"
                // src="https://mega.nz/embed/Hcs2UQob#Qphj3vweCFAj1ATE_y2nrx3qsrIpFVnJ4erIxhbQtvo!1a1m"
                // src="https://mega.nz/file/Hcs2UQob#Qphj3vweCFAj1ATE_y2nrx3qsrIpFVnJ4erIxhbQtvo"
                src={adlink}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ad_runner;
