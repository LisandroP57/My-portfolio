import React, { useEffect } from "react";
import "./proyectsmodule.css";

const Projects = () => {

  useEffect(() => {
      document.title = "Lisandro Palavecino | Proyectos";
    }, []);
  
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-heading">
          <span className="section-heading__main">Proyectos</span>
          <span className="section-heading__sub">Aquí encontrarás algunos de mis proyectos personales que estuve desarrollando.</span>
        </h2>

        <div className="projects-content">
          <div className="project">
            <div className="project-image">
              <img
                src="https://img.icons8.com/?size=512&id=121367&format=png"
                alt="Cuidate app"
                className="project-image__img"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">Cuidate! E-commerce Full-Stack con Características Completas</h3>
              <p className="project-description">
                Explora mi primera aplicación full-stack, "Cuidate", una creación destacada desarrollada durante mi experiencia en Digital House. Este e-commerce integral ocupa todas las etapas, incluyendo registro, inicio de sesión, carrito de compras, productos, categorías, funcionalidad de búsqueda, detalles de productos y un robusto panel de administración. Construida utilizando tecnologías esenciales como HTML, CSS y JavaScript, la aplicación aprovecha la potencia de SQL y Sequelize para la gestión de datos, respaldada por Node.js para la implementación del servidor. Además, se ha integrado un sistema de APIs personalizadas que interactúan con una base de datos exclusiva para una experiencia única y completa.
              </p>
              <div className="project-btns">
                <a className="btn" href="/project-1" target="_blank" rel="noopener noreferrer">
                  Acceder
                </a>
                <a className="btn" href="https://github.com/LisandroP57/c19-Grupo-3-Cuidate" target="_blank" rel="noopener noreferrer">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img
                src="https://img.icons8.com/?size=512&id=57719&format=png"
                alt="React dashboard"
                className="project-image__img"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">React Dashboard</h3>
              <p className="project-description">
              Este repositorio cuenta con un avanzado panel de administración tipo dashboard. Aca, se brinda una visualización gráfica de nuestros porcentajes a través de gráficos estadísticos, así como un completo listado de productos como de usuarios, detallando información unitaria. Además, se utiliza la librería Formik para gestionar de manera eficiente el proceso de inicio de sesión y registro de usuarios.
Es esencial recalcar que todos los datos se encuentran gestionados por una API de mi autoría. Esta API interactúa de manera integral para administrar todos los datos esenciales en mi base de datos, la cual está orientada hacia un modelo E-commerce.
              </p>
              <div className="project-btns">
                <a className="btn" href="/project-1" target="_blank" rel="noopener noreferrer">
                  Acceder
                </a>
                <a className="btn" href="https://github.com/LisandroP57/React-dashboard" target="_blank" rel="noopener noreferrer">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img
                src="https://img.icons8.com/?size=512&id=RyvldWcnzX2L&format=png"
                alt="Weather App"
                className="project-image__img"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">Weather App</h3>
              <p className="project-description">
                Aplicacion de clima online realizado en react, donde se puede ver el clima filtrandolo por ciudades, Absorbiendo APIS.
              </p>
              <div className="project-btns">
                <a className="btn" href="https://palavecino-weatherapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Acceder
                </a>
                <a className="btn" href="https://github.com/LisandroP57/Weather-App" target="_blank" rel="noopener noreferrer">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img
                src="https://img.icons8.com/?size=512&id=21893&format=png"
                alt="My apis"
                className="project-image__img"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">Plataforma de APIs E-commerce en Node.js: Gestión Completa y Eficiente de Datos</h3>
              <p className="project-description">
              Este proyecto ejemplifica el desarrollo de una plataforma de APIs sólida y adaptable creada en Node.js, creada para satisfacer las necesidades precisas del mundo e-commerce. Esta plataforma ofrece un control sobre la gestión de datos, incluyendo funciones vitales como creación, edición, eliminación y listado por ID de productos y usuarios. Además, incluye una serie de características para el manejo de un carrito de compras funcional, junto con opciones de autenticación y registro de usuarios.
              </p>
              <div className="project-btns">
                <a className="btn" href="https://github.com/LisandroP57/My-Ecommerce-APIs" target="_blank" rel="noopener noreferrer">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img
                src="https://img.icons8.com/?size=512&id=11203&format=png"
                alt="Calculator App"
                className="project-image__img"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">Calculadora Interactiva en React - CalculApp!</h3>
              <p className="project-description">
                Este proyecto demuestra la implementación de una calculadora interactiva con funcionalidades avanzadas utilizando la biblioteca React. Esta calculadora destaca por su organización eficiente en la separación de componentes y la aplicación de los modernos conceptos de desarrollo en React como los hooks.
              </p>
              <div className="project-btns">
                <a className="btn" href="https://palavecino-calculapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Acceder
                </a>
                <a className="btn" href="https://github.com/LisandroP57/My-Ecommerce-APIs" target="_blank" rel="noopener noreferrer">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img
                src="https://img.icons8.com/?size=512&id=2791&format=png"
                alt="Movies App"
                className="project-image__img"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">Movies App</h3>
              <p className="project-description">
              </p>
              <div className="project-btns">
                <a className="btn" href="/project-1" target="_blank" rel="noopener noreferrer">
                  Proximamente
                </a>
{/*                 <a className="btn" href="/project-2" target="_blank" rel="noopener noreferrer">
                  Repositorio
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;