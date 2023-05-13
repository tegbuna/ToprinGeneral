import React from "react";
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { Link } from 'react-scroll';
import { SiYoutube, SiInstagram, SiFacebook } from "react-icons/si";
import "./CSS/Navbar.css";




const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className="header">
            <nav className="navbar">

                <div className='companylogo'>
                    <a href="www.toprinauto.site">
                        <img src="https://i.imgur.com/MNe9hsZ.png" alt="Company Logo" />
                    </a>
                    <p>| 210.981.0459</p>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<AiOutlineClose size={24} style={{ color: "var(--white-white)" }} />) : (<VscMenu size={28} style={{ color: "var(--white-white)" }} />)}
                </div>

                {/* KEEP NOTE - replace className of ul on menu for click event*/}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><Link to="hero
                " spy={true} smooth={true} offset={-55} duration={500} onClick={closeMenu} className="nav-item" >Home</Link>
                    </li>

                    <li className="nav-item"><Link to="services
                " spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Services</Link>
                    </li>

                    <li className="nav-item"><Link to="blog
                " spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Blog</Link>
                    </li>

                    <li className="nav-item"><Link to="contact-form
                " spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Contact Us</Link>
                    </li>


                    <li className="mobile-social-nav">
                        <div className="social">
                            <div className="social-list">
                                <a className="youtube" href="https://www.facebook.com" rel="noreferrer" target="_blank"><SiFacebook /></a>
                                <a className="Instagram" href="https://www.instagramcom/" rel="noreferrer" target="_blank"><SiInstagram /></a>
                                <a className="youtube" href="https://www.youtube.com/" rel="noreferrer" target="_blank"><SiYoutube /></a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="desktop-social-bar">
                    <div className="social">
                        <div className="social-list">
                            <a className="youtube" href="https://www.facebook.com" rel="noreferrer" target="_blank"><SiFacebook /></a>
                            <a className="Instagram" href="https://www.Instagram.com" rel="noreferrer" target="_blank"><SiInstagram /></a>
                            <a className="youtube" href="https://www.youtube.com" rel="noreferrer" target="_blank"><SiYoutube /></a>
                            {/* <a className="Instagram" href="/" rel="noreferrer" target="_blank"><SiGmail/></a> */}
                        </div>
                    </div>
                </div>

            </nav>

        </div>
    );
};


export default Navbar