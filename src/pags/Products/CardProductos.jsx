
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


import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { ModalContainer, ModalContent } from './ModalStyles'; 
import { CardProducto, 
  BotonBuy
  
} from "./Product"

function Productos({ img, title, category, price, desc, id }) {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visualización del modal

    const handleAddToCart = () => {
        dispatch(addToCart({ img, title, category, price, desc, id }));
        setShowModal(true); // Mostrar el modal cuando se agrega el producto al carrito
        // Puedes agregar un temporizador para ocultar el modal después de cierto tiempo si lo deseas
        setTimeout(() => {
            setShowModal(false);
        }, 3000); // Oculta el modal después de 3 segundos (3000 milisegundos)
    };

    return (
        <>
            <CardProducto>
                <img src={img} alt={category} />
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>${price}</p>
                <BotonBuy onClick={handleAddToCart}>Comprar</BotonBuy>
            </CardProducto>

            {/* Modal */}
            {showModal && (
                <ModalContainer className="addModal activeModal">
                    <ModalContent>Producto agregado al carrito</ModalContent>
                </ModalContainer>
            )}
        </>
    );
}

export default Productos;

