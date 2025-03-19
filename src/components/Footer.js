// src/components/Footer.js
import React from 'react';
import '../css/Footer.css'; // Importation du fichier de styles

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    <span className="neon">
                        Copyright 2024 © <strong>TAILEB Mélissa</strong>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
