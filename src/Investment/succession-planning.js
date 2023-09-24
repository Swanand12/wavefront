import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Whatsapp from "../Components/whatsapp";
function SuccessionPlanning() {
    return(
        <>
        <Navbar/>
        <div className="succession_planning">
        <img className="succession_planning-img" src="succession_planning-img.png" alt="succession_planning-img"></img>
        <div className="succession_planning-content-img">
       
          <img src="succession_planning-content-img.jpg" alt="succession_planning-content-img"></img>
        </div>
      </div>
      <Whatsapp />
        <Footer/>
        </>
    )
}

export default SuccessionPlanning;