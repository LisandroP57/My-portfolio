import React from "react";
import './aboutmodule.css';

const About = () => {
    return (
        <section class="home-section">
            <div class="home_content">
                <h1 class="heading-primary">Hola, soy Lisandro!</h1>
                <div class="home_info">
                    <p class="text-primary">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nisi adipisci blanditiis laborum eveniet sint veritatis itaque accusamus quisquam inventore, ipsam animi cupiditate voluptates autem omnis veniam. Soluta, id! Illum!
                    </p>
                </div>
                <div class="home-btn">
                    <a href="/projects" class="btn btn--bg">My Projects</a>
                </div>
            </div>
        </section>
    );
};

export default About;