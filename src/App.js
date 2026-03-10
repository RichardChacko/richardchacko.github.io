import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
