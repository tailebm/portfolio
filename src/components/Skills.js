import React from 'react';
import '../css/Skills.css';

const Skills = () => {
    return (
        <section id="about" className="skills section-bg">
            <div className="container">

                {/* Section Certifications */}
                <div className="section-title">
                    <h2>Mes Certifications 📜</h2>
                    <p>Ces compétences ont été acquises au cours de mes années scolaires, que ce soit en licence d'informatique ou en BTS SIO, ainsi que grâce à mon autoformation et projets personnels.</p>
                </div>
                <div className="row skills-content" data-aos="fade-right">
                    <div className="col-lg-6">
                        <img src='/images/attestation-pix-20220321.jpg' className="img-fluid certification-img" alt="Attestation Pix" />
                    </div>
                    <div className="col-lg-6">
                        <img src='/images/certification_openclassroom_java.png' className="img-fluid certification-img" alt="Certification Java" />
                    </div>
                    <div className="col-lg-6">
                        <img src='/images/certification_ccna_4.png' className="img-fluid certification-img" alt="Certification CCNA 7" />
                    </div>
                    <div className="col-lg-6">
                        <img src='/images/certification_ccna_5.png' className="img-fluid certification-img" alt="Certification CCNA 5" />
                    </div>
                    <div className="col-lg-6">
                        <img src='/images/certification_ccna_6.png' className="img-fluid certification-img" alt="Certification CCNA 6" />
                    </div>
                    <div className="col-lg-6">
                        <img src='/images/certification_ccna_7.png' className="img-fluid certification-img" alt="Certification CCNA 7" />
                    </div>
                    <div className="col-lg-6">
                        <img src='/images/certification_google_en_cours.png' className="img-fluid certification-img" alt="Certification Google" />
                    </div>
                </div>

                <br />

                {/* Section Compétences Développement */}
                <div className="section-title">
                    <h2>Mes compétences développement 👨‍💻</h2>
                    <p>Toutes ces connaissances ont été acquises durant mes études en <b>BTS SIO</b> et d'autres par ma propre initiative en essayant de mettre en place des solutions.</p>
                </div>

                <div className="row skills-parent">
                    {skillsList.map((skill, index) => (
                        <div className="col-6 col-sm-4 col-lg-2" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <div className="skills-card">
                                <div className="skills-img">
                                    <img src={skill.imgSrc} alt={skill.name} />
                                </div>
                                <div className="skills-name">
                                    <p>{skill.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Liste des compétences avec nom et source de l'image
const skillsList = [
    { name: 'html', imgSrc: '/images/skill/html.png' },
    { name: 'css', imgSrc: 'images/skill/css.png' },
    { name: 'javascript', imgSrc: '/images/skill/javascript.png' },
    { name: 'typescript', imgSrc: '/images/skill/typescript.png' },
    { name: 'vue', imgSrc: '/images/skill/vue.png' },
    { name: 'react', imgSrc: '/images/skill/react.png' },
    { name: 'php', imgSrc: '/images/skill/php.png' },
    { name: 'java', imgSrc: '/images/skill/java.png' },
    { name: 'symfony', imgSrc: '/images/skill/symfony.png' },
    { name: 'bootstrap', imgSrc: '/images/skill/bootstrap.png' },
    { name: 'python', imgSrc: '/images/skill/python.png' },
    { name: 'laravel', imgSrc: '/images/skill/laravel.png' },
    { name: 'node.js', imgSrc: '/images/skill/node.png' },
    { name: 'MySQL', imgSrc: '/images/skill/mysql.png' },
];

export default Skills;
