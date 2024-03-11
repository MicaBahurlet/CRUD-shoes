


import { CardProducto, 
  
  AgregarCart,
 } from "./Product"


function Productos ( {img,title,category,price,desc}) {
  return (
    <CardProducto>
        <img src={img} alt={category} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>${price}</p>
        <AgregarCart>Comprar</AgregarCart>
        
    </CardProducto>
  )
}

export default Productos