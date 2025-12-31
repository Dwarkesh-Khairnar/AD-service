import React, { useEffect } from "react";

function fileuploade() {

  function test() {
    console.log('test');
    
  }
  return (
    <div className="h-full w-full bg-amber-600 flex absolute justify-center items-center">
      <div className="md:w-150 md:h-100 w-full h-96">
        <iframe
          width={"100%"}
          height={"100%"}
          frameborder="0"
          src="https://mega.nz/embed/Hcs2UQob#Qphj3vweCFAj1ATE_y2nrx3qsrIpFVnJ4erIxhbQtvo!1a1m"
          // src="https://mega.nz/file/Hcs2UQob#Qphj3vweCFAj1ATE_y2nrx3qsrIpFVnJ4erIxhbQtvo"
          allowfullscreen
        ></iframe>
      </div>

      {/* <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Ad Display</h1>
      {videoLink ? (
        <video controls className='rounded-lg border shadow-md'>
        <source src={videoLink} type="video/mp4" />
        </video>
        ) : 'Loading...'}
        </div> */}
      <div className="md:w-150 md:h-100 w-full h-96 bg-transparent absolute">
        <div className="md:w-150 md:h-10 w-full h-10 bg-black absolute flex justify-end pt-1 pr-1.5">
          <span id="Stopad" className="z-20 cursor-pointer" onClick={test}>&#x274c;</span>
        </div>
      </div>
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
