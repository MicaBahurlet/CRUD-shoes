
import React, { createContext, useContext, useState } from 'react'; //desestructuro lo que voy a usar de Context 

//el context es un Hight order component, 

const NavbarContext = createContext(); //creo el contexto

// proveedor del contexto del anavbar, envuelve componentes que necesitan los datos del contexto
export const NavbarProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false); //para saber si el menú esta clikeado o no

  const handleClick = () => {
    setClicked(!clicked); // negación para cambiar el estado del click, cambia el valor. 
  };


  //Podría crear un documento aparte para el provider. 

  const closeMenu = () => {
    setClicked(false);
  }; // para cerrar definitivamente el menú

  return ( // acá es lo que renderizo 
    <NavbarContext.Provider value={{ clicked, handleClick, closeMenu }}> 
      {children}
    </NavbarContext.Provider>
  );  // me traigo el contexto y dentro uso el children. Con el provider quiero proveer el valor 
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);  // yo quiero que la navbar use el context
};










