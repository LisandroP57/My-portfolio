import React from 'react';
import './skillsmodule.css';

const Skills = () => {
  return (
    <div className='div-primary'>
        <div className="skill-card">
            <div className="skill-card__header">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                alt="Logo HTML5"
                className="skill-card__icon"
            />
            </div>
            <div className="skill-card__body">
            <h2 className="skill-card__title">Html5</h2>
            </div>
        </div>

        <div className="skill-card">
            <div className="skill-card__header" style={{ backgroundColor: '#b8d7ff' }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                alt="Logo CSS3"
                className="skill-card__icon"
            />
            </div>
            <div className="skill-card__body">
            <h2 className="skill-card__title">Css3</h2>
            </div>
        </div>

        <div className="skill-card">
            <div className="skill-card__header" style={{ backgroundColor: '#f7df1e' }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="Logo JS"
                className="skill-card__icon"
            />
            </div>
            <div className="skill-card__body">
            <h2 className="skill-card__title">Javascript</h2>
            </div>
        </div>    

        <div className="skill-card">
        <div className="skill-card__header" style={{ backgroundColor: '#c9e9fc' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="Logo React"
            className="skill-card__icon"
          />
        </div>
        <div className="skill-card__body">
          <h2 className="skill-card__title">React JS</h2>
        </div>
      </div> 

      <div className="skill-card">
        <div className="skill-card__header" style={{ backgroundColor: '#d3d3d3' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="Logo Node JS"
            className="skill-card__icon"
          />
        </div>
        <div className="skill-card__body">
          <h2 className="skill-card__title">Node JS</h2>
        </div>
      </div>

      <div className="skill-card">
        <div className="skill-card__header" style={{ backgroundColor: '#84d1b3' }}>
          <img
            src="https://pngimg.com/uploads/mysql/mysql_PNG35.png"
            alt="Logo SQL"
            className="skill-card__icon"
          />
        </div>
        <div className="skill-card__body">
          <h2 className="skill-card__title">MySQL</h2>
        </div>
      </div>

      <div className="skill-card">
        <div className="skill-card__header" style={{ backgroundColor: '#4a5bb0' }}>
          <img
            src="https://assets.stickpng.com/images/58482ee4cef1014c0b5e4a75.png"
            alt="Logo Sequelize"
            className="skill-card__icon"
          />
        </div>
        <div className="skill-card__body">
          <h2 className="skill-card__title">Sequelize</h2>
        </div>
      </div>

    </div>
  );
};

export default Skills;