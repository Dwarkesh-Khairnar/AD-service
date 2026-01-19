import React, { useEffect, useState } from "react";

function Plans() {
  const [clickcount, setclickcount] = useState(0);
  const [freetext, setfreetext] = useState("F");
  const [imprtiontext, setimpretiontext] = useState("I");
  const [daystext, setdaystext] = useState("D");

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
          <div
            className="h-10 w-10 rounded-tl-2xl rounded-bl-2xl items-center justify-center flex"
            onMouseLeave={() => {
              setimpretiontext("I");
            }}
            onMouseEnter={() => {
              setimpretiontext("Impri");
            }}
            onClick={() => {
              setclickcount(30);
            }}
          >
            {imprtiontext}
          </div>
          <div
            className="h-10 w-10 border-gray-500 items-center justify-center flex"
            onMouseLeave={() => {
              setdaystext("D");
            }}
            onMouseEnter={() => {
              setdaystext("Days");
            }}
            onClick={() => {
              setclickcount(20);
            }}
          >
            {daystext}
          </div>
          <div
            className="h-10 w-10 rounded-br-2xl rounded-tr-2xl items-center justify-center flex"
            onMouseLeave={() => {
              setfreetext("F");
            }}
            onMouseEnter={() => {
              setfreetext("Free");
            }}
            onClick={() => {
              setclickcount(10);
            }}
          >
            {freetext}
          </div>
        </div>
        <div
          className={`h-10 w-10 border rounded-3xl absolute shadow-inner shadow-white right-${clickcount} -z-10`}
        ></div>
      </div>

      {/* Free section  */}
      {/*<div className="flex justify-center mb-12">
        <span className="font-bold md:text-[35px] text-[25px] text-amber-600">
          Free plans for students
        </span>
      </div>
       <div className="flex flex-col md:flex-row gap-10 justify-center align-middle items-center h-full w-screen">
        <div className="h-90 w-70 rounded-2xl shadow-amber-400 shadow grid place-items-center hover:-translate-y-2">
          <p className="text-3xl ">
            ₹0<span className="text-[12px]">/mo</span>
          </p>
          <div className="justify-self-start pl-6 ">
            {" "}
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Free 50 impreations
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              One time start
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Code snippets
            </p>
            <p>
              <span className="text-red-600 font-extrabold text-2xl">✗</span> No
              contact support
            </p>
            <p>
              <span className="text-red-600 font-extrabold text-2xl">✗</span> No
              dashabord
            </p>{" "}
          </div>{" "}
          <button className="p-3 px-4 bg-amber-500 rounded cursor-pointer hover:bg-indigo-600 hover:text-amber-50">
            Select
          </button>
        </div>
        <div className="h-90 w-70 rounded-2xl shadow-amber-400 shadow grid place-items-center hover:-translate-y-2">
          <p className="text-3xl ">
            ₹0<span className="text-[12px]">/mo</span>
          </p>
          <div className="justify-self-start pl-6 ">
            {" "}
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Free 15 Days
            </p>{" "}
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              7 Requast at day
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              One time start
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Code snippets
            </p>
            <p>
              <span className="text-red-600 font-extrabold text-2xl">✗</span> No
              contact support
            </p>
            <p>
              <span className="text-red-600 font-extrabold text-2xl">✗</span> No
              dashabord
            </p>{" "}
          </div>{" "}
          <button className="p-3 px-4 bg-amber-500 rounded cursor-pointer hover:bg-indigo-600 hover:text-amber-50">
            Select
          </button>
        </div>
      </div> */}

      {/* Days section */}
      <div className="flex justify-center mb-12">
        <span className="font-bold md:text-[35px] text-[25px] text-amber-600">
          Plan for days
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center align-middle items-center h-full w-screen">
        <div className="h-90 w-70 rounded-2xl shadow-amber-400 shadow grid place-items-center hover:-translate-y-2">
          <p className="text-3xl ">
            ₹70<span className="text-[12px]">/mo</span>
          </p>
          <div className="justify-self-start pl-6 ">
            {" "}
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              150 impreations
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              24/7 Contact
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Code snippets
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Sepret dashabord
            </p>
            <p>
              <span className="text-red-600 font-extrabold text-2xl">✗</span>{" "} 
              Email notification support
            </p>{" "}
          </div>{" "}
          <button className="p-3 px-4 bg-amber-500 rounded cursor-pointer hover:bg-indigo-600 hover:text-amber-50">
            Select
          </button>
        </div>
        <div className="h-90 w-70 rounded-2xl shadow-amber-400 shadow grid place-items-center hover:-translate-y-2">
          <p className="text-3xl ">
            ₹170<span className="text-[12px]">/mo</span>
          </p>
          <div className="justify-self-start pl-6 ">
            {" "}
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              350 impreations
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              24/7 Contact
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Code snippets
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Sepret dashabord
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "} 
              Email notification support
            </p>{" "}
          </div>{" "}
          <button className="p-3 px-4 bg-amber-500 rounded cursor-pointer hover:bg-indigo-600 hover:text-amber-50">
            Select
          </button>
        </div>

         <div className="h-90 w-70 rounded-2xl shadow-amber-400 shadow hover:shadow-blue-500 grid place-items-center hover:-translate-y-2">
          <p className="text-3xl ">
            Custome Plan
          
          </p>
          <div className="justify-self-start pl-6 ">
            {" "}
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              You deside days Count
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              You deside price
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              24/7 Contact
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "}
              Sepret dashabord
            </p>
            <p>
              <span className="text-blue-600 font-extrabold text-2xl">✓</span>{" "} 
              You deside notification type
            </p>{" "}
          </div>{" "}
          <button className="p-3 px-4 bg-amber-500 rounded cursor-pointer hover:bg-indigo-400 hover:text-amber-50">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
