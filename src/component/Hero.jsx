import React, { useState } from "react";


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
    <section className=" p-2 bg-cyan-600 text-center mb-2">
      <h2>Hero Section 🚀</h2>
      <form onSubmit={handleSubmit} className=" flex justify-center gap-1 mt-1">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send</button>
      </form>
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
