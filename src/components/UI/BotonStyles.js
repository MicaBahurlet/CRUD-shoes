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

  /* Estilo al pasar el ratón por encima */
  &:hover {
    background-color: #2980b9;
  }
`;

export default StyledButton;