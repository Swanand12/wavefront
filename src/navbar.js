
import React from "react";

function Navbar(About) {
  return (
    <>
      <div className="navbar">
        <div>
          <a href="http://localhost:3000/ ">
            <img src="logo.png" alt="logo" />
          </a>
        </div>
        <div>
          <nav>
            <li>HOME</li>
            <div>
            <li className="sidebar">ABOUT US</li>
            <i></i>
            </div>
            <ul>
              <li>overview</li>
              <li>why waterfront</li>
              <li>Our Team</li>
            </ul>
            <li>INVESTMENTS</li>
            <li>LOANS</li>
            <li>WORK WITH US</li>
            <li>REACH US</li>
            <li>CLIENT LOGIN</li>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
