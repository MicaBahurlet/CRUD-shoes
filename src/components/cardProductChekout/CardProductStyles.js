import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  width: 85%;

  background: whitesmoke; // fondo de la card 
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 968px){
    width: 100%;
    height: 92%;
    max-width: 320px ; // width del modal cart mobile
      

  }

`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 240px;

  font-family: var(--font-family);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-width: 380px;
  }
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  font-family: var(--font-family);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-width: 380px;
  }
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;
  font-family: var(--font-family);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-width: 380px;
  }
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 2rem;
  background: var(--btn-gradient);
  font-family: var(--font-family);

  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-width: 380px;
  }
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;
  font-family: var(--font-family);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-width: 380px;
  }
`;
