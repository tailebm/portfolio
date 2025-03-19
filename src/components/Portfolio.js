
import React, { useState, useEffect } from 'react'; // Importation de useState
import '../css/Portfolio.css'; // Assure-toi de créer ce fichier CSS pour le style
import 'venobox/dist/venobox.min.css'; // Importer le CSS de Venobox
import VenoBox from 'venobox'; // Importer Venobox

// Fonction pour initialiser Venobox
const initVenobox = () => {
    new VenoBox({
        selector: '.venobox', // Sélecteur pour activer la lightbox (ajouter la classe 'venobox' dans les liens)
        autoplay: true,       // Pour l'autoplay si tu as des vidéos (facultatif)
        numeration: true,     // Pour afficher la numérotation des images dans la galerie
    });
};

const Portfolio = () => {
    useEffect(() => {
        initVenobox(); // Initialiser Venobox une fois que le composant est monté
    }, []);

    const projects = [
        {
            id: 1,
            title: "RESEAU SOCIAL - One Social",
            category: "filter-reseau",
            date: "Mars 2022",
            image: "/images/one-social/accueil.png",
            description: "Réalisation d'un site internet nommé 'One-social'.",
            languages: "HTML, CSS, Javascript",
            link: "https://github.com/tailebm/one-social/",
            imgLink: "/images/one-social/accueil.png",
        },
        {
            id: 2,
            title: "APPLICATION WEB - AIMY",
            category: "filter-web",
            date: "2024",
            image: "/images/aimy/aimy.png",
            description: "Réalisation d'une application web client léger de gestion de rendez-vous médical nommé 'AIMY'.",
            languages: "HTML, CSS, Javascript",
            link: "https://github.com/BTS-SIO-projects/aimy",
            imgLink: "/images/aimy/aimy.png",
        },
        {
            id: 3,
            title: "JEU - Snake",
            category: "filter-game",
            date: "Septembre 2024",
            image: "/images/snake/snake.png",
            description: "Réalisation d'un jeu du serpent en langage C à l'aide de la bibliothèque SDL2.",
            languages: "C++",
            link: "https://github.com/BTS-SIO-projects/snake",
            imgLink: "/images/snake/snake.png",
        },
        {
            id: 4,
            title: "BLOG INTERNET - E-Entreprises",
            category: "filter-internet",
            date: "Septembre 2024",
            image: "/images/e-entreprise/e-entreprise.png",
            description: "Réalisation d'un blog internet via le CMS Wordpress présentant nos entreprises de 4 étudiantes du BTS SIO et regroupant les cours d'informatique.",
            languages: "Outils : WORDPRESS",
            link: "https://projet1.infinityfreeapp.com",
            imgLink: "/images/e-entreprise/e-entreprise.png",
        },
        {
            id: 5,
            title: "SITE E-COMMERCE - MIA BELLE",
            category: "filter-internet",
            date: "Avril 2024",
            image: "/images/miabelle/miabelle.png",
            description: "Réalisation d'un site e-commerce Shopify nommé 'MIA BELLE' vendant des produits esthétiques.",
            languages: "Outils : SHOPIFY",
            link: "https://melissataileb.info",
            imgLink: "/images/miabelle/miabelle.png",
        },
        {
            id: 6,
            title: "TUTO - GLPI",
            category: "filter-autre",
            date: "Octobre 2024",
            image: "/images/glpi/glpi.png",
            description: "Réalisation d'un tutoriel sur l'installation de GLPI et la logique des tickets.",
            languages: "Logiciels : VirtualBox, GLPI",
            link: "https://www.canva.com/design/DAGSbcBaxx0/y1UfH7lKDhYNvaBzDiamJw/view?utm_content=DAGSbcBaxx0&utm_campaign=designshare&utm_medium=link&utm_source=editor",
            imgLink: "/images/glpi/glpi.png",
        },
        {
            id: 7,
            title: "JEU - Morpion",
            category: "filter-game",
            date: "Novembre 2024",
            image: "/images/morpion/morpion.png",
            description: "Réalisation d'un jeu du Morpion sur Eclipse.",
            languages: "Logiciels/langages : Eclipse, Java, Swing",
            link: "https://github.com/BTS-SIO-projects/morpion",
            imgLink: "/images/morpion/morpion.png",
        },
        {
            id: 8,
            title: "SITE E-COMMERCE - WinterBeine",
            category: "filter-internet",
            date: "Decembre 2024",
            image: "/images/winterbeine/winterbeine.png",
            description: "Réalisation d'un site e-commerce Shopify nommé 'WINTER BEINE' vendant des vêtements thermiques.",
            languages: "Logiciels : Shopify, Canva",
            link: "https://winterbeine.com/",
            imgLink: "/images/winterbeine/winterbeine.png",
        },
        {
            id: 9,
            title: "SITE INTERNET - RATP",
            category: "filter-internet",
            date: "Janvier 2024",
            image: "/images/ratp/ratp.png",
            description: "Réalisation d'un site internet nommé 'RATP' en local permettant de gérer l'affectation des bus.",
            languages: "Langages : PHP, Mysql",
            link: "",   // mettre un lien
            imgLink: "/images/ratp/ratp.png",
        },
        {
            id: 10,
            title: "APPLICATION WEB - DGAH",
            category: "filter-web",
            date: "2024-2025",
            image: "/images/dgah/dgah.png",
            description: "Réalisation d'une application web nommé 'DGAH' pour Dématérialisation de la Gestion des Avis d'Hébergement en local permettant de gérer de A à Z un avis d'hébergement.",
            languages: "Logiciels : Symfony, VirtualBox, PhpMyAdmin",
            link: "", // mettre un lien doc
            imgLink: "/images/dgah/dgah.png",
        },
        {
            id: 11,
            title: "SITE INTERNET - Cabinet Médical",
            category: "filter-internet",
            date: "novembre 2023",
            image: "/images/cabinetmedical/cabinetmedical.png",
            description: "Réalisation d'un site internet simple nommé 'Cabinet Médical' en local permettant de gérer les rendez-vous.",
            languages: "Logiciels : Symfony, VirtualBox, PhpMyAdmin",
            link: "/images/cabinetmedical/cabinetmedical.pdf",
            imgLink: "/images/cabinetmedical/cabinetmedical.png",
        },
        {
            id: 12,
            title: "SITE INTERNET - Gestion Cours",
            category: "filter-internet",
            date: "janvier 2025",
            image: "/images/gestioncours/gestioncours.png",
            description: "Réalisation d'un site internet nommé 'Gestion Cours' en local permettant de gérer les cours d'une école.",
            languages: "Logiciels : PHP, HTML/CSS, PhpMyAdmin",
            link: "/images/gestioncours/gestioncours.pdf",
            imgLink: "/images/gestioncours/gestioncours.png",
        },
        {
            id: 13,
            title: "SITE INTERNET - Gestion Budget",
            category: "filter-internet",
            date: "février 2025",
            image: "/images/gestionbudget/gestionbudget.png",
            description: "Réalisation d'un site internet nommé 'Banque Pop' en local permettant de gérer les comptes bancaires des clients.",
            languages: "Logiciels : PHP, HTML/CSS, PhpMyAdmin",
            link: "/images/gestionbudget/gestionbudget.pdf",
            imgLink: "/images/gestionbudget/gestionbudget.png",
        },
        {
            id: 14,
            title: "SITE INTERNET - TodoList",
            category: "filter-internet",
            date: "decembre 2024",
            image: "/images/todolist/todolist.png",
            description: "Réalisation d'un site internet nommé 'Todolist' en local permettant de gérer ses tâches.",
            languages: "Logiciels : Vue, TypeScript, Node.js",
            link: "/images/todolist/todolist.pdf",
            imgLink: "/images/todolist/todolist.png",
        },
        {
            id: 15,
            title: "APPLICATION JAVA - ADMINAIMY",
            category: "filter-web",
            date: "2025",
            image: "/images/adminaimy/adminaimy.png",
            description: "Réalisation d'une application Java client lourd de gestion des données du site web 'AIMY'.",
            languages: "Java, phpMyAdmin",
            link: "https://github.com/BTS-SIO-projects/adminaimy",
            imgLink: "/images/adminaimy/adminaimy.png",
        }
    ];

    const [activeFilter, setActiveFilter] = useState('*'); // Filtre actif

    // Fonction pour changer le filtre actif
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // Filtrer les projets en fonction du filtre actif
    const filteredProjects = projects.filter(
        (project) => activeFilter === '*' || project.category === activeFilter
    );

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">
                {/* Filter Navigation */}
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-filters">
                            <li
                                className={activeFilter === '*' ? 'filter-active' : ''}
                                onClick={() => handleFilterClick('*')}
                            >
                                Tout
                            </li>
                            <li
                                className={activeFilter === 'filter-web' ? 'filter-active' : ''}
                                onClick={() => handleFilterClick('filter-web')}
                            >
                                Application
                            </li>
                            <li
                                className={activeFilter === 'filter-internet' ? 'filter-active' : ''}
                                onClick={() => handleFilterClick('filter-internet')}
                            >
                                Internet
                            </li>
                            <li
                                className={activeFilter === 'filter-game' ? 'filter-active' : ''}
                                onClick={() => handleFilterClick('filter-game')}
                            >
                                Jeu vidéo
                            </li>
                            <li
                                className={activeFilter === 'filter-autre' ? 'filter-active' : ''}
                                onClick={() => handleFilterClick('filter-autre')}
                            >
                                Autre
                            </li>
                            <li
                                className={activeFilter === 'filter-reseau' ? 'filter-active' : ''}
                                onClick={() => handleFilterClick('filter-reseau')}
                            >
                                Réseau Social
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Affichage des projets */}
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {filteredProjects.map((project) => (
                        <div className="col-lg-4 col-md-6 portfolio-item" key={project.id}>
                            <h4 style={{ textAlign: 'center' }}>{project.title}</h4>
                            <center>
                                <h5 className="date">{project.date}</h5>
                            </center>
                            <div className="portfolio-wrap">
                                {/* Affichage de l'image ou vidéo */}
                                {project.video ? (
                                    <video controls className="img-fluid">
                                        <source src={project.video} type="video/mp4" />
                                        Votre navigateur ne supporte pas la lecture des vidéos.
                                    </video>
                                ) : (
                                    <img src={project.image} className="img-fluid" alt={project.title} />
                                )}
                                <div className="portfolio-links">
                                    {project.imgLink && (
                                        <a href={project.imgLink} data-gall="portfolioGallery" className="venobox" title="Agrandir l'image">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" title="En savoir plus">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <center>
                                <h5 className="date neon2" style={{ background: '#ffe5e5' }}>
                                    Langages : {project.languages}
                                </h5>
                            </center>
                            <p style={{ textAlign: 'center' }}>{project.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;