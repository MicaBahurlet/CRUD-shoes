


import { CardProducto, BorderDecorationProducto } from "./Product"


function Productos ( {img,title,category,price,desc}) {
  return (
    <CardProducto>
        <img src={img} alt={category} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>${price}</p>
        <BorderDecorationProducto />
    </CardProducto>
  )
}

export default Productos