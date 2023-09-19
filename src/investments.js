import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { BrowserRouter as Router,Navlink } from "react-router-dom";
function Investments() {
    return(
        <>
        <Navlink to="/investments">
        {/* <Navbar/> */}

        <Footer/>
        </Navlink>
        </>
    )
}

export default Investments;