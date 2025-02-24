import React from 'react';

import catgif from "../../assets/2page/cat-spinning.gif";
import catsound from "../../assets/2page/maxwell-the-cat-theme.mp3";
import catvideo from "../../assets/2page/wawawa.mp4";

function ContactForm() {
    return (
            <section className="contact-page">
                <div className="contact-form">
                    <h1>Get in Touch</h1>
                    <p>We’d love to hear from you! Fill out the form below or reach us through our contact details.</p>
                    <form>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required/>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required/>

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
                <div className="contact-image">
                    <img src={catgif} alt="Contact Illustration"/>
                    <audio controls loop>
                        <source src={catsound}/>
                    </audio>
                    <label>Імпровізаційна сторінка</label>
                </div>
            </section>
    );
}

export default ContactForm;
