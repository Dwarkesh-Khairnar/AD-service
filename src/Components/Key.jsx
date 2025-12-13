import React, { useState } from "react";
// import copy from "../assets/copy.svg";

function Key() {
  const [svg, setSvg] = useState(1);
  const svgs = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#03bc03">
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
      <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
    </svg>,
  ];

  const Chenge=()=>{
    setSvg((index)=>(index+1)%svgs.length);
    
    setTimeout(() => {
      setSvg((index)=>(index+1)%svgs.length);
    }, 4000);
  }
  return (
    <div className="w-full h-full pt-10 pl-2">
      <div>
        <button
          type="button"
          className="bg-amber-500 p-2 rounded-bl-2xl text-amber-50 font-bold"
        >
          Create Key
        </button>
      </div>

      <div className="flex mt-4">
        <b> Your Api Key:</b>
        <div className="w-60 h-10 border-2 flex justify-between items-center p-1.5 ml-4">
          <div className="w-50 h-7 border-2 text-gray-500 font-semibold pl-2">
            879y3fr87gfufiuid85g4
          </div>
          <div name="CpoyButton" className="h-5 w-5 cursor-pointer" onClick={Chenge}>
            {svgs[svg]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Key;
