
import React, { useEffect,useState } from "react";

function fileuploade() {
 const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="app">
      <div>
        <div
          className="p-10 bg-violet-400 h-30 w-60 m-40"
          onClick={() => setShowOverlay(true)}
        >
          Open Overlay
        </div>
      </div>

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
            <span
              className="absolute top-1.5 right-4 font-bold cursor-pointer hover:text-red-600"
              onClick={() => setShowOverlay(false)}
            >
              &times;
            </span>
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

export default fileuploade;

// import React, { useState, useEffect } from 'react';

// const SpamTag = () => {
//   const [isHidden, setIsHidden] = useState(false);
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     // Show the button after 7 seconds when the app starts
//     const timer = setTimeout(() => {
//       setShowButton(true); // Show the button after 7 seconds
//     }, 7000); // 7000 milliseconds = 7 seconds

//     // Cleanup timeout on component unmount
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClick = () => {
//     setIsHidden(true); // Hide the divs immediately
//     setShowButton(false); // Hide the button
//   };

//   return (
//     <div>
//       {showButton && (
//         <button onClick={handleClick}>
//           Hide Spam
//         </button>
//       )}

//       {!isHidden && (
//         <>
//           <div style={{ border: '1px solid red', margin: '10px', padding: '10px' }}>
//             <p>This is the first spam div.</p>
//           </div>

//           <div style={{ border: '1px solid blue', margin: '10px', padding: '10px' }}>
//             <p>This is the second spam div.</p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SpamTag;
