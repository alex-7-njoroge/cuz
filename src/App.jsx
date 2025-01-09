import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HerStory from "./HerStory";
import Gallery from "./Gallery";
import Timeline from "./Timeline";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HerStory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/timeline" element={<Timeline />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
