import React from "react";

import logo from "../assets/header-figures.png";


const Header = () => {
    return (
        <header>
            <a href="/home"><img src={logo} alt="We Are Digital" /></a>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimony">Testimony</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
