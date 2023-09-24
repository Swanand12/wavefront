import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Whatsapp from "../Components/whatsapp";
function RealEstate() {
    return(
        <>
        <Navbar/>
        <div className="real_estate">
        <img className="real_estate-img" src="real_estate-img.png" alt="real_estate-img"></img>
        <div className="real_estate-content-img">
       
          <img src="real_estate-content-img.jpg" alt="real_estate-content-img"></img>
        </div>
      </div>
      <Whatsapp />
        <Footer/>
        </>
    )
}

export default RealEstate;