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
  }, [selectedPalette]);

  const handlePaletteSelect = (palette) => {
    if (!isTransitioning) { 
      setTransitionType('entering-colors');
      setIsTransitioning(true);
  
      setTimeout(() => {
        setVisibleView('palette');
        setSelectedPalette(palette);
      }, 500); 
  
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); 
    }
  };
  
  const handleBackClick = () => {
    if (!isTransitioning) {  
      setTransitionType('entering-palette');
      setIsTransitioning(true);
  
      setTimeout(() => {
        setVisibleView('list');
        setSelectedPalette(null);
      }, 500); 
  
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); 
    }
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