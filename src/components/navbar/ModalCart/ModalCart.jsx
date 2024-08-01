
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import Increase from "../../UI/Increase/Increase";
import Submit from "../../UI/Submit/Submit";
import ModalCartCard from "./ModalCartCard";
import { ModalOverlayStyled } from "../NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleHiddenCart, finalizePurchase } from "../../../redux/cart/cartSlice";
import {
  ButtonContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  MainContainerStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from "./ModalCartStyles";

import Link from "../../UI/Link/Link";

const ModalCart = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const currentUser = useSelector((state) => state.user.currentUser); // Obtener el estado de currentUser
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const finalizarCompra = () => {
    if (currentUser) {
      dispatch(finalizePurchase());
      alert("¡Gracias por tu compra! Mañana despacharemos tu pedido. Esperamos que disfrutes tus nuevas zapatillas.");
    } else {
      alert("Debes iniciar sesión para finalizar tu pedido.");
    }
  };

  useEffect(() => {
    if (!hiddenCart) {
      dispatch(toggleHiddenCart());
    }
  }, [dispatch]);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        /> //este es el overlay, si toco fuera se cierra. 
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
                color="black"
                fontWeight={"bold"}
              >
                <MdOutlineClose size="24px" style={{ color: "black" }} />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h2>Tu carrito:</h2>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <p>No hay ningún producto en tu carrito, <b> Inicia sesión y explorá zapatillas en la página de productos.</b></p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>${totalPrice}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envío:</p>
                <span>${shippingCost}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>${totalPrice + shippingCost}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit
                  onClick={() => {
                    if (currentUser) {
                      navigate("/checkout");
                      dispatch(toggleHiddenCart());
                    } else {
                      alert("Debes iniciar sesión para iniciar el pedido.");
                    }
                  }}
                  disabled={!currentUser || !cartItems.length}
                >
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
