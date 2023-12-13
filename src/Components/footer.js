import React from "react";
import "./footer.css";

// import "./images"
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="container-1">
            <div className="head-office box">
              <h4>HEAD OFFICE</h4>
              <div className="padd-btm-16px">
                <li>Waterfront Capital Services LLP</li>
                <li>10, Mehta Bhavan, Ground Floor,</li>
                <li>Behind Saifee Hospital, Charni Road,</li>
                <li>Mumbai 400 004, India</li>
              </div>
              <div className="padd-btm-16px">
                <li>
                  <i className="fa fa-phone"></i>
                  <span>+91 22 4969 4083</span>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <span>support@waterfrontcapital.in</span>
                </li>
              </div>
              <div className="head-office-links">
                <a href="www.facebook.com">
                  <div className="bg-i facebook">
                    <i className="fa fa-facebook margin-0"></i>
                  </div>
                </a>
                <a href="www.instagram.com">
                  <div className="bg-i instagram">
                    <i className="fa fa-instagram margin-0"></i>
                  </div>
                </a>
                <a href="www.twitter.com">
                  <div className="bg-i twitter">
                    <i className="fa fa-twitter margin-0"></i>
                  </div>
                </a>
                <a href="www.linkedin.com">
                  <div className="bg-i linkedin">
                    <i className="fa fa-linkedin margin-0"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="association box">
              <h4>ASSOCIATION</h4>
              <div className="ass-img">
                <div className="ass-img-col1">
                  <img src="ass-img1.jpeg" alt="ass-img1"></img>
                  <img src="ass-img2.jpeg" alt="ass-img2"></img>
                  <img src="ass-img3.jpeg" alt="ass-img3"></img>
                </div>
                <div className="ass-img-col1">
                  <img src="ass-img4.jpeg" alt="ass-img4"></img>
                  <img
                    className="ass-img5"
                    src="ass-img5.jpeg"
                    alt="ass-img5"
                  ></img>
                  <p>& many more..</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reach-us box">
            <h4>REACH US</h4>
            <div className="padd-btm-16px">
              <h4>Jay Shah</h4>
              <li>
                <i className="fa fa-phone"></i>
                <span>+91 99875 42828</span>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span>jay@waterfrontcapital.in</span>
              </li>
            </div>
            <div>
              <h4>Piyush Kothari</h4>
              <li>
                <i className="fa fa-phone"></i>
                <span>+91 89760 21948</span>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span>piyush@waterfrontcapital.in</span>
              </li>
            </div>
          </div>
        </div>
        <div className="copywright">
          <p>
            Copyright © 2021 Wealth Management & Loans | Powered by Waterfront
            Capital Services LLP
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
