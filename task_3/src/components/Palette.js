import React, { useState } from 'react';
import ColorBox from './ColorBox';

function Palette({ palette, onBackClick }) {
  const [copyFormat, setCopyFormat] = useState('HEX_HASH');
  const [soundOn, setSoundOn] = useState(true);
  const [isFormatDropdownOpen, setIsFormatDropdownOpen] = useState(false);
  
  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  const toggleFormatDropdown = () => {
    setIsFormatDropdownOpen(!isFormatDropdownOpen);
  };

  const handleFormatChange = (format) => {
    setCopyFormat(format);
    setIsFormatDropdownOpen(false);
  };

  const getFormattedColor = (hexColor) => {
    const hex = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    switch (copyFormat) {
      case 'HEX_HASH':
        return `#${hex}`;
      case 'HEX':
        return hex;
      case 'RGB':
        return `rgb(${r}, ${g}, ${b})`;
      case 'RGBA':
        return `rgba(${r}, ${g}, ${b}, 1)`;
      default:
        return `#${hex}`;
    }
  };

  return (
    <div className="palette">
      <div className="palette-header">
        <div className="header-left">
          <button className="back-button" onClick={onBackClick}>← Back</button>
        </div>
        
        <div className="copy-format-container" style={{ position: 'relative' }}>
          <div className="copy-format-dropdown" onClick={toggleFormatDropdown}>
            Copy Format: {copyFormat === 'HEX_HASH' ? 'HEX (#AA1923)' : 
                         copyFormat === 'HEX' ? 'HEX (AA1923)' :
                         copyFormat === 'RGB' ? 'RGB - (1,2,3)' : 
                         'RGBA - (1,2,3,0.4)'} ▼
          </div>
          
          {isFormatDropdownOpen && (
            <div className="format-options" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
              marginTop: '5px'
            }}>
              <div className="format-option" 
                   onClick={() => handleFormatChange('HEX_HASH')}
                   style={{ padding: '12px 15px', cursor: 'pointer', borderBottom: '1px solid #eee', transition: 'background-color 0.2s' }}>
                HEX (#AA1923)
              </div>
              <div className="format-option" 
                   onClick={() => handleFormatChange('HEX')}
                   style={{ padding: '12px 15px', cursor: 'pointer', borderBottom: '1px solid #eee', transition: 'background-color 0.2s' }}>
                HEX (AA1923)
              </div>
              <div className="format-option" 
                   onClick={() => handleFormatChange('RGB')}
                   style={{ padding: '12px 15px', cursor: 'pointer', borderBottom: '1px solid #eee', transition: 'background-color 0.2s' }}>
                RGB - (1,2,3)
              </div>
              <div className="format-option" 
                   onClick={() => handleFormatChange('RGBA')}
                   style={{ padding: '12px 15px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
                RGBA - (1,2,3,0.4)
              </div>
            </div>
          )}
        </div>
        
        <div className="sound-toggle" style={{ cursor: 'pointer' }} onClick={toggleSound}>
          {soundOn ? 'Sound On 🔊' : 'Sound Off 🔇'}
        </div>
      </div>
      
      <div className="color-grid">
        {palette.colors.map(color => (
          <ColorBox 
            key={color.name} 
            name={color.name} 
            color={getFormattedColor(color.color)} 
            originalColor={color.color}
            soundOn={soundOn}
          />
        ))}
      </div>
    </div>
  );
}

export default Palette;