import React from "react";
import Home from "../sub_components/meeting_home";

function claint_m_form() {
  return (
    <div className=" grid justify-center align-middle">
      <Home />

      <h1 className="ml-17 mt-10 mb-8 ab">Request for meeting</h1>
      <form action="" method="post" className="border-2 p-8 rounded-3xl">

    <div className="mb-7"> 
      <label htmlFor="Company-name" className="text-[14px] absolute ml-2.5 bg-amber-50 -m-2">Company Name</label>
      <input id="Company-name" type="text" name="name" className=" border-2 p-2"/>
    </div>

    <div className="mb-7"> 
      <label htmlFor="Company-mail" className="text-[14px] absolute ml-2.5 bg-amber-50 -m-2">Company Mail</label>
      <input id="Company-mail" type="text" name="name" className=" border-2 p-2"/>
    </div>

    <div className="mb-7"> 
      <label htmlFor="Company-web" className="text-[14px] absolute ml-2.5 bg-amber-50 -m-2">Company web</label>
      <input id="Company-web" type="text" name="name" className=" border-2 p-2"/>
    </div>

    <div className="mb-7"> 
      <label htmlFor="Representative-name" className="text-[14px] absolute ml-2.5 bg-amber-50 -m-2">Representative-Name</label>
      <input id="Representative-name" type="text" name="name" className=" border-2 p-2"/>
    </div>


      </form>
    </div>
  );
}

export default claint_m_form;
