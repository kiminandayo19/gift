import React from 'react';
import './App.css';
import Home from './components/Home';
import Splash from './components/Splash';
import './components/splash.css';
import {motion, AnimatePresence} from 'framer-motion';

function App() {
  // State for splash screen, default => false
  const [splash, setSplash] = React.useState(true);
  // Use Timer to remove the splash screen
  const handleSplash = (e) => {
    setTimeout(() => {
      setSplash(false);
    }, 6000);
  }

  return (
    <div className="main-component">
      {splash? 
        <Splash handleSplash={handleSplash()}/>
        :
        <Home/>
      }
    </div>
  );
}

export default App;
