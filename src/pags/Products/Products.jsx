
import {productos} from "../../data/productos.js";

import { 
    ProductosContainer, 
    ProductosWrapper, 
    TextProductos,


} from './Product.js';

import CardProductos from "./CardProductos.jsx"



function CardsProductos() {
  return (
    <ProductosWrapper>

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

  )
}

export default CardsProductos