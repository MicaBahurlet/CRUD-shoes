import { formatPrice } from "../../utils/constantes";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import Count from "../UI/Count/Count";
import Increase from "../UI/Increase/Increase";

import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";
import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  QuantityContainerStyled,
  TextStyled,
} from "./CardProductStyles";

const CardProductCheckout = ({ img, title, desc, price, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
      <img src={img} alt={title} />
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor="#abdb25"
          color = "black"
          fontWeight={"bold"}
          onClick={() => dispatch(removeFromCart(id))}
        >
          {quantity === 1 ? <IoMdTrash color="black" fontWeight={"bold"} /> : <FaMinus color="black" fontWeight={"bold"} />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          onClick={() => dispatch(addToCart({ img, title, desc, price, id }))}
        >
          <BsPlusLg color="black" fontWeight={"bold"} />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
