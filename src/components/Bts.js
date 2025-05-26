// src/components/Bts.js
import React from 'react';
import '../css/Bts.css';
import { FaGraduationCap, FaNetworkWired, FaCode, FaCheckCircle } from 'react-icons/fa';

const Bts = () => {
    return (
        <section id="about" className="facts">
            <div className="container">
                <div className="section-title">
                    <h2>Qu'est ce que le <b>BTS SIO 🎓</b> ?</h2>
                    <p>Avant de commencer à parler de moi, je vous propose de présenter en premier lieu ma filière dont je suis affectée.</p>
                    <br />
                    <p>
                        Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (<b className="neon2">BTS SIO</b>) s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur.
                        Pour par la suite intégrer directement le marché du travail ou continuer des études, dans le domaine de l'informatique.
                    </p>
                    <br />
                    <h4>Le BTS SIO propose deux spécialités :</h4>
                    <br />
                    <div className="row justify-content-around spec_bts">
                        <div className="col-xl-5 bts_sisr" data-aos="fade-left">
                            <h4><FaNetworkWired /> Option <b>SISR</b></h4>
                            <h6>
                                L’option Solutions d'infrastructure, systèmes et réseaux forme des professionnels des réseaux et équipements informatiques (installation, maintenance, sécurité).
                                En sortant d’un <b>BTS SIO</b> <b>SISR</b>, vous serez capables de gérer et d’administrer le réseau d’une société et d’assurer sa sécurité et sa maintenance.
                            </h6>
                            <h6>
                                Les techniciens supérieurs en informatique option <b>SISR</b>, peuvent accéder aux métiers de :
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> Administrateur systèmes et réseaux</li>
                                    <li><i className="icofont-rounded-right"></i> Informaticien support et déploiement</li>
                                    <li><i className="icofont-rounded-right"></i> Pilote d’exploitation</li>
                                    <li><i className="icofont-rounded-right"></i> Support systèmes et réseaux</li>
                                    <li><i className="icofont-rounded-right"></i> Technicien d’infrastructure</li>
                                    <li><i className="icofont-rounded-right"></i> Technicien de production</li>
                                    <li><i className="icofont-rounded-right"></i> Technicien micro et réseaux</li>
                                </ul>
                            </h6>
                        </div>

                        <div className="col-xl-5 bts_slam" data-aos="fade-right">
                            <h4><FaCode /> Option <b>SLAM</b></h4>
                            <h6>
                                L’option Solutions logicielles et applications métiers forme des spécialistes des logiciels (rédaction d’un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société).
                            </h6>
                            <h6>
                                Les techniciens supérieurs en informatique option <b>SLAM</b> sont préparés aux métiers de :
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> Développeur d’applications informatiques</li>
                                    <li><i className="icofont-rounded-right"></i> Développeur informatique</li>
                                    <li><i className="icofont-rounded-right"></i> Analyste d’applications ou d’études</li>
                                    <li><i className="icofont-rounded-right"></i> Analyste programmeur</li>
                                    <li><i className="icofont-rounded-right"></i> Programmeur analyste</li>
                                    <li><i className="icofont-rounded-right"></i> Programmeur d’applications</li>
                                    <li><i className="icofont-rounded-right"></i> Responsable des services applicatifs</li>
                                    <li><i className="icofont-rounded-right"></i> Technicien d’études informatiques</li>
                                </ul>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bts;
