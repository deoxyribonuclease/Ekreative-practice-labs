import React from "react";

import home1 from "../../assets/home/home-image1.png";
import home2 from "../../assets/home/home-image2.png";


const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-item">
                <h1>CREATIVE WORK, CREATIVE MIND</h1>
                <h2>We Are Digital Creative Agency</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra augue.</p>
                <a href="/contact" className="btn">Get in Touch</a>
            </div>
            <div className="home-images">
                <img src={home1} alt="We Are Digital" />
                <img src={home2} alt="We Are Digital" />
            </div>
        </section>
    );
};

export default Home;
