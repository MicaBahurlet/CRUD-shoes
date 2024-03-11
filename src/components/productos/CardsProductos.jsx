
// import {productos} from "../../data/productos.js";
import { ProductosContainer, ProductosWrapper } from './CardsProductosStyles.js';
import CardProducto from './CardProducto.jsx';

import { useSelector } from 'react-redux';


  function CardsProductos() {
    
    let products = useSelector((state)=> state.products.products)
    
    return (
      <ProductosWrapper>

        <ProductosContainer>

          {products.map (prod =>( 
            <CardProducto key={prod.id} {...prod} />
          ))}

          {/* {products.map (prod =>( 
            <CardProducto key={prod.id} {...prod} />
          ))} */}
        </ProductosContainer>


      </ProductosWrapper>

    );
  }

export default CardsProductos