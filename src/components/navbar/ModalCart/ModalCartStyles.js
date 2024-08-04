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
  width: 100%;
  max-width: 425px;
  height: calc(100vh - 4rem);

  padding: 2rem;
  background-color: whitesmoke;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  color: black;
  font-family: var(--font-family); 

  @media (max-width: 968px){
    width: 100%;
    height: 92%;
    max-width: 320px ; // width del modal cart mobile
      

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

//ver si acá solucioné lo del cart modal scroll
export const MainContainerStyled = styled.div`
  height: auto;
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: auto;
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

  @media (max-width: 968px) {
    width: 100%;
    max-width: 300px;
    height: 235px;

  }
`;

//card de producto

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;

  max-width: 360px;
  height: 130px;

  background: var(--gray-bg);
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  /* border : 0.5px solid black; */
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media (max-width: 968px) {
    width: 100%;
    max-width: 300px;
    height: auto;




  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 200px;
  
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
  color: green; // ver si me gusta este color
  /* background: var(--btn-Background); //elegir color para el price
  border-radius: 10px;
  padding: 3px;
  max-width: 4rem; */

`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  background-color: whitesmoke;

  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;



export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
  font-weight: 500;
  
  
  & button {
    color: white;
    padding: 10px 20px;
    /* background-color: var(--btn-Background); */
    background-color: black;
    border-radius: 10px;
    font-weight: 400;
    padding: 12px 12px;
    font-family: var( --font-family);
    font-size: 1.2rem;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    cursor: pointer;
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