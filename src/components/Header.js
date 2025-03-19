// src/components/Header.js
import React from 'react';
import '../css/Header.css'; // Importation du fichier CSS

const Header = () => {
    return (
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <div className="blob"></div>
                    <img
                        src='/images/MelissaTaileb.jpg'
                        alt="Mélissa TAILEB"
                        className="img-fluid rounded-circle"
                    />
                    <center>
                        <h1>Mélissa TAILEB</h1> {/* Effet scintillant sur le prénom et nom */}
                    </center>
                    <div className="social-links mt-3 text-center">
                        <a href="https://x.com/Mls938" className="twitter" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-twitter"></i>
                        </a>
                        <a href="https://www.github.com/tailebm" className="github" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="www.linkedin.com/in/melissataileb" className="linkedin" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li className="active">
                            <a href="#hero">
                                <i className="bx bx-home"></i> <span>Accueil</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <i className="bx bx-user"></i> <span>A Propos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#resume">
                                <i className="bx bx-file-blank"></i> <span>Parcours</span>
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio">
                                <i className="bx bx-book-content"></i> Projets
                            </a>
                        </li>
                        <li>
                            <a href="#services">
                                <i className="bx bx-server"></i> Veilles
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <i className="bx bx-envelope"></i> Contact
                            </a>
                        </li>
                        <li>
                            <a href="/images/tableau_synthese.pdf" target="_blank" rel="noopener noreferrer">
                                <i className="bx bx-book-content"></i> <span className="neon">Epreuve E5</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <button type="button" className="mobile-nav-toggle d-xl-none">
                    <i className="icofont-navigation-menu"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
