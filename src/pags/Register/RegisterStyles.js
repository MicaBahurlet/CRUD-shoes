import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  font-family: var( --font-family); 
  height: 70vh;
  margin-bottom: 2rem;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;


`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: green;
    font-weight: 600;
    font-family: var( --font-family);
    font-size: 1.3rem ;

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
