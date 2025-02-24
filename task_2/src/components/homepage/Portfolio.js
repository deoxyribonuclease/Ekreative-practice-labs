import React from "react";

import port1 from "../../assets/portfolio/port1.png";
import port2 from "../../assets/portfolio/port2.png";
import port3 from "../../assets/portfolio/port3.png";

const portfolioItems = [
    { img: port1 },
    { img: port2 },
    { img: port3 }
];


const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-header">
                <div className="portfolio-text">
                    <h1>PORTFOLIO</h1>
                    <h2>View Our Case Studies</h2>
                </div>
            </div>
            <div className="portfolio-gallery">
                {portfolioItems.map((item, index) => (
                    <div className="portfolio-item" key={index}>
                        <img src={item.img} alt={`Portfolio ${index + 1}`} />
                        <a href="#" className="arrow-btn">➔</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
