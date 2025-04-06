import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import PaletteList from './components/PaletteList';
import Palette from './components/Palette';
import colorData from './assets/pallete';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <AppContent />
        </div>
      </Router>
  );
}

function AppContent() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState('');
  const navigate = useNavigate();

  const handlePaletteSelect = (palette) => {
    if (!isTransitioning) {
      setTransitionType('entering-colors');
      setIsTransitioning(true);

      setTimeout(() => {
        navigate(`/palette/${palette.id}`);
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
        navigate('/');
      }, 500);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }
  };

  function PaletteWrapper({ palettes, onBackClick }) {
    const location = useLocation();
    const paletteId = location.pathname.split('/')[2];
    const selectedPalette = palettes.find(palette => palette.id === paletteId);
    return <Palette palette={selectedPalette} onBackClick={onBackClick} />;
  }


  return (
      <>
        <div className="content">
          <Routes>
            <Route
                path="/"
                element={<PaletteList palettes={colorData} onPaletteSelect={handlePaletteSelect} />}
            />
            <Route
                path="/palette/:paletteId"
                element={<PaletteWrapper palettes={colorData} onBackClick={handleBackClick} />}
            />
          </Routes>
        </div>

        {isTransitioning && (
            <div className={`page-transition ${transitionType}`}></div>
        )}
      </>
  );
}



export default App;