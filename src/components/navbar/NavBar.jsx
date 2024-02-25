
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Link } from 'react-router-dom'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked)
  }

    /*el menu quedaba abierto en desktop, por eso se agrega el useEffect para que se cierre */
    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 768) {
            setClicked(false);
          }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


  return (
    <>
      <NavContainer>
        <h1>Auris.</h1>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link onClick={handleClick} to="/">Inicio</Link>  
          <Link onClick={handleClick} to="/about">Nosotros</Link>  
          <Link onClick={handleClick} to="/products">Productos</Link>   
          <Link onClick={handleClick} to="/Contact">Contacto</Link> 
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar



// Estilos con StyledComponent, lea grego clases para el menpu


const NavContainer = styled.nav`

  padding: .4rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  /* position: fixed;
  width: 100%; */
  z-index: 3;
 
  h1{
    color: white;
    font-size: 4rem;
    font-family: var(--font-family);
    padding: 1rem;
  }
  
  a{
    color: black;
    text-decoration: none;
    margin-right: 1rem;
    font-family: var(--font-family);
   
    
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: var(--font-family); 
    gap: 3rem;
    transition: all .5s ease;
    
    
    
    a{
      
      font-size: 2rem;
      font-weight: 600;
      display: block;
      

        /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
         border-radius: 1rem;
          display: flex;
         justify-content: center;
         align-items: center;
         gap: 5px;
          padding: 1rem;
          color: black;
          filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));  */
    }
         /* a:hover{
          background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
          text-decoration: none;
        }  */


    @media(min-width: 768px){
      position: initial;
      margin: 0;

      a{
        font-size: 1.2rem;
        
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{  /*Cuando el menú esté activo*/
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;

    max-width: 11rem;

    a{
      font-size: 2rem;
      font-weight: 600;
      margin-top: 1rem;
      color: white;
      
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -1000px; /*para quitarlos al estar el menú open*/
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ; /*animación para abrir el menú*/
  opacity: 97%;
  
  /* Cuando el componente tenga la clase active */

  &.active{ 
    border-radius: 0 0 80% 0; /* 0 a arriba tanto para izquierda y derecha, 80% abajo derecha y 0 izquierda */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);
  }
`








// import { LinkContainerStyled,
//   LinksContainersStyled, 
//   NavbarContainerStyled, 
//   UserNavStyled, 
//   UserContainerStyled, 
//   SpanStyled, 
//   MenuContainerStyled, 
//   HomeContainerStyled,
//   ProductsStyled,
//   ProductContainer,
//   ContactContainer,
//   ContactStyled,
//   MenuContainerClosed,


  
  
// } from "./NavBarStyles"

// import {FaUserAlt} from "react-icons/fa";
// import {HiHome} from "react-icons/hi";
// import { AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";

// import { Link, Outlet } from "react-router-dom";

// import { createContext, useContext, useState } from 'react';





// function NavBar() {
//   return (
    
//     <div>
//       <nav>  
//         <NavbarContainerStyled>
//           <div>
//               <h1>Auris.</h1>
//           </div>

//           <LinksContainersStyled>


//             <HomeContainerStyled>
//               <Link to="/">
//                 <LinkContainerStyled >
//                   <HiHome />
//                 </LinkContainerStyled>  
//                 Inicio
//               </Link>
//             </HomeContainerStyled>


//             <UserNavStyled>
//               <UserContainerStyled>
//                 <SpanStyled>
//                   <Link to="/about"> 
//                     <LinkContainerStyled >
//                     <FaUserAlt/>
//                   </LinkContainerStyled>  
//                     Nosotros
//                   </Link>  
//                 </SpanStyled> 
//               </UserContainerStyled>
//             </UserNavStyled>



//             <ProductContainer>
//                 <ProductsStyled>
//                   <Link to="/products">
//                     Productos 
//                   </Link>  
//                 </ProductsStyled>
//             </ProductContainer>
            

//             <ContactContainer>
//                 <ContactStyled>
//                   <Link to="/Contact">
//                     Contacto 
//                   </Link>  
//                 </ContactStyled>
//             </ContactContainer>



//             <MenuContainerStyled> 
//               <AiOutlineMenu/>
//             </MenuContainerStyled>

//             <MenuContainerClosed> 
//               <AiOutlineClose/>
//             </MenuContainerClosed>
            
//           </LinksContainersStyled>

//         </NavbarContainerStyled>  
//       </nav>  

//       <Outlet /> 
      
//     </div>


        
          
//   )
// }

// export default NavBar








