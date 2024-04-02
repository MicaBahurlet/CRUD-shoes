
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { ModalContainer, ModalContent } from './ModalStyles'; 
import { CardProducto, 
  BotonBuy
  
} from "./Product"

function Productos({ img, title, category, price, desc, id }) {
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
        <>
            <CardProducto>
                
                <img src={img} alt={category} />
                <h3>{title}</h3>
                <p>{desc}</p>
                <h4>${price}</h4>
                <BotonBuy onClick={handleAddToCart}>Comprar</BotonBuy>
            </CardProducto>

            {/* Mostrar el modal cuando se agrega el producto al carrito */}
            {showModal && (
                <ModalContainer className="addModal activeModal">
                    <ModalContent> &#9989; Producto agregado al carrito &#128293;</ModalContent>
                </ModalContainer>
            )}
        </>
    );
}

export default Productos;






//esto tenia antes, cualquier cosa borrar lo de arriba y además el ModalStyles. 
// import { CardProducto, 
//   BotonBuy
  
// } from "./Product"


// import { useDispatch } from "react-redux";
// import { addToCart} from "../../redux/cart/cartSlice";


// function Productos ( {img,title,category,price,desc,id}) {
//   const dispatch = useDispatch();
//   return (
//     <CardProducto>
//         <img src={img} alt={category} />
//         <h3>{title}</h3>
//         <p>{desc}</p>
//         <p>${price}</p>
//         <BotonBuy onClick={() => { 
//           dispatch(addToCart({img, title, category, price, desc,id}));
//           // alert('Producto agregado al carrito');
//         }}>
//         Comprar
//         </BotonBuy>

        
//     </CardProducto>
//   )
// }

// export default Productos