import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavbarProvider } from  "./components/navbar/NavbarContext.jsx";

import Home from "./pags/Home/Home.jsx";
import Login from "./pags/Login/Login.jsx";
import Register from "./pags/Register/Register.jsx";
import Validate from "./pags/Validate/Validate.jsx";
import About from "./pags/About/About.jsx";
import Products from "./pags/Products/Products.jsx";
import Contact from "./pags/Contacto/Contacto.jsx";
import Checkout from "./pags/Checkout/Checkout.jsx";
import FinishCompra from "./pags/FinishCompra/FinishCompra.jsx";
import Nopage from "./pags/noPage/Nopage.jsx"; 

import Orders from "./pags/Orders/Orders.jsx";

// import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";

function App() {
  return (
    <> 
      <NavbarProvider> {/*Me traigo el contexto del navbar, lo van a utilizar todos los childrens dentro de BrowserRouter */}
        <BrowserRouter> {/*es un higth order component, tiene componentes dentro de el, los componentes que se ecuentren dentro tienen acceso a su información */}

          <Routes> 
                <Route index element={<Home/>}/> {/*Aquí podría usar / en vez de index */}
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="validate" element={<Validate/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="checkout" element={<Checkout/>}/>
                <Route path="finish" element={<FinishCompra/>}/>
                <Route path="*" element={<Nopage/>}/>
                <Route path="orders" element={<Orders/>}/>
                
          </Routes>
      
        </BrowserRouter>
      </NavbarProvider>  
    </>  
      

  )
}

export default App



