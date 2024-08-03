import { formatPrice } from "../../../utils/constantes";

import CardProductCheckout from "../../cardProductChekout/CardProductCheckout";
import Link from "../../UI/Link/Link";

import {
  CardsWrapperStyled,
  EnvioStyled,
  HrStyled,
  PriceContainerStyled,
  PriceTotalStyled,
  ProductosContainerStyled,
  ProductsTitleStyled,
  SubtotalStyled,
  TotalStyled,
} from "./ProductsCheckoutStyles";

const ProductsCheckout = ({ cartItems, shippingCost, price }) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido:</ProductsTitleStyled>
      <CardsWrapperStyled>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CardProductCheckout key={item.id} {...item} />
          ))
        ) : (
          <>
            <p>Ups! no hay productos en el carrito, deseas agregar algo?</p>
            <Link />
          </>
        )}
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(price)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>
            {formatPrice(price + shippingCost)}
          </PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;