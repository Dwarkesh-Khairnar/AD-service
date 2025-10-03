import React, { useState } from "react";
import vite from '../assets/react.svg'


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
     <div className=" bg-amber-400 h-72 w-[230%] mt-44 -ml-56 -rotate-45 md:h-[80%] md:-ml-[50%] md:mt-96 md:rotate-45 "></div>
    <img src={vite} alt="" />;
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
