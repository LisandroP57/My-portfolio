import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import avatar from "../../assets/avatar.png";

function Navbar() {
  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavContainer>
        <Link to="/" className='link-container'>
          <img src={avatar} alt="avatar" className="avatar" />
          <h2>Lisandro Palavecino</h2>
        </Link>
        <div className='links'>
          <Link to="/">About me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link onClick={scrollToFooter}>Contact</Link>
        </div>
        <div class="burguer-menu">
            <div class="navigation">
                <div class="menu">
                  <img src="https://cdn-icons-png.flaticon.com/512/5461/5461272.png" alt='burguermenu'/>
                  <div class="submenu">
                    <Link to="/">About</Link><hr></hr>
                    <Link to="/projects">Projects</Link><hr></hr>
                    <Link to="/skills">Skills</Link><hr></hr>
                    <Link onClick={scrollToFooter}>Contact</Link><hr></hr>
                  </div>
                </div>
            </div>
        </div>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`

  html {
    width: 100%;
  }

  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .5rem 3rem;
  background-color: #0e2953;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: black;
    text-decoration: none;
    margin-right: 1rem;
  }
  .avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px
  }
  .link-container {
    display:flex;
    margin: 5px;
    align-items:center;
  }
  .link-container h2 {
    margin: 1rem;
    text-transform: uppercase;
    font-size: 18px;
    font-weight:600;
    letter-spacing: 1.8px;
  }
  .link-container h2:hover {
    color: #AF7AC5;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: 0.3s ease-in-uot;
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        @media(min-width: 962px){
          margin: 30px;
          letter-spacing: 1.5px;
        }
        color: white;
        text-decoration: none;
        margin: 5px;
        display:inline;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 18px;
        font-weight:600;
        transition: all 0.5s;
      }
      a:hover {
        font-size: 21px;
        color: #AF7AC5;
      }
      display: block;
    }
  }

  .links.active{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 3rem;
      font-weight: 600;
      font-variant: all-petite-caps;
      margin-top: 1rem;
      color: white;
    }
  }
`