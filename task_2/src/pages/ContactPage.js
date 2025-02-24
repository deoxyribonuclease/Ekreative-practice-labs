import React from 'react';

import VideoSection from "../components/contactpage/VideoSection";
import Header from "../components/Header";
import ContactForm from "../components/contactpage/ContactForm";
import Footer from "../components/Footer";

function ContactPage() {
    return (
        <div>
            <ContactForm />
            <VideoSection />
        </div>
    );
}

export default ContactPage;
