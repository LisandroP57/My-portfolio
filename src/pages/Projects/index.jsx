import React from "react";
import "./proyectsmodule.css";

const Projects = () => {
  return (
    <section id="projects" className="projects section-pad">
      <div className="main-container">
        <h2 className="heading heading-section heading-section__mb-bg">
          <span className="heading-section__main">Projects</span>
          <span className="heading-section__sub"> Aquí encontrarás algunos de mis proyectos personales que estuve desarrollando! </span>
        </h2>

        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://img.icons8.com/?size=512&id=121367&format=png"
                alt="Cuidate app"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Cuidate!</h3>
              <p className="projects__row-content-desc">
              Cuidate es mi primer app full-stack realizada para Digital House. Precargando una BD con datos de una api para devolverlos con mi propia API, con CRUD completo y filtrado de datos en el front-end.
              </p>
              <div className="btns-container">
                <a className="btn btn--bg" href="/project-1" target="_blank">
                  Acceder
                </a>
                <a className="btn btn--bg" href="/project-2" target="_blank">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://img.icons8.com/?size=512&id=57719&format=png"
                alt="React dashboard"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">React Dashboard</h3>
              <p className="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium molestias repellendus sit cum nulla, id commodi reiciendis in nostrum deleniti consequuntur non corrupti quod mollitia quisquam nihil dignissimos tenetur?
              </p>
              <div className="btns-container">
                <a className="btn btn--bg" href="/project-1" target="_blank">
                  Acceder
                </a>
                <a className="btn btn--bg" href="/project-2" target="_blank">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://img.icons8.com/?size=512&id=RyvldWcnzX2L&format=png"
                alt="Weather App"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Weather App</h3>
              <p className="projects__row-content-desc">
                Re-creé el frontend de la aplicación web oficial de Boreal Coffee porque me atrajo su hermosa interfaz de usuario. Fue una gran experiencia para mí construir todo el frontend.
              </p>
              <div className="btns-container">
                <a className="btn btn--bg" href="/project-1" target="_blank">
                  Acceder
                </a>
                <a className="btn btn--bg" href="/project-2" target="_blank">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://img.icons8.com/?size=512&id=21893&format=png"
                alt="My apis"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">My e-commerce APIs</h3>
              <p className="projects__row-content-desc">
                Desarrollo de apis propias para proyecto de e-commerce
              </p>
              <div className="btns-container">
                <a className="btn btn--bg" href="https://github.com/LisandroP57/My-Ecommerce-APIs" target="_blank">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://img.icons8.com/?size=512&id=11203&format=png"
                alt="Calculator App"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Calculator React App</h3>
              <p className="projects__row-content-desc">
                Calculadora basica con funcionalidades, realizada con react.
              </p>
              <div className="btns-container">
                <a className="btn btn--bg" href="/project-1" target="_blank">
                  Acceder
                </a>
                <a className="btn btn--bg" href="https://github.com/LisandroP57/My-Ecommerce-APIs" target="_blank">
                  Repositorio
                </a>
              </div>
            </div>
          </div>

          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://img.icons8.com/?size=512&id=2791&format=png"
                alt="Movies App"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Movies App</h3>
              <p className="projects__row-content-desc">
              </p>
              <div className="btns-container">
                <a className="btn btn--bg" href="/project-1" target="_blank">
                  Proximamente
                </a>
{/*                 <a className="btn btn--bg" href="/project-2" target="_blank">
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