import React from "react";

import design from "../../assets/design-section.png";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-images">
                <img src={design} alt="We Are Digital" />
            </div>
            <div className="about-item">
                <h1>ABOUT US</h1>
                <h2>Design & Develop For Better Solution</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan.
                    Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor.
                    Ipsum mi sed uta aliquet ut.
                    Turpis viverra volutpat sed eu porta morbi egesta ut hac rutrum ut augue vitae, nec, ut. Nibh nibh quam</p>
                <a href="#contact" className="btn">Learn More</a>
            </div>
        </section>
    );
};

export default About;
