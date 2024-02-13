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


  
  
} from "./NavBarStyles"

import {FaUserAlt} from "react-icons/fa";
import {HiHome} from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

import { Link, Outlet } from "react-router-dom";





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


            <MenuContainerStyled> 
              <AiOutlineMenu/>
            </MenuContainerStyled>

            

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

          
          </LinksContainersStyled>

        </NavbarContainerStyled>  
      </nav>  

      <Outlet /> 
      
    </div>


        
          
  )
}

export default NavBar





 /*
    
  */