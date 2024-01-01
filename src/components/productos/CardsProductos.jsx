
import {productos} from "../../data/productos.js";
import { ProductosContainer, ProductosWrapper } from './CardsProductosStyles.js';
import CardProducto from './CardProducto.jsx';


function CardsProductos() {
  return (
    <ProductosWrapper>

      <ProductosContainer>
        {productos.map(prod =>(
          <CardProducto key={prod.id} {...prod} />
        ))}
      </ProductosContainer>


    </ProductosWrapper>

  )
}

export default CardsProductos