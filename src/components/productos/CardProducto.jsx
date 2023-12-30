
import { CardProducto, BorderDecorationProducto } from "./CardsProductosStyles"

function Productos ( {img,title,category,price,des}) {
  return (
    <CardProducto>
        <img src={img} alt={category} />
        <h3>{title}</h3>
        <p>{des}</p>
        <p>${price}</p>
        <BorderDecorationProducto />
    </CardProducto>
  )
}

export default Productos