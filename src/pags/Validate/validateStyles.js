import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ValidateContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  font-family: var(--font-family);
  height: 70vh;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const ValidateEmailStyled = styled.p`
    

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
