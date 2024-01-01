import styled from 'styled-components';

const StyledButton = styled.button`
  /* Estilos del botón */
  padding: 10px 20px;
  font-size: 16px;
  background-color: greenyellow;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));

  /* Estilo al pasar el ratón por encima */
  &:hover {
    background-color: green;
  }
`;

export default StyledButton;