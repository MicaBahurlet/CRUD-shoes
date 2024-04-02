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
        <h4>${price}</h4>
        <BotonBuy onClick={() => dispatch(addToCart({id, img, title, category, price, desc}))}>Comprar</BotonBuy> 
        
      </InfoCard>
      
    </CardRecomendados>
);
}

export default Recomendados


// import styled from 'styled-components';



// export const NewProduct = styled.div`

//     display: inline-block;
//     padding: 5px 10px;
//     border-radius: 50%;
//     background-color: green;
//     color: white;
//     font-weight: bold;
//     font-size: 12px;
//     text-transform: uppercase;
//     transform: rotate(-30deg); /* Ajusta el ángulo de rotación según necesites */
//     transform-origin: 50% 50%;
//     &:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: -14px;
//         border-top: 10px solid transparent;
//         border-bottom: 10px solid transparent;
//         border-right: 10px solid green;
//     }
// `;