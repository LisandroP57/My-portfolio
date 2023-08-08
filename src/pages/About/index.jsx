import React from "react";
import './aboutmodule.css';

const About = () => {
    return (
        <section class="about-section">
            <div class="about_content">
                <div class="about_info">
                    <h1 class="heading-primary">Hola, soy Lisandro! Programador Web FullStack</h1>
                    <p class="text-primary">
                        Actualmente me encuentro explorando el mundo IT, resido en Buenos Aires, Argentina,.
                        Me fascina la programacion y por esto comence a intruducirme en este mundo de forma autodidacta, hasta mas tarde obtener una beca de Digital House,
                        donde termine de consolidar mis conocimientos previos, que mas tarde me servirian para iniciar mi carrera y aprendizaje personal en este maravilloso mundo!
                        Gracias por pasar!
                    </p>
                </div>
                <div class="about-btn">
                    <a href="/projects" class="btn">My Projects</a>
                </div>
            </div>
            <div className="about-socials">
                <div className="about-social">
                    <a href="https://linkedin.com/in/lpalavecinodvp/" className="about-social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" className="about-social-icon" alt="LinkedIn" />
                    </a>
                </div>
                <div className="about-social">
                    <a href="https://github.com/LisandroP57" className="about-social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" className="about-social-icon" alt="GitHub" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;