import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.module.css";
import logo from "../../assets/logo.png";

const headerMenu = () => {
	const [exandheaderMenu, setExpandheaderMenu] = useState(false);

    return (
        <Navbar id={exandheaderMenu ? "open" : "close"}>
            <Container>
                <Navbar.Brand> 
                    <img src={logo} alt="logo" className='logo'></img> 
                    <span id="title">Lisandro Palavecino Portfolio</span>
                </Navbar.Brand>
                {/* Menu burguer */}
                <div className='toggleButton'>
                    <button onClick ={() => { setExpandheaderMenu((prev) => !prev)} }>
                        <MenuIcon />
                    </button>
                </div>

                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="projects">Projects</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </Container>
        </Navbar>
    );
}

export default headerMenu;