import {  CardRecomendados,
  InfoCard,
  BotonBuy

} from "./recomendados"

import { useDispatch } from "react-redux";
import { addToCart} from "../../redux/cart/cartSlice";



function Recomendados( {img,title,category, desc, price, id}) {

  const dispatch = useDispatch();


  return (
    <CardRecomendados>
    <img src={img} alt={category} />
    <InfoCard >
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>${price}</p>
       <BotonBuy onClick={() => dispatch(addToCart({id, img, title, category, price, desc}))}>Comprar</BotonBuy> 
      
    </InfoCard>
    
    
   
  </CardRecomendados>
);
}

export default Recomendados


