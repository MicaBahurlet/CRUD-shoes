import { LinkContainerStyled,
  LinksContainersStyled, 
  NavbarContainerStyled, 
  UserNavStyled, 
  UserContainerStyled, 
  SpanStyled, 
  MenuContainerStyled, 
  HomeContainerStyled,
  ProductsStyled,
  ProductContainer,
  ContactContainer,
  ContactStyled,
  MenuContainerClosed,


  
  
} from "./NavBarStyles"

import {FaUserAlt} from "react-icons/fa";
import {HiHome} from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { Link, Outlet } from "react-router-dom";

import { createContext, useContext, useState } from 'react';





function NavBar() {
  return (
    
    <div>
      <nav>  
        <NavbarContainerStyled>
          <div>
              <h1>Auris.</h1>
          </div>

          <LinksContainersStyled>


            <HomeContainerStyled>
              <Link to="/">
                <LinkContainerStyled >
                  <HiHome />
                </LinkContainerStyled>  
                Inicio
              </Link>
            </HomeContainerStyled>


            <UserNavStyled>
              <UserContainerStyled>
                <SpanStyled>
                  <Link to="/about"> 
                    <LinkContainerStyled >
                    <FaUserAlt/>
                  </LinkContainerStyled>  
                    Nosotros
                  </Link>  
                </SpanStyled> 
              </UserContainerStyled>
            </UserNavStyled>



            <ProductContainer>
                <ProductsStyled>
                  <Link to="/products">
                    Productos 
                  </Link>  
                </ProductsStyled>
            </ProductContainer>
            

            <ContactContainer>
                <ContactStyled>
                  <Link to="/Contact">
                    Contacto 
                  </Link>  
                </ContactStyled>
            </ContactContainer>



            <MenuContainerStyled> 
              <AiOutlineMenu/>
            </MenuContainerStyled>

            <MenuContainerClosed> 
              <AiOutlineClose/>
            </MenuContainerClosed>
            
          </LinksContainersStyled>

        </NavbarContainerStyled>  
      </nav>  

      <Outlet /> 
      
    </div>


        
          
  )
}

export default NavBar






