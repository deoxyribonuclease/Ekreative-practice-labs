import React, { useState } from "react";

import user1 from "../../assets/users/user1.png";
import user2 from "../../assets/users/user2.png";
import user3 from "../../assets/users/user3.png";
import user4 from "../../assets/users/user4.png";
import user5 from "../../assets/users/user5.png";
import user6 from "../../assets/users/user6.png";
import user7 from "../../assets/users/user7.png";

const testimonialUsers = [
    { img: user1, className: "avatar top-left" },
    { img: user2, className: "avatar mid-left" },
    { img: user3, className: "avatar bottom-left" },
    { img: user5, className: "avatar top-right" },
    { img: user6, className: "avatar mid-right" },
    { img: user7, className: "avatar bottom-right" }
];

const testimonials = [
    {
        img: user4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
        name: "JAMES JOKOVIC",
        title: "IT CONSULTANT"
    },
    {
        img: user1,
        text: "Пікселів не вистачило, сорі) Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
        name: "MAN JPG",
        title: "MARKETING MANAGER"
    },
    {
        img: user2,
        text: "Пікселів не вистачило, сорі) Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
        name: "MAN PNG",
        title: "PROJECT MANAGER"
    },
    {
        img: user3,
        text: "Пікселів не вистачило, сорі) Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
        name: "WOMAN AHAHA",
        title: "PROJECT MANAGER"
    }
];

const Testimony = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testimony" className="testimony">
            <h3>TESTIMONY</h3>
            <h2>What Do Our Clients Say <br /> About Us</h2>

            <div className="testimonial-wrapper">
                {testimonialUsers.map((user, index) => (
                    <img key={index} src={user.img} className={user.className} alt={`Client ${index + 1}`} />
                ))}

                <div className="testimonial">
                    <img
                        src={testimonials[currentIndex].img}
                        className="user-img"
                        alt="Client Photo"
                    />
                    <p className="testimonial-text">
                        {testimonials[currentIndex].text}
                    </p>
                    <h4 className="user-name">{testimonials[currentIndex].name}</h4>
                    <p className="user-title">{testimonials[currentIndex].title}</p>
                </div>
            </div>

            <div className="dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => changeSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Testimony;
