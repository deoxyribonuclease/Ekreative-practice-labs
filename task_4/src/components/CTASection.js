import React from 'react';

const CTASection = () => {
    return (
        <div className="container">
            <div className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-title">No long-term contracts.<br />No catches.</h2>
                    <p className="cta-subtitle">Start your 30-day free trial today.</p>
                    <div className="cta-buttons">
                        <button className="btn-learn">Learn more</button>
                        <button className="btn-get-started">Get started</button>
                    </div>
                </div>
                <div className="cta-images">
                    <img src="ba.png" alt="Person 1" className="cta-image cta-image-1" style={{ filter: "hue-rotate(0deg)" }} />
                    <img src="ba.png" alt="Person 2" className="cta-image cta-image-2" style={{ filter: "hue-rotate(60deg)" }}/>
                    <img src="ba.png" alt="Person 3" className="cta-image cta-image-3" style={{ filter: "hue-rotate(120deg)" }}/>
                    <img src="ba.png" alt="Person 4" className="cta-image cta-image-4" style={{ filter: "hue-rotate(180deg)" }} />
                    <img src="ba.png" alt="Person 5" className="cta-image cta-image-5" style={{ filter: "hue-rotate(240deg)" }}/>
                </div>
            </div>
        </div>
    );
};

export default CTASection;