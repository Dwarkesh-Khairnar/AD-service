import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Header from "./component/Header";
import Hero from "./component/Hero";
import Schedule from "./component/Schedule";
import Plans from "./component/Plans";
import Services from "./component/Services";
import Client from "./sub_components/Client_m_form.jsx";
import Meetjoin from "./sub_components/join.jsx";

function App() {
  const [response, setResponse] = useState("");

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

  return (
    <Router>
      {" "}
      {/* Wrap your application in Router */}
      <div style={{ fontFamily: "sans-serif" }}>
        <Header />
        {/* <Hero/> */}
        <div style={{ padding: "2rem", textAlign: "center" }}>
          {response && <p>{response}</p>}
        </div>
        <Routes>
          <Route path="" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/meetjoin" element={<Meetjoin />} />
          <Route path="/client" element={<Client />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
