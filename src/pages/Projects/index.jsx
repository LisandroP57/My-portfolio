import React from "react";
import "./proyectsmodule.css";

const Projects = () => {
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
              <h3 className="project-title">Cuidate!</h3>
              <p className="project-description">
                Cuidate es mi primer app full-stack realizada para Digital House. Precargando una BD con datos de una API para devolverlos con mi propia API, con CRUD completo y filtrado de datos en el front-end.
              </p>
              <div className="project-btns">
                <a className="btn" href="/project-1" target="_blank">
                  Acceder
                </a>
                <a className="btn" href="https://github.com/LisandroP57/c19-Grupo-3-Cuidate" target="_blank">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium molestias repellendus sit cum nulla, id commodi reiciendis in nostrum deleniti consequuntur non corrupti quod mollitia quisquam nihil dignissimos tenetur?
              </p>
              <div className="project-btns">
                <a className="btn" href="/project-1" target="_blank">
                  Acceder
                </a>
                <a className="btn" href="https://github.com/LisandroP57/React-dashboard" target="_blank">
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
                Re-creé el frontend de la aplicación web oficial de Boreal Coffee porque me atrajo su hermosa interfaz de usuario. Fue una gran experiencia para mí construir todo el frontend.
              </p>
              <div className="project-btns">
                <a className="btn" href="/project-1" target="_blank">
                  Acceder
                </a>
                <a className="btn" href="https://github.com/LisandroP57/Weather-App" target="_blank">
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
              <h3 className="project-title">My e-commerce APIs</h3>
              <p className="project-description">
                Desarrollo de apis propias para proyecto de e-commerce
              </p>
              <div className="project-btns">
                <a className="btn" href="https://github.com/LisandroP57/My-Ecommerce-APIs" target="_blank">
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
              <h3 className="project-title">Calculator React App</h3>
              <p className="project-description">
                Calculadora basica con funcionalidades, realizada con react.
              </p>
              <div className="project-btns">
                <a className="btn" href="/project-1" target="_blank">
                  Acceder
                </a>
                <a className="btn" href="https://github.com/LisandroP57/My-Ecommerce-APIs" target="_blank">
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
                <a className="btn" href="/project-1" target="_blank">
                  Proximamente
                </a>
{/*                 <a className="btn" href="/project-2" target="_blank">
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