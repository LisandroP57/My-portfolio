import React, { useEffect } from "react";
import './notfoundmodule.css';

export const NotFound = () => {
    useEffect(() => {
        document.title = "Lisandro Palavecino | Error!";
      }, []);

    return (
        <div>
      <header className="top-header"></header>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Page Not Found</h1>
            <p className="message__text">Lo siento, la página que estás buscando no se encuentró.El enlace puede estar roto o no existir. Por favor, intenta de nuevo, o vuelve a el inicio.</p>
          </div>
          <div className="error__nav e-nav">
            <a href="https://palavecino-lisandrodev.netlify.app" rel="noopener noreferrer" className="e-nav__link"> </a>
          </div>
        </div>
      </section>
    </div>
  );
};