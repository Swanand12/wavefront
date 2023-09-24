import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

function ReachUs() {
  return (
    <>
      <Navbar />
      <div id="reach-us">
        <div className="container-1">
         
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29045.12486246187!2d72.78981477128877!3d18.970527822656653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWaterfront%20Capital%20Services%20LLP%2010%2C%20Mehta%20Bhavan%2C%20Ground%20Floor%2C%20Behind%20Saifee%20Hospital%2C%20Charni%20Road%2C%20Mumbai%20400%20004%2C%20India!5e1!3m2!1sen!2sin!4v1695316270623!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          
          <div className="send-msg">
            <li>
              <input className="details" type="text" placeholder="Name"></input>
            </li>
            <li>
              <input
                className="details"
                type="email"
                placeholder="Email"
              ></input>
            </li>
            <li>
              <input
                className="details"
                type="number"
                placeholder="Phone-no"
              ></input>
            </li>
            <li>
              <textarea className="message" placeholder="Message"></textarea>
            </li>
            <button>SUBMIT</button>
          </div>
        </div>
        <div className="container-2">
          <h4 className="padd-btm-20px">Head Office</h4>
          <div className="padd-btm-20px">
            <li>Waterfront Capital Services LLP</li>
            <li>10, Mehta Bhavan, Ground Floor,</li>
            <li>Behind Saifee Hospital, Charni Road,</li>
            <li>Mumbai 400 004, India</li>
          </div>
          <div className="padd-btm-20px">
            <li>
              <i className="bi-telephone-fill"></i>
              +91 22 4969 4083
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              support@waterfrontcapital.in
            </li>
          </div>

          <div className="padd-btm-20px">
            <h4 className="padd-btm-20px">Jay Shah</h4>
            <li>
              <i className="bi-telephone-fill"></i>
              +91 99875 42828
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              jay@waterfrontcapital.in
            </li>
          </div>
          <div>
            <h4 className="padd-btm-20px">Piyush Kothari</h4>
            <li>
              <i className="bi-telephone-fill"></i>
              +91 89760 21948
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              piyush@waterfrontcapital.in
            </li>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReachUs;
