import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Header from "./Pages/Header";
import Hero from "./Pages/Hero";
import Schedule from "./Pages/Schedule";
import Plans from "./Pages/Plans";
import Services from "./Pages/Services";
import Client from "./Components/Client_m_form.jsx";
import Meetjoin from "./Components/join.jsx";
import Loding from "./Components/loding.jsx";
import Docs from './Pages/Docs.jsx';
import Fileuploade from './Components/fileuploade.jsx';
import AdUpload from "./Components/ad_upload.jsx";
import KeyPage from "./Components/Key.jsx";

function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data loading operation
    const loadData = async () => {
      // Simulating a delay (e.g., fetching data)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay
      setLoading(false); // Set loading to false after data is "loaded"
    };

    loadData();
  }, []);

  
  return (
//  <div>
//    <AdUpload/>
//    {/* <Fileuploade/> */}
// </div> 

   
  
    <Router>
      {loading ? (
          <Loding />
        ) : (
        
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
            <Route path="/docs" element={<Docs />} />
            <Route path="/contact" element={<Hero />} />
            <Route path="/adupload" element={<AdUpload/>} />
            <Route path="/key_page" element={<KeyPage/>} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </div>
        )}
      </Router>
    );
  }
  
  export default App;
  
  // const handleHeroSubmit = async (data) => {
  //   try {
  //     const res = await fetch("http://localhost:5000/api/submit", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     const result = await res.json();
  //     setResponse(result.message);
  //   } catch (err) {
  //     setResponse("Error sending data ❌");
  //   }
  // };