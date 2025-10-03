import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Header from "./component/Header";
import Hero from "./component/Hero";
import Schedule from "./component/Schedule"; // Assuming you have this component
import Services from "./component/Services"; // Example component for services
import Plans from "./component/Plans"; // Example component for plans
import Dashboard from "./component/Dashboard"; // Example component for dashboard

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
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
