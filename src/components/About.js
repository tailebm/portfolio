// src/components/About.js
import React from 'react';
import '../css/About.css'; // Le fichier CSS spécifique pour les styles de cette section

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>A Mon Sujet 💭</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <section id="about" className="presentation">
                            <div className="cadre_presentation">
                                <div className="img_container">
                                    <img
                                        src="/images/MelissaTaileb.jpg"
                                        className="photo_profile"
                                        alt="Mélissa Taileb"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Présentation</h3>
                        <p className="font-italic">
                            Salut, moi c'est <b><strong className="neon2">Mélissa Taileb</strong></b> <b className="neon2">
                                <div className="feure wave-emoji">🖐️</div>
                            </b>
                            Je suis actuellement étudiante au <b className="neon2">CFA INSTA</b> à Paris <span className="bounce-emoji">🗺️</span> en deuxième année de <b className="neon2">BTS SIO</b> (Services Informatiques aux Organisations) dans <b className="neon2">l'option SLAM</b> (Solutions Logicielles et Application Métier), spécialisée dans le développement fullstack<span className="laptop-emoji">💻</span>.
                        </p>
                        <p>
                            Etant toujours en cours d'études <span className="graduation-emoji">🎓</span>, je vous propose de retrouver sur ce portfolio les différentes travaux que j'ai pu entreprendre au cours de mes études.
                        </p>

                        <div className="valo">
                            <a href="/images/cv_alternance1.pdf" target="_blank" id="cv-button" className="btn cv-btn">
                                <i className="bx bx-download"></i> Télécharger mon CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
