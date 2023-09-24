import React from "react";
import "./App.css";
import Home from "./home";
import About from "./about";
import Investments from "./investments";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loan from "./loan";

import ReachUs from "./reach-us";

import Wwu from "./work-with-us";
import Equity from "./Investment/equity";
import FixedIncome from "./Investment/fixed-income";
import Insurance from "./Investment/insurance";
import RealEstate from "./Investment/real-estate";
import ResidencyPrograms from "./Investment/residency-programs";
import SuccessionPlanning from "./Investment/succession-planning";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Investments" element={<Investments />} />
     
          <Route path="/equity" element={<Equity />} />
          <Route path="/fixed-income" element={<FixedIncome />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/residency-programs" element={<ResidencyPrograms />} />
          <Route path="/succession-planning" element={<SuccessionPlanning />} />
     
        <Route path="/loans" element={<Loan />} />
        <Route path="/work-with-us" element={<Wwu />} />
        <Route path="/reach-us" element={<ReachUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
