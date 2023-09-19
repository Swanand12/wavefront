import React from "react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar">
        <div>
          <a href="http://localhost:3000/ ">
            <img className="logo" src="logo.png" alt="logo" />
          </a>
        </div>
        <div className="menu">
          <a className="padding-16px" href="/">
            <div className="dropdown header-menu ">HOME</div>{" "}
          </a>
          <div className="dropdown">
            <a onClick={toggleDropdown} href="/about">
              <div className="header-menu padding-16px">
                ABOUT US
                <i className="bi-chevron-down"></i>
              </div>
            </a>

            {isOpen && (
              <ul>
                <li>Overview</li>
                <li>Why Waterfront?</li>
                <li>Our Team</li>
              </ul>
            )}
          </div>
          <div className="dropdown">
            <a onClick={toggleDropdown} href="/investments">
              <div className="header-menu padding-16px">
                INVESTMENTS
                <i className="bi-chevron-down"></i>
              </div>
            </a>

            {isOpen && (
              <ul>
                <li>Equity</li>
                <li>Fixed Income</li>
                <li>Insurance</li>
                <li>Real Estate</li>
                <li>Residency Programs</li>
                <li>Succession Planning</li>
              </ul>
            )}
          </div>
          <div className="dropdown">
            <a onClick={toggleDropdown} href="/loans">
              <div className="header-menu padding-16px">
                LOANS
                <i className="bi-chevron-down"></i>
              </div>
            </a>

            {isOpen && (
              <ul>
                <li>Loan Against Property</li>
                <li>Loan Against Securities</li>
                <li>Home Loan</li>
                <li>Business Loan</li>
                <li>Working Capital</li>
                <li>Lease Rental Discounting</li>
                <li>ESOP Funding</li>
                <li>IPO Funding</li>
              </ul>
            )}
          </div>
          <div className="dropdown">
            <a onClick={toggleDropdown} href="/work-with-us">
              <div className="header-menu  padding-16px">
                WORK WITH US
                <i className="bi-chevron-down"></i>
              </div>
            </a>
            {isOpen && (
              <ul>
                <li>Employement</li>
                <li>Internship</li>
                <li>Referral Partner</li>
              </ul>
            )}
          </div>
          <a className="padding-16px" href="/reach-us">
            <div className="dropdown header-menu">REACH US</div>{" "}
          </a>
          <a className="padding-16px" href="/client-login">
            <div className="dropdown header-menu">CLIENT LOGIN</div>{" "}
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
