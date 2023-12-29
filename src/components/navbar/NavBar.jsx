import { LinkContainerStyled,
  LinksContainersStyled, 
  NavbarContainerStyled, 
  UserNavStyled, 
  UserContainerStyled, 
  SpanStyled, 
  MenuContainerStyled, 
  HomeContainerStyled,
  
} from "./NavBarStyles"

import {FaUserAlt} from "react-icons/fa";
import {HiHome} from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";



function NavBar() {
  return (
    <NavbarContainerStyled>
      <div>
          <a href="#"> 
            <img src="./src/data/imgProducts/LOGO.png" alt="Logo Auris"/>
          </a> 
      </div>

      <LinksContainersStyled>
        <HomeContainerStyled>
          <a href="#">
            <LinkContainerStyled >
              <HiHome />
            </LinkContainerStyled>  
            Home
          </a>
        </HomeContainerStyled>


        <UserNavStyled>
          <UserContainerStyled>
            <FaUserAlt/>
            <SpanStyled>
              Iniciar sesion
            </SpanStyled>
            
          </UserContainerStyled>
        </UserNavStyled>


        <MenuContainerStyled>
          <AiOutlineMenu/>
        </MenuContainerStyled>



      
      </LinksContainersStyled>

    </NavbarContainerStyled>
  )
}

export default NavBar