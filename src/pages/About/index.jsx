import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './aboutmodule.css';

const About = () => {

    useEffect(() => {
        document.title = "Lisandro Palavecino | Sobre mi";
    }, []);

    return (
        <section className="about-section">
            <div className="about_content">
                <div className="about_info">
                    <h1 className="heading-primary">Hola, soy Lisandro! Programador Web FullStack</h1>
                    <p className="text-primary">
                        Actualmente me encuentro explorando el mundo IT, resido en Buenos Aires, Argentina.
                        Me fascina la programación y por esto comencé a introducirme en este mundo de forma autodidacta, hasta más tarde obtener una beca de Digital House,
                        donde terminé de consolidar mis conocimientos previos, que más tarde me servirían para iniciar mi carrera y aprendizaje personal en este maravilloso mundo.
                        ¡Gracias por pasar!
                    </p>
                </div>
                <div className="about-btn">
                    <Link to="/projects" className="btn">My Projects</Link>
                </div>
            </div>
            <div className="about-socials">
                <div className="about-social">
                    <Link to="https://linkedin.com/in/lpalavecinodvp/" className="about-social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" className="about-social-icon" alt="LinkedIn" />
                    </Link>
                </div>
                <div className="about-social">
                    <Link to="https://github.com/LisandroP57" className="about-social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" className="about-social-icon" alt="GitHub" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;