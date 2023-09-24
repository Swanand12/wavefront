import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Whatsapp from "./Components/whatsapp";
import { useState } from "react";
function Wwu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar />
      <div className="work-with-us">
        <div className="contents-col1">
          <div className="box box-1">
            <div className=" employment-heading" onClick={toggleDropdown}>
              <i className="bi-chevron-down"> </i>
              <h3>Employment</h3>
            </div>
            {isOpen && (
              <ul className="employment-content">
                <br></br>
                <li>
                  What makes a great career anywhere? Before which let us wonder
                  whether great careers are born or made? At Waterfront Capital,
                  they are both born and made. Because when you’re at Waterfront
                  Capital, you’re already at the next level of technology and
                  innovation. And we provide you with every possible opportunity
                  to inspire you – to make you go beyond what you think might be
                  possible.
                </li>
                <br></br>
                <li>
                  If someone dreams of the world as a playground, he/she
                  definitely need the best coaching. This is exactly what you
                  can expect at Waterfront Capital. Whether it’s helping you
                  becoming better at what you’re already good at, or helping you
                  discover what you’re the best at, we have the right plan and
                  programs for you and your intellect. We have all the
                  definitions of growth in terms of going vertical, lateral,
                  incremental or exponential.
                </li>
              </ul>
            )}
          </div>
          <div className="box box-2">
            <div className=" internship-heading" onClick={toggleDropdown}>
              <i className="bi-chevron-down"> </i>
              <h3>Internship</h3>
            </div>
            {isOpen && (
              <ul className="internship-content">
                <br></br>
                <li>
                  We believe that no organization can function without interns.
                  They are the building blocks of the future (and also the ones
                  who do all the jobs which at times no one else wants to). We
                  offer serious internship program and also confess that some of
                  the best work that has happened in our company has been done
                  by Interns.
                </li>
                <br></br>
                <li>
                  For getting best of the experience while interning with us, go
                  through the list of personal advices from our side.
                </li>
                <br></br>
                <li>
                  Make sure you always reflect how creative, dedicated and hard
                  working you are.
                </li>
                <br></br>{" "}
                <li>Please avoid following descriptions in your resume;</li>
                <br></br> <li>“I want to put my sincere efforts…..”</li>
                <br></br> <li>“I co-relate my goals in sync with…”</li>{" "}
                <br></br>
                <li>“I wish to give a kick start to my career..” etc</li>{" "}
                <br></br>
                <li>
                  We offer internship programs to students showing highest level
                  of seriousness and discipline in execution of work.
                </li>
                <br></br>
                <li>
                  {" "}
                  Enjoy the work and make sure you keep no commitments apart
                  from us because we are going to keep you engaged 24*7.
                </li>
                <br></br>{" "}
                <li>
                  We accept interns of all mentality, attitude, shapes and sizes
                  for any department be it design, marketing, finance,
                  purchasing, etc.
                </li>
              </ul>
            )}
          </div>
          <div className="box box-3">
            <div className=" referral-partner-heading" onClick={toggleDropdown}>
              <i className="bi-chevron-down"> </i>
              <h3>Referral Partner</h3>
            </div>
            {isOpen && (
              <ul className="referral-partner-content">
                <br></br>
                <li>
                  It has always been our endeavour to make suitable investment
                  avenues available to investor’s right up to the last mile.
                  With this in focus, we provide a lucrative business
                  opportunity to individual and companies to use our
                  distribution platform.
                </li>
                <br></br>
                <li>
                  Our Business Affiliates can cater to clients with financial
                  objectives in the secondary markets and primary market with
                  products like mutual fund, PMS, AIF, structure product,
                  various loans, all types of insurance and investment based
                  immigration visas.
                </li>
                <br></br>
                <li>
                  With over 20 years of experience in the financial markets
                  domain, we provide our Partners with expertise & vast bouquet
                  of products and services, in-depth research, robust
                  technology, secure risk management system and dedicated
                  business development support which drives their business
                  successfully.
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="contents-col2">
          <p className="content">
            We appreciate your expression of interest towards getting an
            association with Waterfront Capital. We also congratulate you since
            your selection here will guarantee you a career with learning and
            grilling experience. Kindly fill in the details below and submit.
          </p>
          <div className="details">
            <input placeholder="Name" type="text"></input>
            <input placeholder="Email" type="email"></input>
            <input placeholder="Phone-no" type="number"></input>
          </div>
          <div className="upload-file">
            <p>Resume/CV</p>
           
            <input className="file" type="file"></input>
           
          </div>
          <button>SUBMIT</button>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Wwu;
