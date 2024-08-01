
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  width: 100%;
  flex: 1; // Para ocupar el espacio restante
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 15px;
  font-family: var(--font-family);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%; 
  }

  @media (max-width: 576px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid black;
  font-family: var(--font-family);
  margin-bottom: 1rem;
  border-bottom: 5px solid black;
  box-sizing: border-box;

  &:last-of-type {
    margin-bottom: 0;
  }

  h2 {
    font-family: var(--font-family);
    color: green;
    font-weight: 800;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
   
  }

  @media (max-width: 768px) {
    max-width: 90%; 
    padding: 1rem;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    max-width: 100%;
    padding: 0.5rem;
  }
`;

export const NoOrdersMessage = styled.div`
  text-align: center;
  margin-top: 2rem;


  p {
    margin-bottom: 1rem;
  }
`;

export const ButtonLink = styled.div`
    background-color: var( --btn-Background);
  color: black;
  padding: 1rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--font-family);
  margin-bottom: 2rem;

`;
