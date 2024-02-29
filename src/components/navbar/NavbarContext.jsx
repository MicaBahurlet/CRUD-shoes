
import React, { createContext, useContext, useState } from 'react'; //desestructuro lo que voy a usar de Context 

//el context es un Hight order component, 

const NavbarContext = createContext(); 

export const NavbarProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };


  //Podría crear un documento aparte para el provider. 

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <NavbarContext.Provider value={{ clicked, handleClick, closeMenu }}> 
      {children}
    </NavbarContext.Provider>
  );  // me traigo el contexto y dentro uso el children. Con el provider quiero proveer el valor 
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);  // yo quiero que la navbar use el context
};










