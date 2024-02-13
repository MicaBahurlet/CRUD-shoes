import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*  import  Categorias  from "./components/categorias/Categorias.jsx";
import  Footer  from "./components/footer/Footer.jsx";
import  Hero  from "./components/hero/Hero.jsx";
import  Navbar  from "./components/navbar/NavBar.jsx";
import Layout from "./components/layout/Layout.jsx";
import CardsProductos from "./components/productos/CardsProductos.jsx";
*/

import Nopage from "./pags/noPage/Nopage.jsx"; 
import About from "./pags/About/About.jsx";
import Home from "./pags/Home/Home.jsx";
import Contact from "./pags/Contacto/Contacto.jsx";
import Products from "./pags/Products/Products.jsx";




function App() {
  

  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}> 
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<Nopage/>}/>
          </Route>
          
        </Routes>

      </BrowserRouter>
      
      

  )
}

export default App 


/*function App() {
  

  return (
    <>
      <Navbar />
      <Layout>
        <Hero/>
        <Categorias/>
        <CardsProductos/>
      </Layout>
      <Footer/>
      
    </>
  )
}

export default App  */