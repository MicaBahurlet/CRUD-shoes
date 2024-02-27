
import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <NavbarContext.Provider value={{ clicked, handleClick, closeMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};














// import React, { createContext, useContext, useState, useEffect } from 'react';

// const NavbarContext = createContext();

// export const NavbarProvider = ({ children }) => {
//   const [clicked, setClicked] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   const openMenu = () => {
//     setIsMenuOpen(true);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     function handleResize() {
//       setIsDesktop(window.innerWidth > 768);

//       if (isMenuOpen && isDesktop) {
//         closeMenu();
//       }
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isMenuOpen, isDesktop, closeMenu]);

//   return (
//     <NavbarContext.Provider value={{ clicked, handleClick, isDesktop, isMenuOpen, openMenu, closeMenu }}>
//       {children}
//     </NavbarContext.Provider>
//   );
// };

// export const useNavbarContext = () => {
//   return useContext(NavbarContext);
// };
