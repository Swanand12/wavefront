import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Whatsapp from "../Components/whatsapp";
function ResidencyPrograms() {
    return(
        <>
        <Navbar/>
        <div className="residency_programs">
        <img className="residency_programs-img" src="residency_programs-img.png" alt="residency_programs-img"></img>
        <div className="residency_programs-content-img">
       
          <img src="residency_programs-content-img.jpg" alt="residency_programs-content-img"></img>
        </div>
      </div>
      <Whatsapp />
        <Footer/>
        </>
    )
}

export default ResidencyPrograms;