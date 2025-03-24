import React from 'react';

function ProgressBar({ currentStep, totalSteps }) {
    return (
        <div className="progress-bar">
            {Array.from({ length: totalSteps }, (_, index) => (
                <React.Fragment key={index}>
                    <div className={`progress-step ${index + 1 <= currentStep ? 'active' : ''}`}></div>
                    {index < totalSteps - 1 && (
                        <div className={`progress-line ${index + 1 < currentStep ? 'active' : ''}`}></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default ProgressBar;