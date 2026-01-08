import React, { useEffect, useRef, useState } from "react";

function ad_runner() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [timesing, setTimesing] = useState(true);
  const [cross, setCross] = useState(false);
  const [cundown, setCundown] = useState("");
  // const [active, setActive] = useState(true);
  const timerRef = useRef(null);
  const inactivity_time = 5000;
  const skiptime = 10;
  let skiptimetemp = skiptime;

  // Skip button display timeing
  const skipstart = () => {
    setShowOverlay(true);
    for (let index = skiptime; index >= 0; index--) {
      setTimeout(() => {
        // console.log("timeout:", index);
        setCundown(index);
        if (index == 0) {
          setTimesing(false);
          setCross(true);
        }
      }, (skiptimetemp - index) * 1000);
    }
  };
  const testfunction = () => {
    setShowOverlay(false);
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    // setShowOverlay(false);

    timerRef.current = setTimeout(() => {
      setShowOverlay(true);
      skipstart();
      console.log("No interaction for 5 seconds");
    }, inactivity_time);
  };

  useEffect(() => {
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
  }, []);

  return (
    <div className="app">
      {/* <div>
        <div
          className="p-10 bg-violet-400 h-30 w-60 m-40"
          onClick={() => {
            skipstart();
          }}
        >
          Open Overlay
        </div>
      </div> */}

      {/* GLOBAL OVERLAY */}
      {showOverlay && (
        <div
          className=" fixed bg-black flex justify-center items-center z-100 inset-0"
          onClick={() => setShowOverlay(true)}
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
                onClick={testfunction}
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
                src="https://mega.nz/embed/Hcs2UQob#Qphj3vweCFAj1ATE_y2nrx3qsrIpFVnJ4erIxhbQtvo!1a1m"
                // src="https://mega.nz/file/Hcs2UQob#Qphj3vweCFAj1ATE_y2nrx3qsrIpFVnJ4erIxhbQtvo"
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
