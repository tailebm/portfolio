import React from 'react';
import '../css/Pro.css';  // Assure-toi de créer ce fichier CSS pour le style

const Pro = () => {
    return (
        <section id="resume" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Mon Parcours Professionnel</h2>
                </div>

                <b className="neon2">
                    <div className="feure5">Devops 💼</div>
                </b>

                <div className="resume-cards">
                    <div className="resume-card" data-aos="fade-left">
                        <div className="resume-content">
                            <div className="resume-icon"><i className="fas fa-graduation-cap"></i></div>
                            <div className="resume-meta">
                                <h4>Alternance Devops</h4>
                                <h5>DTNUM, Paris</h5>
                                <h6>2023-2024</h6>
                            </div>
                        </div>
                        <div className="resume-text">
                            <p>
                                <b>Développement d'une application web pour la gestion des avis d'hébergement auprès de la DTNUM.</b>
                            </p>
                            <ul>
                                <li><b>Analyse des besoins :</b> Recueil des besoins auprès de la DTNUM pour formaliser les spécifications fonctionnelles et techniques.</li>
                                <li><b>Conception de l'application :</b> Modélisation des données et conception de l'architecture avec gestion des entités clés (avis d’hébergement, niveau de complexité, plateforme cible, coûts financiers).</li>
                                <li><b>Développement :</b> Implémentation des fonctionnalités de saisie, consultation et validation des avis d'hébergement.</li>
                                <li><b>Automatisation des processus :</b> Intégration de règles métier pour le calcul du niveau de complexité et l’attribution d’un statut (favorable/défavorable).</li>
                                <li><b>Gestion documentaire :</b> Génération automatique des avis d’hébergement sous forme de synthèses téléchargeables.</li>
                            </ul>
                            <p><b>(Réseau, Développement web)</b></p>
                        </div>
                    </div>

                    <div className="resume-card" data-aos="fade-left">
                        <div className="resume-content">
                            <div className="resume-icon"><i className="fas fa-graduation-cap"></i></div>
                            <div className="resume-meta">
                                <h4>Alternance Développeuse fullstack</h4>
                                <h5>DTNUM, Paris</h5>
                                <h6>2024-2025</h6>
                            </div>
                        </div>
                        <div className="resume-text">
                            <p>
                                <b>Participation au développement d'une application web pour le référencement des applications du Ministère.</b>
                            </p>
                            <ul>
                                <li><b>Analyse des besoins :</b> Recueil des besoins auprès du PO pour formaliser les spécifications fonctionnelles et techniques dans un cadre Agile.</li>
                                <li><b>Travail en groupe :</b> Intégration d'une équipe de 3 développeurs Fullstack expérimentés et à l'écoute.</li>
                                <li><b>Conception de l'application :</b> Modélisation des données et évolution de l'architecture avec gestion des entités clés (utilisateurs, rôles, applications, liens entre les applications).</li>
                                <li><b>Développement front et back :</b> Implémentation des fonctionnalités de saisie et consultation des applications ainsi que des signalements.</li>
                                <li><b>Tests et validation :</b> Tests fonctionnels et correctifs en collaboration avec les cadres d'astreintes.</li>
                                <li><b>Déploiement :</b> Documentation de l’application pour le Ministère, intégrée dans le cadre des outils dématérialisés de la DTNUM.</li>
                            </ul>
                            <p><b>(Développement fullstack, Github, Vue TS, Docker, PostgreSql, Prisma)</b></p>

                            <div className="valo">
                                <a href="test.png" target="_blank">
                                    <p><span className="bg"></span><span className="base"></span><span className="text">Rapport d'Alternance en cours</span></p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="resume-card" data-aos="fade-left">
                        <div className="resume-content">
                            <div className="resume-icon"><i className="fas fa-graduation-cap"></i></div>
                            <div className="resume-meta">
                                <h4>Stage d'observation</h4>
                                <h5>Epinay-sur-Seine</h5>
                                <h6>Février 2018</h6>
                            </div>
                        </div>
                        <div className="resume-text">
                            <p>
                                <b>Stage effectué au service de comptabilité du lycée Jacques-Feyder.</b>
                            </p>
                            <ul>
                                <li><b>Analyse des besoins :</b> Recueil des besoins auprès de la comptable.</li>
                            </ul>
                            <p><b>(Développement fullstack, Github, Vue TS, Docker, PostgreSql, Prisma)</b></p>

                            <div className="valo">
                                <a href="https://clinique-des-platanes.ramsaysante.fr/" target="_blank" rel="noreferrer">
                                    <p><span className="bg"></span><span className="base"></span><span className="text">Lien vers la clinique</span></p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="resume-card" data-aos="fade-left">
                        <div className="resume-content">
                            <div className="resume-icon"><i className="fas fa-graduation-cap"></i></div>
                            <div className="resume-meta">
                                <h4>Animatrice Radio</h4>
                                <h5>Epinay-sur-Seine</h5>
                                <h6>2017-2018</h6>
                            </div>
                        </div>
                        <div className="resume-text">
                            <p>
                                <b>Animatrice radio au collège Evariste Galois, avec des chroniques hebdomadaires.</b>
                            </p>
                            <div className="valo">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pro;
