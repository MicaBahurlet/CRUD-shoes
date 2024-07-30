import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: black; 

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }



`;

export const BrandImage = styled.img`
  width: 135px; 
  height: auto;
  margin: 10px;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    max-width: 140px;
  }
  @media (max-width: 576px) {
    max-width: 120px;
  }
`;

