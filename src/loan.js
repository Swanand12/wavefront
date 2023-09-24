import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Whatsapp from "./Components/whatsapp";

function Loan() {
  return (
    <>
      <Navbar />
      <div className="loan">
        <img className="loan-img" src="loan-img.png" alt="loan-img"></img>
        <div className="loan-content-img">
       
          <img src="loan-content-img.jpg" alt="loan-content-img"></img>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Loan;
