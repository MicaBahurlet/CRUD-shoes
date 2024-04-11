import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 440px;
  height: calc(100vh - 4rem);

  padding: 2rem;
  background-color: whitesmoke;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  color: black;
  font-family: var(--font-family); 

  @media (max-width: 968px){
    width: 100%;
    height: 90%;
    max-width: 400px ;
    padding:  2rem 1rem;

  }
`;

export const CloseButtonContainerStyled = styled.div`
  
  height: 9rem;
  font-weight: 900;
  display: flex;
  justify-content: flex-end;

  .close__modal {
    color: black;
    font-weight: 700;
    font: small;
  }



`;

export const CloseButtonStyled = styled(motion.button)`  //acá es el btn de cierre
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-Background);
  color : black !important;
  font-weight: 900;
  cursor: pointer;

`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;
  font-family: var(--font-family); 

  & h1 {
    margin-top: 0;
  }
`;

export const MainContainerStyled = styled.div`
  height: 40%;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 300px;
  margin: 0 auto;
  padding: 1rem;

  padding-left: 0;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }
`;

//card de producto

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;
  height: 130px;

  background: var(--gray-bg);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 190px;
  
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 800;
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  background: var(--btn-gradient); //elegir color para el price

`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  background-color: whitesmoke;
  margin-top: 2rem;
  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;



export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
  font-weight: 500;
  
  
  & button {
    color: black;
    padding: 1rem 1rem;
    background-color: var(--btn-Background);
    border-radius: 10px;
    font-weight: 700;
    padding: 10px 10px;
  }
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: larger;
  font-weight: bold;
  color: black;
`;