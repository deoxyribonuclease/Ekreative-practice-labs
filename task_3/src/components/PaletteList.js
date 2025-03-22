import React from 'react';

function PaletteList({ palettes, onPaletteSelect }) {
  return (
    <div className="palette-list">
      {palettes.map(palette => (
        <div 
          key={palette.id}
          className="palette-item"
          onClick={() => onPaletteSelect(palette)}
        >
          <div className="palette-preview">
            {palette.colors.slice(0, 20).map(color => (
              <div 
                key={color.name}
                className="palette-preview-color"
                style={{ backgroundColor: color.color }}
              ></div>
            ))}
          </div>
          <div className="palette-info">
            <h2>{palette.paletteName} {palette.emoji}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaletteList;