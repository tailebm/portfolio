// src/components/Hero.js
import React from 'react';

const Hero = () => {
    return (
        <section id="hero" style={styles.heroSection}>
            <div data-aos="fade-up" style={styles.heroTitle}>
                <h1>TAILEB MELISSA</h1>
            </div>

            <div data-aos="fade-left" style={styles.heroSubtitle}>
                <h3><span class="m">B</span><span
                    class="m">I</span><span class="m">E</span><span class="m">N</span><span class="m">V</span><span
                        class="m">E</span><span class="m">N</span><span class="m">U</span><span class="m">E</span><span
                            class="m">&nbsp;</span><span class="m">S</span><span class="m">U</span><span class="m">R</span><span
                                class="m">&nbsp;</span><span class="m">M</span><span class="m">O</span><span class="m">N</span><span
                                    class="m">&nbsp;</span><span class="m">P</span><span class="m">O</span><span class="m">R</span><span
                                        class="m">T</span><span class="m">F</span><span class="m">O</span><span class="m">L</span><span
                                            class="m">I</span><span class="m">O</span></h3>
            </div>
        </section>
    );
};

const styles = {
    heroSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#c1adea',
        textAlign: 'center',
    },
    heroTitle: {
        fontSize: '4em',
        color: '#8b5e34',
        margin: 0,
    },
    heroSubtitle: {
        fontSize: '1.5em',
        color: '#5a5a5a',
    },
};

export default Hero;
