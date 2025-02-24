import React from "react";

import logo from "../assets/header-figures.png";
import facebookIcon from "../assets/icons/bxl_facebook-square.png";
import twitterIcon from "../assets/icons/fa6-brands_twitter-square.png";
import instagramIcon from "../assets/icons/akar-icons_instagram-fill.png";

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer-container">
                <div className="footer-columns">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Our Contact</h4>
                        <p>Office: 4042 Imperial Road, UK</p>
                        <p>Help: (041) 425 277 / 425</p>
                        <p>Email: inbox@finance.com</p>
                    </div>
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies</p>
                    </div>
                    <div className="footer-section">
                        <h4>Subscribe</h4>
                        <div className="subscribe-box">
                            <input type="email" placeholder="Your Email"/>
                            <button>&#10148;</button>
                        </div>
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#"><img src={facebookIcon} alt="Facebook"/></a>
                            <a href="#"><img src={twitterIcon} alt="Twitter"/></a>
                            <a href="#"><img src={instagramIcon} alt="Instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
