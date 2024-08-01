

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";

import Count from "../../UI/Count/Count";
import Increase from "../../UI/Increase/Increase";

import {useDispatch} from "react-redux";
import { addToCart,removeFromCart } from "../../../redux/cart/cartSlice";

import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "./ModalCartStyles";

import { formatPrice } from '../../../utils/constantes';

const ModalCartCard = ({img,title,desc,price,quantity,id}) => {

  const dispatch =useDispatch();
  
  return (
    <ProductContainerStyled>
      <img
        src={img}
        alt={title}
      />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled> 
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor="#abdb25"
          color="black"
          fontWeight={"bold"}
          onClick={() =>dispatch(removeFromCart(id))}
          
        >
          {quantity===1?<IoMdTrash color="black" fontWeight={"bold"}/> :<FaMinus color="black" fontWeight={"bold"} />}
         
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={() => dispatch(addToCart({img,title,desc,price,id}))} color="black"
          fontWeight={"bold"} >
          <BsPlusLg color="black" fontWeight={"bold"} />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;