import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useNavbarContext } from './NavbarContext'; //importo el contexto
import LogoImg from '../../data/imgProducts/Logo7.png';

import  { FaUser, FaHome, FaShoppingCart, FaEnvelope,  } from 'react-icons/fa';

import { TfiShoppingCart } from "react-icons/tfi";



const Navbar = () => {
  const { clicked, handleClick, closeMenu } = useNavbarContext();

  return (
    <Nav>
      <Logo>
        <img src={LogoImg} alt="Logo" />
      </Logo>
      <Burger onClick={handleClick}>
        <div className={`icon ${clicked ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Burger>
      <Menu clicked={clicked}> {/*AQUI VAN LOS LINKS, si yo usara "a" me recargaría react en cada navegación */}
          <NavLink 
            className={({ isActive }) => isActive ? 'active' : ''} //si isActive es true, le pongo active, si no, no
            to="/" onClick={closeMenu} >
              <FaHome className='IconsNav'/>
              Inicio
          </NavLink>

          <NavLink
              className={({ isActive }) => isActive ? 'active' : ''}
             to="/about" onClick={closeMenu}>
              <FaUser className='IconsNav'/>
              Nosotros
          </NavLink>

          <NavLink
              className={({ isActive }) => isActive ? 'active' : ''}
              to="/products" onClick={closeMenu}>
              <FaShoppingCart className='IconsNav'/>
              Productos
          </NavLink>

          <NavLink
              className={({ isActive }) => isActive ? 'active' : ''}
             to="/contact" onClick={closeMenu}>
              <FaEnvelope className='IconsNav'/>
              Contacto
          </NavLink>

          <div className='CartNav'>
          <TfiShoppingCart />
          </div>

      </Menu>
    </Nav>
  );
};



/* STYLED COMPONENTS */

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: black;
  color: white;
  gap: 2.5rem;
  

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    

  }
  @media (max-width: 576px) {
    padding: 1rem 1.5rem;
    

  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-family:  var(--font-family); 
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    
  }
  @media (max-width: 576px) {
    display: block;
    
  }

  .icon {
    width: 35px;
    height: 30px;
    position: relative;

    span {
      background-color: #fff;
      position: absolute;
      border-radius: 2px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      width: 100%;
      height: 4px;
      transition-duration: 500ms;
    }

    span:nth-child(1) {
      top: 0px;
      left: 0px;
    }
    span:nth-child(2) {
      top: 13px;
      left: 0px;
      opacity: 1;
    }
    span:nth-child(3) {
      bottom: 0px;
      left: 0px;
    }
  }

  .open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .open span:nth-child(2) {
    opacity: 0;
  }
  .open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-family: var(--font-family); 
    gap: 2rem;
    font-weight: 500;

    &:hover {  /* cuando pase el cursor por el link */
      border-bottom: 3px solid greenyellow;  
    }
  }

  .IconsNav {
    margin-right: 5px;
    
  }

  .StyleLink {
    text-decoration: none;
    color: white;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-family: var(--font-family); 
    gap: 2rem;
    font-weight: 500;

    &:hover {  /* cuando pase el cursor por el link */
      border-bottom: 3px solid greenyellow;  
    }
  }

  .active {
   /* border-bottom: 3px solid greenyellow;  */
    font-weight: 700;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border-radius: 10px;
    padding: 10px 20px;
    color: black;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 104px;
    left: 0;
    right: 0;
    background-color: black;
    text-align: center;
    overflow: hidden;
    height: ${({ clicked }) => (clicked ? '100vh' : '0')}; /* para que ocupe el 100 de la pantalla */
    transition: height 0.3s ease-in-out;
    font-size: 5rem;
    font-weight: bold;

    gap: 3rem;

    border-radius: 0 0 50% 0;
    
    
    

  }
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 104px;
    left: 0;
    right: 0;
    background-color: black;
    text-align: center;
    overflow: hidden;
    height: ${({ clicked }) => (clicked ? '100vh' : '0')}; /* para que ocupe el 100 de la pantalla */
    transition: height 0.3s ease-in-out;
    font-size: 5rem;
    font-weight: bold;

    gap: 3rem;

    border-radius: 0 0 50% 0;
    
    
    

  }

  .CartNav {
    color:white;
    font-size: x-large;
    font-weight: 900;
    
  }
`;

export default Navbar;


