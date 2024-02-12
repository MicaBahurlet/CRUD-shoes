
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