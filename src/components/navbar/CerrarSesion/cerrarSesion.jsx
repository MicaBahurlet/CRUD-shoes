import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { useNavbarContext } from '../NavbarContext';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/user/userSlice'; 

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { closeMenu } = useNavbarContext();
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    closeMenu();
    dispatch(logoutUser()); // Acción para limpiar estado de usuario
    localStorage.removeItem('token'); // Eliminar token del almacenamiento local
    console.log('Cerrar sesión');
    window.location.href = '/login'; // Redirigir a la página de login. Ver si quiero dejar esta pag
  };

  return (
    <UserDropdownContainer>
      <FaUser className="IconsNav" onClick={toggleDropdown} />
      {isOpen && (
        <DropdownMenu>
          <DropdownItem>Mis pedidos</DropdownItem>
          <DropdownItem onClick={handleLogout}>Cerrar sesión</DropdownItem> 
        </DropdownMenu>
      )}
    </UserDropdownContainer>
  );
};

export default UserDropdown;

const UserDropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
  font-size: x-large;
  z-index: 3;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: black;
  border: 1px solid greenyellow;
  border-radius: 5px;
  width: 150px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  /* z-index: 1000; */

`;

const DropdownItem = styled.div`
  padding: 10px;
  color: white;
  font-family: var(--font-family);
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  /* margin-top: 2rem; */

  &:hover {
    background-color: greenyellow;
    color: black;
  }
`;
