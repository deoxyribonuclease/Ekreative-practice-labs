import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="footer-logo-icon"></div>
                            <span>Untitled UI</span>
                        </div>ы
                        <div className="footer-links">
                            <div className="footer-link-group">
                                <a href="/" className="footer-link">Overview</a>
                                <a href="/" className="footer-link">Features</a>
                                <a href="/" className="footer-link">Pricing</a>
                                <a href="/" className="footer-link">Careers</a>
                                <a href="/" className="footer-link">Help</a>
                                <a href="/" className="footer-link">Privacy</a>
                            </div>ы
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h3 className="footer-newsletter-title">Stay up to date</h3>
                        <div className="footer-newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="footer-newsletter-input"
                            />
                            <button className="footer-newsletter-button">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © 2077 Untitled UI. All rights reserved.
                    </div>
                    <div className="footer-legal">
                        <a href="/" className="footer-legal-link">Terms</a>
                        <a href="/" className="footer-legal-link">Privacy</a>
                        <a href="/" className="footer-legal-link">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;