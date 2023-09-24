import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Whatsapp from "../Components/whatsapp";
function FixedIncome() {
    return(
        <>
        <Navbar/>
        <div className="fixed_income">
        <img className="fixed_income-img" src="fixed_income-img.png" alt="fixed_income-img"></img>
        <div className="fixed_income-content-img">
       
          <img src="fixed_income-content-img.jpg" alt="fixed_income-content-img"></img>
        </div>
      </div>
      <Whatsapp />
        <Footer/>
        </>
    )
}

export default FixedIncome;