import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}