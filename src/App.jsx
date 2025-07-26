import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToggleDarkMode from './components/ToggleDarkMode';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Navbar />
      <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


