import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useNavbarContext } from './NavbarContext'; // Importa el contexto
import { useSelector } from 'react-redux'; // Importa useSelector para acceder al estado de Redux
import { FaHome } from 'react-icons/fa';
import CartIcon from './CartIcon/CartIcon';
import ModalCart from './ModalCart/ModalCart';
import CerrarSesion from './CerrarSesion/cerrarSesion.jsx';
import { motion } from "framer-motion";

const Navbar = () => { 
  const currentUser = useSelector(state => state.user.currentUser); // Obtén el usuario actual del estado
  const { clicked, handleClick, closeMenu } = useNavbarContext(); // Accede al contexto
  
  return (
    <Nav>
      <ModalCart />
      <Logo>
        <h1>CRUD | shoes</h1>
      </Logo>
      <Burger onClick={handleClick}> 
        <div className={`icon ${clicked ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Burger>
      <Menu clicked={clicked}>
        <NavLink 
          className={({ isActive }) => isActive ? 'active' : ''}
          to="/" onClick={closeMenu}>
            {/* <FaHome className='IconsNav'/> */}
            HOME
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : ''}
          to="/products" onClick={closeMenu}>
          PRODUCTOS
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : ''}
          to="/about" onClick={closeMenu}>
          NOSOTROS
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'active' : ''}
          to="/contact" onClick={closeMenu}>
          CONTACTO
        </NavLink>
      </Menu>
      <UserAndCartNav>
        {currentUser ? (
          <>
            <UserGreeting>Hola, {currentUser.nombre}</UserGreeting>
            <CerrarSesion />
          </>
        ) : (
          <NavLink
            className={({ isActive }) => isActive ? 'active' : ''}
            to="/login" onClick={closeMenu}>
            INICIAR SESIÓN
          </NavLink>
        )}
        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>
      </UserAndCartNav>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 3rem;
  background-color: black;
  color: white;
  gap: 3rem;
  height: 5rem;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
  @media (max-width: 576px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-family: var(--font-family); 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: white;
  user-select: none; 

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const UserAndCartNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a {
    text-decoration: none;
    color: white;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-family: var(--font-family); 
    gap: 2rem;
    font-weight: 700;

    &:hover {  
      border-bottom: 3px solid greenyellow;  
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }
`;

const UserGreeting = styled.span`
  color: white;
  font-size: 1.2rem;
  font-family: var(--font-family);
  font-weight: 700;

  @media (max-width: 576px) {
    display: none;
  }

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
  z-index: 3;

  a {
    text-decoration: none;
    color: white;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-family: var(--font-family); 
    gap: 2rem;
    font-weight: 700;

    &:hover { 
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

    &:hover {  
      border-bottom: 4px solid greenyellow;  
    }
  }

  .active {
    font-weight: 900;
    color: greenyellow;
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
    z-index: 3;
  }
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  font-size: x-large;
  z-index: 3;

  span {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    text-align: center;
    justify-content: center;
    border-radius: 1rem;
    border: 1px solid green;
    color: white;
    background-color: greenyellow; //color bubble
    font-family: var(--font-family);
    font-size: 0.9rem;
    font-weight: 800;
    color: black;
    padding: 1.5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: white;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 504px);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  ${({ isHidden }) =>
    !isHidden &&
    `backdrop-filter: blur(8px);`
  }
`;

export default Navbar;







// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import { useNavbarContext } from './NavbarContext'; // Importa el contexto
// import { useSelector, useDispatch } from 'react-redux'; // Importa useSelector para acceder al estado de Redux
// import { FaHome } from 'react-icons/fa';
// import { motion } from "framer-motion";
// import CartIcon from './CartIcon/CartIcon';
// import ModalCart from './ModalCart/ModalCart';
// import CerrarSesion from './CerrarSesion/cerrarSesion.jsx';


// const Navbar = () => { 
//   const currentUser = useSelector(state => state.user.currentUser); // Obtén el usuario actual del estado
//   const { clicked, handleClick, closeMenu } = useNavbarContext(); // Accede al contexto
  

//   return (
//     <Nav>
//       <ModalCart />
//       <Logo>
//         <h1>CRUD | shoes</h1>
//       </Logo>
//       <Burger onClick={handleClick}> 
//         <div className={`icon ${clicked ? 'open' : ''}`}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </Burger>
//       <Menu clicked={clicked}>
//         <NavLink 
//           className={({ isActive }) => isActive ? 'active' : ''}
//           to="/" onClick={closeMenu}>
//             <FaHome className='IconsNav'/>
//             HOME
//         </NavLink>
//         <NavLink
//           className={({ isActive }) => isActive ? 'active' : ''}
//           to="/products" onClick={closeMenu}>
//           PRODUCTOS
//         </NavLink>
//         <NavLink
//           className={({ isActive }) => isActive ? 'active' : ''}
//           to="/about" onClick={closeMenu}>
//           NOSOTROS
//         </NavLink>
//         <NavLink
//           className={({ isActive }) => isActive ? 'active' : ''}
//           to="/contact" onClick={closeMenu}>
//           CONTACTO
//         </NavLink>
//       </Menu>

//       <UserAndCartNav>
//         {currentUser ? (
//           <>
//             <UserGreeting>Hola, {currentUser.nombre}</UserGreeting>
//             <CerrarSesion />
//           </>
//         ) : (
//           <NavLink
//             className={({ isActive }) => isActive ? 'active' : ''}
//             to="/login" onClick={closeMenu}>
//             INICIAR SESIÓN
//           </NavLink>
//         )}
//         <CartNavStyled>
//           <CartIcon />
//         </CartNavStyled>
//       </UserAndCartNav>
//     </Nav>
//   );
// };


// /* STYLED COMPONENTS */

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   padding: 1rem 3rem;
//   background-color: black;
//   color: white;
//   gap: 3rem;
//   height: 5rem;
  
//   /* position: sticky; */
//   /* z-index: 2; */
  

//   @media (max-width: 768px) {
//     padding: 1rem 1.5rem;
    

//   }
//   @media (max-width: 576px) {
//     padding: 1rem 1.5rem;
    

//   }
// `;

// const Logo = styled.h1`
//   font-size: 1.5rem;
//   font-family:  var(--font-family); 
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 2rem;
//   color: white;
//   user-select: none; 
// `;

// const UserAndCartNav = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 2rem;

//   a {
//     text-decoration: none;
//     color: white;
//     margin: 0 1rem;
//     font-size: 1.2rem;
//     font-family: var(--font-family); 
//     gap: 2rem;
//     font-weight: 700;


//     &:hover {  
//       border-bottom: 3px solid greenyellow;  
//     }
//   }

// `;

// const UserGreeting = styled.span`
//   color: white;
//   font-size: 1.2rem;
//   font-family: var(--font-family);
//   font-weight: 700;
// `;

// const Burger = styled.div`
//   display: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
    
//   }
//   @media (max-width: 576px) {
//     display: block;
    
//   }

//   .icon {
//     width: 35px;
//     height: 30px;
//     position: relative;

//     span {
//       background-color: #fff;
//       position: absolute;
//       border-radius: 2px;
//       transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
//       width: 100%;
//       height: 4px;
//       transition-duration: 500ms;
//     }

//     span:nth-child(1) {
//       top: 0px;
//       left: 0px;
//     }
//     span:nth-child(2) {
//       top: 13px;
//       left: 0px;
//       opacity: 1;
//     }
//     span:nth-child(3) {
//       bottom: 0px;
//       left: 0px;
//     }
//   }

//   .open span:nth-child(1) {
//     transform: rotate(45deg);
//     top: 13px;
//   }
//   .open span:nth-child(2) {
//     opacity: 0;
//   }
//   .open span:nth-child(3) {
//     transform: rotate(-45deg);
//     top: 13px;
//   }
// `;

// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   z-index: 3;
//   /* margin-right: 33rem; */

//   a {
//     text-decoration: none;
//     color: white;
//     margin: 0 1rem;
//     font-size: 1.2rem;
//     font-family: var(--font-family); 
//     gap: 2rem;
//     font-weight: 700;

//     &:hover { 
//       border-bottom: 3px solid greenyellow;  
//     }
//   }

//   .IconsNav {
//     margin-right: 5px;
    
//   }

//   .StyleLink {
//     text-decoration: none;
//     color: white;
//     margin: 0 1rem;
//     font-size: 1.2rem;
//     font-family: var(--font-family); 
//     gap: 2rem;
//     font-weight: 500;

//     &:hover {  
//       border-bottom: 4px solid greenyellow;  
//     }
//   }

//   .active {
//     font-weight: 900;
//     color: greenyellow;
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: 104px;
//     left: 0;
//     right: 0;
//     background-color: black;
//     text-align: center;
//     overflow: hidden;
//     height: ${({ clicked }) => (clicked ? '100vh' : '0')}; /* para que ocupe el 100 de la pantalla */
//     transition: height 0.3s ease-in-out;
//     font-size: 5rem;
//     font-weight: bold;

//     gap: 3rem;

//     border-radius: 0 0 50% 0;
    
    
    

//   }
//   @media (max-width: 576px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: 104px;
//     left: 0;
//     right: 0;
//     background-color: black;
//     text-align: center;
//     overflow: hidden;
//     height: ${({ clicked }) => (clicked ? '100vh' : '0')}; /* para que ocupe el 100 de la pantalla */
//     transition: height 0.3s ease-in-out;
//     font-size: 5rem;
//     font-weight: bold;

//     gap: 3rem;

//     border-radius: 0 0 50% 0;
    
//   }

//   .CartNav {
//     color:white;
//     font-size: x-large;
//     font-weight: 900;
//     z-index: 3;
    
//   }
// `;

// //bubble nav cart

// export const CartNavStyled = styled.div`
//   position: relative;
//   cursor: pointer;
//   font-size: x-large;
//   z-index: 3;

//   span {
//     position: absolute;
//     top: 0;

//     height: 20px;
//     width: 20px;
//     text-align: center;
//     justify-content: center;
//     border-radius: 1rem;
//     border: 1px solid green;
//     color: white;
//     background-color: greenyellow; //color bubble
//     font-family: var(--font-family);
//     font-size: 0.9rem;
//     font-weight: 800;
//     color: black;
//     padding: 1.5px;
//   }
// `;

// export const LinkContainerStyled = styled.div`
//   font-size: 1.2rem;
//   color: white;
// `;

// export const ModalOverlayStyled = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 50;
//   width: calc(100vw - 504px);
//   height: 100vh;

//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 1000;


//   ${({ isHidden }) =>
//     !isHidden &&
//     `backdrop-filter: blur(8px);`
//   }
// `;

// export default Navbar;



