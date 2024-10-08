import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%; 
  margin-bottom: 1rem; 
`;

export const LoginInputStyled = styled.input`
  width: 100%; 
  max-width: 300px; 
  padding: 0.9rem;
  color: black;
  background-color: whitesmoke;
  border-radius: 10px;
  border: 1px solid black;
  border-color: ${({ isError }) => (isError ? '#fb103d' : 'black')};
  outline: none;

  ::placeholder {
    opacity: 90%;
    color: black;
  }
  -webkit-text-fill-color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 10px;
  color: #fb103d;
  font-size: 14px;
  text-align: center; 
`;
