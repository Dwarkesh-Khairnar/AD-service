import React from "react";

function fileuploade() {
  return (
    <div className="h-full w-full bg-amber-600 flex absolute justify-center items-center">
      <div className="md:w-150 md:h-100 w-full h-96">
        <div className="md:w-150 md:h-10 w-full h-10 bg-black absolute"></div>
        <iframe
          width={"100%"}
          height={"100%"}
          frameborder="0"
          src="https://mega.nz/embed/Hcs2UQob#Qphj3vweCFAj1ATE_y2nrx3qsrIpFVnJ4erIxhbQtvo!1a1m"
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
      {/* <div className="h-full w-full bg-amber-50 "></div> */}
    </div>
  );
}

export default fileuploade;
