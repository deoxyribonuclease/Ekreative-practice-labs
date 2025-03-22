import React, { useState } from 'react';
import notifySound from "../assets/src_notify.mp3";

function ColorBox({ name, color, originalColor, soundOn }) {
  const [copied, setCopied] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setShowFullscreen(true);

    if (soundOn) {
      const sound = new Audio(notifySound);
      sound.play().catch(err => console.error("Failed to play sound:", err));
    }
    
    setTimeout(() => {
      setCopied(false);
    }, 1200);
    
    setTimeout(() => {
      setShowFullscreen(false);
    }, 1500);
  };
  
  return (
    <>
      <div 
        className="color-box"
        style={{ backgroundColor: originalColor }} 
        onClick={copyToClipboard}
      >
        <div className="color-content">
          <span className="color-name">{name}</span>
          <span className="color-value">{color}</span>
        </div>
        
        <div className="copy-button-container">
          <button className="copy-button">COPY</button>
        </div>
      </div>
      
      {showFullscreen && (
        <div 
          className="copy-overlay"
          style={{ backgroundColor: originalColor }} 
        >
          <div className="copy-text-container">
            <div className="copy-message">COPIED!</div>
            <div className="copy-color-value">{color}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ColorBox;