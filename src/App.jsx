import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavbarProvider } from  "./components/navbar/NavbarContext.jsx";


import Nopage from "./pags/noPage/Nopage.jsx"; 
import About from "./pags/About/About.jsx";
import Home from "./pags/Home/Home.jsx";
import Contact from "./pags/Contacto/Contacto.jsx";
import Products from "./pags/Products/Products.jsx";
import Login from "./pags/Login/Login.jsx";



function App() {
  

  return (
    <> 
      <NavbarProvider> {/*Me traigo el contexto del navbar, lo van a utilizar todos los childrens dentro de BrowserRouter */}
        <BrowserRouter> {/*es un higth order component, tiene componentes dentro de el, los componentes que se ecuentren dentro tienen acceso a su información */}

          <Routes> 
                <Route index element={<Home/>}/> {/*Aquí podría usar / en vez de index */}
                <Route path="login" element={<Login/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<Nopage/>}/>

          </Routes>
      
        </BrowserRouter>
      </NavbarProvider>  
    </>  
      

  )
}

export default App



