
import {productos} from "../../data/productos.js";

import { 
    ProductosContainer, 
    ProductosWrapper, 
    TextProductos,
    BorderSeparacion,


} from './Product.js';

import CardProductos from "./CardProductos.jsx"

import Footer from "../../components/footer/Footer.jsx"
import NavBar from "../../components/navbar/NavBar";

import Categorias from "../../components/categorias/Categorias.jsx"







function CardsProductos() {
  return (
    <div>
      <NavBar/>
      <ProductosWrapper>

          <Categorias/> 

          <BorderSeparacion/>

          <TextProductos> 
              <h2>La casa es chica pero el corazón es grande.</h2>
              <h3>Nuestros productos serán pocos, pero ofrecemos calidad y garantía.</h3>
              <p>Tan simple como seleccionar un producto y agregar al carrito. No dudes, el mejor precio está en <strong>Auris.</strong> </p>
          </TextProductos>   


        <ProductosContainer>
          {productos.map(prod =>(
            <CardProductos key={prod.id} {...prod} />
          ))}
        </ProductosContainer>


      </ProductosWrapper>
        
      <Footer/>

    </div>       

  )
}

export default CardsProductos