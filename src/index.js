import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importation des styles AOS
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Créer un composant pour initialiser AOS
const AOSInitializer = () => {
  useEffect(() => {
    // Initialisation d'AOS une seule fois lorsque le composant est monté
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: 'ease-in-out', // Type d'animation
      once: true, // L'animation se produit une seule fois
    });
  }, []); // Le tableau vide signifie que l'effet s'exécute une seule fois après le montage

  return null; // Ce composant ne rend rien, il se contente d'initialiser AOS
};

// Appeler le composant AOSInitializer dans index.js
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application
root.render(
  <>
    <AOSInitializer /> {/* Initialisation d'AOS */}
    <App />
  </>
);
