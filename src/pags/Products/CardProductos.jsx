

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { ModalContainer, ModalContent } from './ModalStyles'; 
import { CardProducto, BotonBuy, InfoContainer } from "./Product";
import { formatPrice } from '../../utils/constantes';


function Productos({ img, title, category, price, desc, id }) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser); // Obtener el estado de currentUser
    const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

    const handleAddToCart = () => {
        if (currentUser) {
            dispatch(addToCart({ img, title, category, price, desc, id }));
            setShowModal(true); // Mostrar el mensaje cuando se agrega el producto al carrito
            
            setTimeout(() => {
                setShowModal(false);
            }, 3000); // Ocultar mensaje después de 3 segundos
        } else {
            alert("Debes iniciar sesión para agregar productos al carrito. Por favor, inicia sesión.");
        }
    };

    return (
        <>
            <CardProducto>
                <img src={img} alt={category} />
                <InfoContainer>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <h4>{formatPrice(price)}</h4>
                    <BotonBuy disabled={!currentUser} onClick={handleAddToCart}>
                        Comprar
                    </BotonBuy>
                </InfoContainer>
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
