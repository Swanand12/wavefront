import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Whatsapp from "./Components/whatsapp";
function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <img className="about-img" src="about-img.png" alt="about-img"></img>
        <div className="overview">
          <div className="overview-content">
            <h3>Overview</h3>
            <p>
              Living a corporate life was keeping us all too much busy and
              occupied with loads of unavoidable things coming on our way. Due
              to this heavy engagement, we could not find time to add real value
              to our client’s requirements at large.<br></br>
              After working for over a decade now, Piyush Kothari and Jay Shah
              decided to come together for providing clients a platform with
              world class infrastructure in the Financial Services domain.
              Waterfront Capital is the idea incubated for over 6 months before
              being available for clients in 2021.
            </p>
          </div>
          <div className="overview-img">
            <img src="about-overview-img.jpg" alt="about-overview-img"></img>
          </div>
        </div>
      </div>
      <Whatsapp/>
      <Footer />
    </>
  );
}

export default About;
