
import { CardProducto, 
  BotonBuy
  
} from "./Product"


import { useDispatch } from "react-redux";
import { addToCart} from "../../redux/cart/cartSlice";


function Productos ( {img,title,category,price,desc}) {
  const dispatch = useDispatch();
  return (
    <CardProducto>
        <img src={img} alt={category} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>${price}</p>
        <BotonBuy onClick={() => dispatch(addToCart({id, img, title, category, price, desc}))}>Comprar</BotonBuy>
        
    </CardProducto>
  )
}

export default Productos