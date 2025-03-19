// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import '../css/ScrollToTopButton.css'; // Importation des styles spécifiques

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Fonction pour gérer le défilement et la visibilité du bouton
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Fonction pour remonter tout en haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animation fluide
        });
    };

    // Ajouter un écouteur d'événements pour le défilement
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-btn">
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
