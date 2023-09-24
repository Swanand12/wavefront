import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Whatsapp from "../Components/whatsapp";
function Equity() {
    return(
        <>
        <Navbar/>
        <div className="equity">
        <img className="equity-img" src="equity-img.png" alt="equity-img"></img>
        <div className="equity-content-img">
       
          <img src="equity-content-img.jpg" alt="equity-content-img"></img>
        </div>
      </div>
      <Whatsapp />
        <Footer/>
        </>
    )
}

export default Equity;