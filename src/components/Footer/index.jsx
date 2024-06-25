import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./footer.css"

export const Footer = ({autor}) => {
    return (
    <>
        <Helmet>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Footer 1</title>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
            />
            <link rel="stylesheet" href="styles.css" />
        </Helmet>
            <body class="bodyfoot">
                <footer class="footerprincipal">
                    <section class="top">
                        <img src={logo} alt="logo" className="logo" />
                        <div class="links">
                        <div class="links-column">
                            <h2>Portfolio</h2>
                            <Link to="/">Sobre mí</Link>
                            <Link to="/projects">Proyectos</Link>
                            <Link to="/skills">Habilidades</Link>
                        </div>
                        <div class="links-column">
                            <h2>Más</h2>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lisandropalavecino1@gmail.com">Contactémonos</a>
                            <Link to="https://drive.google.com/file/d/1WQmnXuLk6_46Gy29ayFfjAfM8qLFonpU/view">CV Español</Link>
                            <Link to="https://drive.google.com/file/d/1JrhcQ7zzeDd1aYXLAWSVmOFXI3FstEWR/view">CV Inglés</Link>
                        </div>
                        <div id="footer" class="links-column socials-column">
                            <h2>Redes Sociales</h2>
                            <p>
                            Seguíme en las redes sociales para ver más y poder estar comunicados!
                            </p>
                            <div class="socials">
                            <Link to="https://www.linkedin.com/in/lpalavecinodvp/" className='fa-brands fa-linkedin'></Link>
                            <Link to="https://github.com/LisandroP57" className='fa-brands fa-github'></Link>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section class="bottom">
                        <p class="copyright">© 2024 All rights reserved</p>
                    </section>
                </footer>
            </body>
    </>
    )}