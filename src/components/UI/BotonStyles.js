import styled from 'styled-components';

const StyledButton = styled.button`
  /* Estilos del botón */
  padding: 10px 20px;
  font-size: 16px;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
  font-size: 1.2rem;
  font-weight: 200;

  
  &:hover {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }

 
`;

export default StyledButton;