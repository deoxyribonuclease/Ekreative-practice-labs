import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import colorData from './assets/pallete';
import './App.css';

function App() {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState('');
  const [visibleView, setVisibleView] = useState(null);
  
  useEffect(() => {
    setVisibleView(selectedPalette ? 'palette' : 'list');
  }, []);

  const handlePaletteSelect = (palette) => {
    setTransitionType('entering-colors');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setVisibleView('palette');
      setSelectedPalette(palette);
    }, 400); 
    

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800); 
  };
  
  const handleBackClick = () => {

    setTransitionType('entering-palette');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setVisibleView('list');
      setSelectedPalette(null);
    }, 400); 
    

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800); 
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        {visibleView === 'list' && (
          <PaletteList 
            palettes={colorData} 
            onPaletteSelect={handlePaletteSelect} 
          />
        )}
        
        {visibleView === 'palette' && selectedPalette && (
          <Palette 
            palette={selectedPalette} 
            onBackClick={handleBackClick} 
          />
        )}
      </div>
      
      {isTransitioning && (
        <div className={`page-transition ${transitionType}`}></div>
      )}
    </div>
  );
}

export default App;