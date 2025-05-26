import React from 'react';
import '../css/Tools.css'; // Importation du fichier CSS pour la section

const Tools = () => {
    return (
        <section id="about" className="section tools-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Mes outils ⚙️</h2>
                        </div>
                        <p>
                            Toutes ces connaissances ont été acquises durant mes études en <b>Licence informatique à l'université Paris Diderot</b>,
                            puis en <b>BTS SIO</b>, et d'autres en autoformation. J’ai également relevé les défis organisés, ce qui permet d’effectuer des recherches et aller encore plus loin.
                        </p>
                        <br />
                    </div>
                </div>

                <div className="row skills-parent">
                    {toolsList.map((tool, index) => (
                        <div className="col-6 col-sm-4 col-lg-2" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <div className="skills-card">
                                <div className="skills-img">
                                    <img src={tool.imgSrc} alt={tool.name} />
                                </div>
                                <div className="skills-name">
                                    <p>{tool.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Liste des outils avec noms et sources d'images
const toolsList = [
    { name: 'Photoshop', imgSrc: '/images/skill/photoshop.png' },
    { name: 'StarUML', imgSrc: '/images/skill/staruml.png' },
    { name: 'MySQL Workbench', imgSrc: '/images/skill/workbench.png' },
    { name: 'phpMyAdmin', imgSrc: '/images/skill/phpmyadmin.png' },
    { name: 'Git', imgSrc: '/images/skill/git.png' },
    { name: 'Visual Studio', imgSrc: '/images/skill/vscode.png' },
    { name: 'Eclipse', imgSrc: '/images/skill/eclipse.png' },
    { name: 'VirtualBox', imgSrc: '/images/skill/virtualbox.png' },
    { name: 'Github', imgSrc: '/images/skill/github.png' },
    { name: 'GLPI', imgSrc: '/images/skill/glpi.png' },
    { name: 'Docker', imgSrc: '/images/skill/docker.png' },
];

export default Tools;
