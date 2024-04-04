import {  CardRecomendados,
  InfoCard,
  BotonBuy

} from "./recomendados"

import { useDispatch } from "react-redux";
import { addToCart} from "../../redux/cart/cartSlice";

import { useState } from 'react';

import { ModalContainer, ModalContent } from '../../pags/Products/ModalStyles'; 



function Recomendados( {img,title,category, desc, price, id}) {

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  const handleAddToCart = () => {
      dispatch(addToCart({ img, title, category, price, desc, id }));
      setShowModal(true); // Mostrar el mensaje cuando se agrega el producto al carrito
      
      setTimeout(() => {
          setShowModal(false);
      }, 3000); // Ocultar mensaje despues de 3 segundos
  };



  return (
    <CardRecomendados>

      <img src={img} alt={category} />

      <InfoCard >
        <h3>{title}</h3>
        <p>{desc}</p>
        <h4>${price}</h4>
        <BotonBuy onClick={handleAddToCart}>Comprar</BotonBuy> 
        
      </InfoCard>

      {showModal && (
        <ModalContainer className="addModal activeModal">
            <ModalContent> &#9989; Producto agregado al carrito &#128293;</ModalContent>
        </ModalContainer>
      )}
      
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