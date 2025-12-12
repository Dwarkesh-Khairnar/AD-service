import React from "react";
import copy from "../assets/copy.svg";

function Key() {
  return (
    <div className="w-full h-full pt-10 pl-2">
      <div>
        <button type="button" className="bg-amber-500 p-2 rounded-bl-2xl text-amber-50 font-bold">Create Key</button>
      </div>

      <div className=" mt-4">
        Your Api Key: 
        <div className="w-60 h-10 border flex justify-between items-center p-1.5">

        <div className="w-50 h-7 border text-gray-500 font-semibold">879y3fr87gfufiuid85g4</div>
        <button type="button" className=" cursor-pointer">
          <img src={copy} alt="" className="w-6 h-5" />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Key;
