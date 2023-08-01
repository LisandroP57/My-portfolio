import React from "react";
import "./proyectsmodule.css";

const Projects = () => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub"> Aquí encontrarás algunos de mis proyectos personales que estuve desarrollando! </span>
        </h2>

        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Cuidate!</h3>
              <p className="projects__row-content-desc">
              Cuidate es mi primer app full-stack realizada para Digital House. Precargando una BD con datos de una api para devolverlos con mi propia API, con CRUD completo y filtrado de datos en el front-end.
              </p>
              <a className="btn btn--bg" href="/project-1" target="_blank">
                Acceder
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">React Dashboard</h3>
              <p className="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium molestias repellendus sit cum nulla, id commodi reiciendis in nostrum deleniti consequuntur non corrupti quod mollitia quisquam nihil dignissimos tenetur?
              </p>
              <a className="btn btn--bg" href="/project-2" target="_blank">
                Acceder
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/61fc288f39a306e3130c72643480ce015dec48ae/e3272/assets/jpeg/boreal-coffee-clone.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Weather App</h3>
              <p className="projects__row-content-desc">
                Re-creé el frontend de la aplicación web oficial de Boreal Coffee porque me atrajo su hermosa interfaz de usuario. Fue una gran experiencia para mí construir todo el frontend.
              </p>
              <a className="btn btn--bg" href="/project-3" target="_blank">
                Acceder
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/74f6186aaa2b6d5f6ea6da1013abfeb672f5c807/aee81/assets/jpeg/crown-template.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Movies App</h3>
              <p className="projects__row-content-desc">
                Crown es una plantilla web que creé dirigida a la industria de restaurantes y alimentos, que cualquier persona puede usar para presentar su negocio en línea.
              </p>
              <a className="btn btn--bg" href="/project-4" target="_blank">
                Acceder
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/74f6186aaa2b6d5f6ea6da1013abfeb672f5c807/aee81/assets/jpeg/crown-template.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Mis APIs</h3>
              <p className="projects__row-content-desc">
                Desarrollo de apis propias para proyecto de e-commerce
              </p>
              <a className="btn btn--bg" href="/project-4" target="_blank">
                Ver repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;