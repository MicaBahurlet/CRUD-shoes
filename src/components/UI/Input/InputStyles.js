import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;

`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  color: black;

  @media (max-width: 768px) {
    display: none;

  }

`;

export const InputStyled = styled.input`
  background-color: whitesmoke;
  outline: none;
  border-color: ${({ isError }) => (isError ? '#fb103d' : 'black')};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  color: black;
  width: 70%;
  margin-top: 1rem;



  ::placeholder {
    opacity: 40%;
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
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
