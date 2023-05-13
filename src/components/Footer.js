import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./CSS/Footer.css";


const Footer = () => {

  return (
  <div className="footer-nav" id="copyright">
      <nav className="footer-navbar">
        <div className="footer-nav-menu">
          <div className="footer-copyright">
            <p className="footer-text">Copyright <FaCopyright size={14} style={{color: "black" }} />  2021 | All Rights Reserved.| Fierce Generation, LLC </p>
          </div>
        </div>
      </nav>
  </div>
  );
};


export default Footer