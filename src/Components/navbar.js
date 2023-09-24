import React from "react";
import { useState } from "react";
import "./navbar.css"
function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar">
        <div className="logo-img">
          <a href="http://localhost:3000/ ">
            <img className="logo" src="logo.png" alt="logo" />
          </a>
        </div>
        <div className="menu-icon"><i className="bi-list"></i></div>
        <div className="menu ">
    
            
          <a className="menu-items" href="/">
            <div className="dropdown hover-blue ">HOME</div>{" "}
          </a>
          <div className="dropdown">
            <a onClick={toggleDropdown} href="/about">
              <div className="hover-blue menu-items">
                ABOUT US
                <i className="bi-chevron-down"></i>
              </div>
            </a>

            {isOpen && (
              <ul className="nav-submenu">
                <li>Overview</li>
                <li>Why Waterfront?</li>
                <li>Our Team</li>
              </ul>
            )}
          </div>
          <div className="dropdown">
            <a href="/investments">
              <div
                onClick={toggleDropdown}
                className="hover-blue menu-items"
              >
                INVESTMENTS
                <i className="bi-chevron-down"></i>
              </div>
            </a>

            {isOpen && (
              <ul className="nav-submenu">
                <li onClick={toggleDropdown} className="submenu">
                  <a className="submenu-path"   href="/equity">
                    Equity
                    <i className="bi-chevron-right"></i>
                  </a>
                  {isOpen && (
                    <ul className="sub-dropdown">
                      <li>Broking</li>
                      <li>Mutual Funds</li>
                      <li>PMS</li>
                      <li>AIF</li>
                      <li>Offshore Investments</li>
                      <li>Structured Products</li>
                      <li>Unlisted Shares</li>
                      <li>Private Equity</li>
                    </ul>
                  )}
                </li>

                <li onClick={toggleDropdown} className="submenu">
                <a className="submenu-path" href="/fixed-income"> Fixed Income<i className="bi-chevron-right"></i></a>
                  {isOpen && (
                    <ul className="sub-dropdown">
                      <li>Bonds</li>
                      <li>Mutual Funds</li>
                      <li>PMS</li>
                      <li>AIF</li>
                      <li>NCD</li>
                      <li>Structured Products</li>
                      <li>Preference Shares</li>
                    </ul>
                  )}{" "}
                </li>
                <li onClick={toggleDropdown} className="submenu">
                <a className="submenu-path" href="/insurance"> Insurance<i className="bi-chevron-right"></i></a>
                  {isOpen && (
                    <ul className="sub-dropdown">
                      <li>Term Insurance</li>
                      <li>ULIP</li>
                      <li>Traditional Plans</li>
                      <li>Health Insurance</li>
                      <li>Motor Insurance</li>
                      <li>General Insurance</li>
                      <li>Group Insurance</li>
                    </ul>
                  )}
                </li>
                <li onClick={toggleDropdown} className="submenu">
                <a className="submenu-path" href="/real-estate">Real Estate<i className="bi-chevron-right"></i></a>
                  {isOpen && (
                    <ul className="sub-dropdown">
                      <li>Adivisory</li>
                      <li>Structured Deals</li>
                      <li>PMS</li>
                      <li>AIF</li>
                      <li>Pre-leased Deals</li>
                      <li>Offshore Real Estate</li>
                    </ul>
                  )}
                </li>
                <li onClick={toggleDropdown} className="submenu">
                <a className="submenu-path" href="/residency-programs">Residency Programs<i className="bi-chevron-right"></i></a>
                  {isOpen && (
                    <ul className="sub-dropdown">
                      <li>Eb5 (USA)</li>
                      <li>Golden Visa (Europe)</li>
                      <li>UK Residency</li>
                      <li>Grenada Citizenship</li>
                      <li>Canada Residency</li>
                    </ul>
                  )}
                </li>
                <li onClick={toggleDropdown} className="submenu">
                <a className="submenu-path" href="/succession-planning">Succession Planning<i className="bi-chevron-right"></i></a>
                  {isOpen && (
                    <ul className="sub-dropdown">
                      <li>Wills</li>
                      <li>Trust</li>
                      <li>Inheritance</li>
                      <li>Tax Planning</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>
          <div className="dropdown">
            <a onClick={toggleDropdown} href="/loans">
              <div className="hover-blue menu-items">
                LOANS
                <i className="bi-chevron-down"></i>
              </div>
            </a>

            {isOpen && (
              <ul className="nav-submenu">
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
              <div className="hover-blue  menu-items">
                WORK WITH US
                <i className="bi-chevron-down"></i>
              </div>
            </a>
            {isOpen && (
              <ul className="nav-submenu">
                <li>Employement</li>
                <li>Internship</li>
                <li>Referral Partner</li>
              </ul>
            )}
          </div>
          <a className="menu-items" href="/reach-us">
            <div className="dropdown hover-blue">REACH US</div>{" "}
          </a>
          <a className="menu-items" href="/client-login">
            <div className="dropdown hover-blue">CLIENT LOGIN</div>{" "}
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
