import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./CSS/Footer.css";


const Footer = () => {

  return (
<div className="footer-nav" id="copyright">
  <nav className="footer-navbar">
    <div className="footer-nav-menu">
      <div className="footer-copyright" style={{color: "var(--gray-i)", margin: "10px"}}>
        <p className="micro-text">Copyright  <FaCopyright size={14} />  2021 | All Rights Reserved.| Fierce Generation, LLC </p>
      </div>
    </div>
  </nav>
</div>

  );
};


export default Footer