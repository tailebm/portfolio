import React from 'react';
import '../css/Veille.css';

const Veille = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Veille Technologique 📔</h2>
                    <h4>Qu'est-ce que la veille technologique ?</h4>
                    <p>
                        La veille technologique est, pour <b>Steven C. Wheelwright</b> – ancien professeur émérite de
                        l’université de Harvard – "l’ensemble des techniques visant à organiser de façon systématique la
                        collecte, l’analyse, la diffusion et l’exploitation des informations techniques utiles à la sauvegarde
                        et à la croissance des entreprises".
                    </p>
                    <p>
                        Elle permet d’anticiper les innovations et d’évaluer l’impact sur l’environnement et l’organisation.
                    </p>
                    <br />
                    <h4>Les principaux outils de ma veille</h4>
                    <p>
                        J'effectue ma veille technologique avec des newsletters comme <b>Feedly</b>, un agrégateur de flux RSS,
                        et <b>OpenAI.com</b>, la newsletter des professionnels de la Data Science. Je consulte également des
                        sites comme <b>Hitek.fr</b> et <b>Hardware.fr</b>, spécialisés dans l’actualité high-tech.
                    </p>
                    <br />
                    <h4>Sujet de ma veille</h4>
                    <p>
                        Le thème de ma veille technologique est : <b>Les dispositions de l'État français contre la montée des cyberattaques</b> et <b>L'impact éthique de l'intelligence artificielle</b>.
                    </p>
                </div>

                {/* Thème 1 : L'État et la cybersécurité */}
                <div className="row">
                    <center><h4 style={{ color: '#c01010' }}><b>Thème 1 : Les dispositions de l'État français contre la montée des cyberattaques</b></h4></center>
                    <br /><br />

                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="600">
                        <div className="icon"><i className="icofont-shield-alt"></i></div>
                        <h4 className="title"><a href="https://www.cleercio.com/fr/cybersecurite-en-france-et-strategies-2024/">
                            La cybersécurité en France : stratégies pour 2024</a></h4>
                        <p className="description">
                            <center><strong>Décembre 2023</strong></center><br />
                            Ce rapport met en lumière les stratégies récentes de l'État français pour renforcer la cybersécurité face aux nouvelles menaces. La résilience numérique et la coopération entre les secteurs public et privé sont au cœur des initiatives.
                        </p>
                        <center><h5 className="date">Source : Cleercio</h5></center>
                    </div>

                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="700">
                        <div className="icon"><i className="icofont-bar-chart"></i></div>
                        <h4 className="title"><a href="https://www.usine-digitale.fr/cybersecurite-en-2024-coup-d-oeil-sur-les-dernières-menaces-en-france">
                            Les grandes tendances de la cybersécurité en France en 2024</a></h4>
                        <p className="description">
                            <center><strong>Février 2024</strong></center><br />
                            Un aperçu des nouvelles menaces en cybersécurité, en particulier les cyberattaques ciblant les infrastructures critiques en France. L’État renforce ses mécanismes de protection et de réponse aux attaques de grande envergure.
                        </p>
                        <center><h5 className="date">Source : L'Usine Digitale</h5></center>
                    </div>

                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="800">
                        <div className="icon"><i className="icofont-lock"></i></div>
                        <h4 className="title"><a href="https://www.lesechos.fr/technos/ia/cybersecurite-intelligence-artificielle-renforce-les-strategies-en-france-2025">
                            L'IA au service de la cybersécurité en France en 2025</a></h4>
                        <p className="description">
                            <center><strong>Janvier 2025</strong></center><br />
                            Ce rapport explore le rôle croissant de l'intelligence artificielle dans la cybersécurité, en particulier dans la détection proactive des cybermenaces et la gestion des risques pour les entreprises et l'État français.
                        </p>
                        <center><h5 className="date">Source : Les Echos</h5></center>
                    </div>
                </div>

                {/* Thème 2 : Intelligence Artificielle et Éthique */}
                <div className="row">
                    <center><h4 style={{ color: '#c01010' }}><b>Thème 2 : L'impact éthique de l'intelligence artificielle</b></h4></center>
                    <br /><br />

                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="600">
                        <div className="icon"><i className="icofont-shield-alt"></i></div>
                        <h4 className="title"><a href="https://www.forbes.com/sites/forbestechcouncil/2023/12/18/the-ethical-implications-of-ai-in-the-workplace/">
                            Les implications éthiques de l'IA au travail</a></h4>
                        <p className="description">
                            <center><strong>Décembre 2023</strong></center><br />
                            Cet article explore les défis éthiques posés par l'IA dans le monde du travail, notamment la question de la confidentialité et de la responsabilité des décisions prises par des systèmes automatisés.
                        </p>
                        <center><h5 className="date">Source : Forbes</h5></center>
                    </div>

                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="700">
                        <div className="icon"><i className="icofont-bar-chart"></i></div>
                        <h4 className="title"><a href="https://www.technologyreview.com/2024/02/21/349371/ethics-of-ai-regulation/">
                            La régulation de l'IA : un défi éthique majeur</a></h4>
                        <p className="description">
                            <center><strong>Février 2024</strong></center><br />
                            L'importance croissante de l'IA dans de nombreux secteurs soulève des questions éthiques sur sa régulation, la prise de décision automatisée et l'impact sur les employés et la société.
                        </p>
                        <center><h5 className="date">Source : MIT Technology Review</h5></center>
                    </div>

                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="800">
                        <div className="icon"><i className="icofont-lock"></i></div>
                        <h4 className="title"><a href="https://www.wired.com/story/ai-ethics-2025/">
                            L'éthique de l'IA : Progrès et perspectives en 2025</a></h4>
                        <p className="description">
                            <center><strong>Janvier 2025</strong></center><br />
                            Un regard approfondi sur les perspectives et les défis éthiques associés à l'IA en 2025, notamment les efforts de régulation par les gouvernements et les organisations internationales.
                        </p>
                        <center><h5 className="date">Source : Wired</h5></center>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Veille;
