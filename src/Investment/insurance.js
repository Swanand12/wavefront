import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Whatsapp from "../Components/whatsapp";
function Insurance() {
    return(
        <>
        <Navbar/>
        <div className="insurance">
        <img className="insurance_img" src="insurance_img.png" alt="insurance_img"></img>
        <div className="insurance_content-img">
       
          <img src="insurance_content-img.jpg" alt="insurance_content-img"></img>
        </div>
      </div>
      <Whatsapp />
        <Footer/>
        </>
    )
}

export default Insurance;