import React from "react";

import designIcon from "../../assets/icons/design.png";
import developmentIcon from "../../assets/icons/development.png";
import emptyIcon from "../../assets/icons/empty.png";

const services = [
    { img: designIcon, title: "Design" },
    { img: developmentIcon, title: "Development" },
    { img: emptyIcon, title: "Testing & QA" }
];


const Services = () => {
    return (
        <section id="services" className="services">
            {services.map((service, index) => (
                <div className="service-item" key={index}>
                    <img src={service.img} alt={service.title} />
                    <div>
                        <h3>{service.title}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Services;
