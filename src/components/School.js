import React from 'react';
import '../css/School.css'; // Fichier CSS pour la section

const School = () => {
    return (
        <section id="resume" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Mon Parcours Scolaire 🎓</h2>
                </div>

                <div className="resume-cards">
                    <div className="resume-card" data-aos="fade-right">
                        <div className="resume-content">
                            <div className="resume-icon"><i className="fas fa-graduation-cap"></i></div>
                            <div className="resume-meta">
                                <h4>BTS SIO Option SLAM</h4>
                                <h5>CFA INSTA</h5>
                                <h6>2023 - 2025</h6>
                            </div>
                        </div>
                        <div className="resume-text">
                            <p>
                                <i>BTS Services informatiques aux organisations Option Solutions Logicielles et Applications Métiers</i>
                                <br />
                                <br />
                                <b>Je me suis orienté vers un BTS SIO pour améliorer mes compétences en informatique et me préparer pour ma future carrière.</b>
                                <br />
                            </p>
                        </div>
                    </div>

                    <div className="resume-card" data-aos="fade-right">
                        <div className="resume-content">
                            <div className="resume-icon"><i className="fas fa-graduation-cap"></i></div>
                            <div className="resume-meta">
                                <h4>Licence Informatique</h4>
                                <h5>Université Paris-cité (Diderot)</h5>
                                <h6>2022 - 2023</h6>
                            </div>
                        </div>
                        <div className="resume-text">
                            <p>
                                <b>Je me suis orienté en L1 d'informatique pour acquérir des connaissances théoriques en informatique.</b>
                            </p>
                        </div>
                    </div>

                    <div className="resume-card" data-aos="fade-left">
                        <div className="resume-content">
                            <div className="resume-icon"><i className="fas fa-graduation-cap"></i></div>
                            <div className="resume-meta">
                                <h4>BAC Générale</h4>
                                <h5>Lycée Jacques-Feyder, Epinay-sur-Seine</h5>
                                <h6>2019 - 2022</h6>
                            </div>
                        </div>
                        <div className="resume-text">
                            <p>
                                <i>BAC Général</i>
                                <br />
                                <br />
                                <b>Après ma seconde, je me suis orienté vers la filière générale avec les options Sciences Économiques et Sociales (SES) et Mathématiques.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default School;
