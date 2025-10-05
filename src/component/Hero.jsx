import React, { useState } from "react";
import vite1 from "../assets/man_see_the_wall.svg"

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
    <section className=" bg-teal-300 text-center mb-2 h-screen overflow-hidden">
     <div className=" bg-amber-400 h-72 w-[230%] mt-44 -ml-60 -rotate-45 md:h-[80%] md:-ml-[50%] md:mt-96 md:rotate-45">
    <h4 className=" absolute top-100 start-50 font-bold text-6xl text-white mask-linear-from-amber-700 w-2x1 mix-blend-color rotate-45  md:w-3x1 md:">WE ARE AD SARVICE PROVADER</h4>
    <h4 className=" absolute rotate-45 md:-rotate-45 font-bold text-6xl w-2x1 text-teal-600 mix-blend-color " style={{top:'20%',left:'20%'}}>WE ARE AD SARVICE PROVADER</h4>
    <p className=" absolute bottom-1  -rotate-45 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum pariatur sapiente accusamus, quo voluptate iusto deserunt cum iure! Esse ipsam repellat porro, tempora facere tempore dolores repudiandae iure tenetur quia! Ea voluptatum aliquam consequatur expedita unde harum architecto ratione ipsa.</p>
    </div>
    <img src={vite1} alt="" className=" absolute top-90 w-60 end-17 md:w-100" />;
    </section>
  );
}

const handleHeroSubmit = async (data) => {
  try {
    const res = await fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setResponse(result.message);
  } catch (err) {
    setResponse("Error sending data ❌");
  }
};


export default Hero;
