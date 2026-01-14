import React, { useEffect, useState } from "react";

function Plans() {
  const [clickcount, setclickcount] = useState(0)
  const [freetext, setfreetext] = useState('F')
  const [imprtiontext, setimpretiontext] = useState('I')
  const [daystext, setdaystext] = useState('D')
  
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
    <div className=" mb-10">
      <div className="flex justify-end p-10">
        <div className="h-10 w-30 flex border rounded-3xl shadow-gray-600 shadow-inner">
          {" "}
          <div className="h-10 w-10 rounded-tl-2xl rounded-bl-2xl items-center justify-center flex" onMouseLeave={()=>{setimpretiontext("I")}} onMouseEnter={()=>{setimpretiontext("Impri")}} onClick={()=>{setclickcount(30)}}>{imprtiontext}</div>
          <div className="h-10 w-10 border-gray-500 items-center justify-center flex"             onMouseLeave={()=>{setdaystext("D")}}      onMouseEnter={()=>{setdaystext("Days")}}       onClick={()=>{setclickcount(20)}}>{daystext}</div>
          <div className="h-10 w-10 rounded-br-2xl rounded-tr-2xl items-center justify-center flex" onMouseLeave={()=>{setfreetext("F")}}      onMouseEnter={()=>{setfreetext("Free")}}       onClick={()=>{setclickcount(10)}}>{freetext}</div>
        </div>
          <div className={`h-10 w-10 border rounded-3xl absolute shadow-inner shadow-white right-${clickcount} -z-10`}></div>
      </div>

      <div className="flex justify-center mb-12">
        <span className="font-bold md:text-2xl text-[20px] text-blue-500">Free plans for students</span>
      </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center align-middle items-center h-full w-screen">
          
        <div className="h-90 w-60 rounded-2xl border grid place-items-center"><p className="text-3xl ">₹0<span className="text-[12px]">/mo</span></p><div className="justify-self-start pl-6 "> <p>✔️ Free 50 impreations</p><p>✔️ One time start</p><p>✔️ Code snippets</p><p>❌ No contact support</p><p>❌ No dashabord</p> </div> <button className="p-3 px-4 bg-blue-500 rounded cursor-pointer hover:bg-indigo-600 hover:text-amber-50">Select</button></div>
        <div className="h-90 w-60 rounded-2xl border grid place-items-center"><p className="text-3xl ">₹0<span className="text-[12px]">/mo</span></p><div className="justify-self-start pl-6 "> <p>✔️ Free 15 Days</p>       <p>✔️ One time start</p><p>✔️ Code snippets</p><p>❌ No contact support</p><p>❌ No dashabord</p> </div> <button className="p-3 px-4 bg-blue-500 rounded cursor-pointer hover:bg-indigo-600 hover:text-amber-50">Select</button></div>
      </div>
    </div>
  );
}

export default Plans;
