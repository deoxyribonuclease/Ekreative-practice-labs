import React from 'react';
import ProgressBar from './ProgressBar';

function Header({ currentStep, totalSteps }) {
    return (
        <header className="header">
            <div className="header-content">
                <div className="company-logo">
                    <span className="logo">5</span>
                    <span className="company-name">EKREATIVE LAB </span>
                </div>
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
                <button className="close-button">×</button>
            </div>
        </header>
    );
}

export default Header;