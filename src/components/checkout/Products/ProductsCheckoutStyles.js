import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;

  @media (max-width: 968px){
    width: 100%;
    height: 92%;
    max-width: 320px ; // width del modal cart mobile
      

  }
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 22px;
  font-family: var( --font-family);
  margin-bottom: 1rem;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  width: 80%;
  height: 350px;
  margin: 0 auto;

  overflow: scroll;
  background-color: whitesmoke; // ver este contenedor, fondo de las cards de productos
  /* border: 1px solid black; */

  padding: 1rem;
  border-radius: 10px;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 170px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }

  @media (max-width: 968px){
    width: 100%;
    height: 92%;
    max-width: 320px ; // width del modal cart mobile
    
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: green;
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
`;
