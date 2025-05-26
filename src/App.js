//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Bts from './components/Bts';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Pro from './components/Pro';
import School from './components/School';
import Portfolio from './components/Portfolio';
import Veille from './components/Veille';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div className="dots">
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.div>
      <p>Chargement...</p>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ?
        <Loader />
        : (
          <div className="app-container">
            <Header />
            <div className="content-container">
              <Hero />
              <About />
              <Bts />
              <Skills />
              <Tools />
              <Pro />
              <School />
              <Portfolio />
              <Veille />
              <Contact />
              <ScrollToTopButton />
              <Footer />
            </div>
          </div>
        )}
    </div>
  );
};

export default App;
