import React, { useState } from "react";
import Hero_svg from "../assets/man_see_the_wall.svg";
import { Link } from "react-router-dom";

function Hero({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <>
      <section className=" bg-teal-300 text-center mb-2 h-screen overflow-hidden justify-center">
        <div className=" bg-amber-400 h-72 w-[230%] mt-44 -ml-60 -rotate-45 md:h-[80%] md:-ml-[50%] md:mt-96 md:rotate-45">
          <h4 className=" absolute top-100 start-50 font-bold text-6xl text-white mask-linear-from-amber-700 w-2x1 mix-blend-color rotate-45  md:w-3x1 md:">
            WE ARE AD SARVICE PROVADER
          </h4>
          <h4 className=" absolute w-1/3 font-bold text-5xl top-[-20%] start-[50%] text-teal-600 mix-blend-color rotate-45 md:-rotate-45 md:text-6xl md:top-[20%] md:start-[18%]">
            WE ARE AD SARVICE PROVADER
          </h4>
        </div>
        <p className=" absolute mix-blend-multiply text-amber-600 md:text-emerald-700 start-10 top-70 w-[80%] md:top-80 md:w-[53%] md:start-1/8 md:mix-blend-color">
          At x.ads, we provide innovative ad services designed to boost your
          brand's visibility. Our expert team crafts tailored strategies that
          engage your audience and maximize results. Let us elevate your
          advertising experience!.
        </p>
        <button className=" absolute start-[36%] top-112 bg-teal-400 rounded-md text-red-50 p-3 md:start-1/3 md:text-2xl md:top-110 ">
          <Link rel="stylesheet" to="/plans">Get Start</Link> 
        </button>
        <img
          src={Hero_svg}
          alt=""
          className="absolute end-[18%] w-60 md:top-90 md:end-17 md:w-100"
        />
        ;
      </section>

      {/* What we do Section */}
      <section>
      <div className=" bg-amber-400 h-screen w-[100%] overflow-y-hidden">
        <div className=" z-10 bg-teal-300 h-72 w-[230%] top-269 start-0 md:h-[80%] md:-ml-[50%] md:mt-96 ">
          <p className="font-bold text-3xl text-amber-500 ">What we do?</p>
          <div className="flex w-full">
            <div className="w-50">a</div>
            <div className="w-50">a</div>
            <div className="w-50">a</div>
            <div className="w-50">a</div>
        </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
