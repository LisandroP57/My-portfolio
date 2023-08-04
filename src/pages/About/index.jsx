import React from "react";
import './aboutmodule.css';

const About = () => {
    return (
        <section class="home-section">
            <div class="home_content">
                <h1 class="heading-primary">Hola, soy Lisandro!</h1>
                <div class="home_info">
                    <p class="text-primary">
                        Soy un Programador Web FullStack Jr! Actualmente explorando el mundo IT, me fascina la programacion y lo que esto conlleva, blablbalablablab
                    </p>
                </div>
                <div class="home-btn">
                    <a href="/projects" class="btn">My Projects</a>
                </div>
            </div>
            <div className="home-socials">
                <div className="home-social">
                    <a href="https://linkedin.com/in/lpalavecinodvp/" className="home-social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" className="home-social-icon" alt="LinkedIn" />
                    </a>
                </div>
                <div className="home-social">
                    <a href="https://github.com/LisandroP57" className="home-social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" className="home-social-icon" alt="GitHub" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;