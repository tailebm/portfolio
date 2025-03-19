import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [sentMessage, setSentMessage] = useState(false);

    // Gestion de l'envoi du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Démarrer le chargement
        setErrorMessage(""); // Réinitialiser le message d'erreur
        setSentMessage(false); // Réinitialiser le message de succès

        // Simuler une soumission de formulaire (par exemple via fetch ou axios)
        setTimeout(() => {
            setLoading(false);
            if (Math.random() > 0.5) {
                setSentMessage(true); // Message envoyé avec succès
            } else {
                setErrorMessage("Erreur lors de l'envoi du message. Veuillez réessayer.");
            }
        }, 2000);
    };
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2 style={{ color: "white" }}>Contact ✉️</h2>
                    <center>
                        <h3 className="span loader">
                            <span className="m">E</span>
                            <span className="m">N</span>
                            <span className="m">V</span>
                            <span className="m">O</span>
                            <span className="m">Y</span>
                            <span className="m">E</span>
                            <span className="m">R</span>
                            <span className="m"> </span>
                            <span className="m">M</span>
                            <span className="m">O</span>
                            <span className="m">I</span>
                            <span className="m"> </span>
                            <span className="m">U</span>
                            <span className="m">N</span>
                            <span className="m"> </span>
                            <span className="m">M</span>
                            <span className="m">E</span>
                            <span className="m">S</span>
                            <span className="m">S</span>
                            <span className="m">A</span>
                            <span className="m">G</span>
                            <span className="m">E</span>
                        </h3>
                    </center>
                </div>

                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"></i>
                                <h4 style={{ color: "white" }}>Localisation: </h4>
                                <p style={{ color: "white" }}>93800 Epinay-sur-Seine, France</p>
                            </div>

                            <div className="email">
                                <i className="icofont-envelope"></i>
                                <h4 style={{ color: "white" }}>Email: </h4>
                                <p style={{ color: "white" }}>melissatailebpro@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="icofont-phone"></i>
                                <h4 style={{ color: "white" }}>Numéro de Téléphone: </h4>
                                <p style={{ color: "white" }}>07 69 87 57 23</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form
                            onSubmit={handleSubmit}
                            action="https://formsubmit.co/melissatailebpro@gmail.com"
                            method="post"
                            /* role="form" */
                            className="php-email-form"
                            target="_blank"
                        >
                            {/* Honeypot */}
                            <input type="text" name="_honey" style={{ display: "none" }} />

                            {/* Disable Captcha */}
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Votre nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                    />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Votre mail*</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="emailInfo"
                                        data-rule="email"
                                        data-msg="Veuillez saisir un e-mail valide !"
                                    />
                                    <div className="validate"></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Sujet*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    data-rule="minlen:4"
                                    data-msg="Veuillez saisir un sujet !"
                                />
                                <div className="validate"></div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Votre message*</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows="10"
                                    data-rule="required"
                                    data-msg="Veuillez écrire quelque chose !"
                                ></textarea>
                                <div className="validate"></div>
                            </div>

                            {/* Messages dynamiques */}
                            <div className="mb-3">
                                {loading && <div className="loading">Chargement...</div>}
                                {errorMessage && <div className="error-message">{errorMessage}</div>}
                                {sentMessage && (
                                    <div className="sent-message">
                                        Votre message a été envoyé avec succès !
                                    </div>
                                )}
                            </div>
                            <div className="text-center">
                                <button type="submit" disabled={loading}>
                                    {loading ? "Envoi..." : "Envoyer un message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
