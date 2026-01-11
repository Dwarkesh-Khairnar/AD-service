import React, { useEffect, useState } from "react";

function Plans() {
  const [clickcount, setclickcount] = useState(0)
  
  // useEffect(() => {
  //   if (condition) {
      // 2.5rem
    // } else if(a) {
      // 5rem
  //   }else{
// 7.5 rem
  //   }
  
  //   return () => {
  //     second
  //   }
  // }, [])
  
  return (
    <div>
      <div className="flex justify-end p-10">
        <div className="h-10 w-30 flex border rounded-3xl shadow-gray-600 shadow-inner">
          {" "}
          <div className="h-10 w-10 rounded-tl-2xl rounded-bl-2xl items-center justify-center flex" onClick={()=>{setclickcount(30)}}>F</div>
          <div className="h-10 w-10 border-gray-500 items-center justify-center flex" onClick={()=>{setclickcount(20)}}>D</div>
          <div className="h-10 w-10 rounded-br-2xl rounded-tr-2xl items-center justify-center flex" onClick={()=>{setclickcount(10)}}>I</div>
        </div>
          <div className={`h-10 w-10 border rounded-3xl absolute shadow-inner shadow-white right-${clickcount}`}></div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center align-middle items-center h-full w-screen">
        <div>Plan</div>
        <div>Plan</div>
        <div>Plan</div>
      </div>
    </div>
  );
}

export default Plans;
