import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  width: 50%;
  margin: 0 auto;
  font-family: var(--font-family);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
  }
  @media (max-width: 576px) {
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        margin: 4rem auto;
  }

`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 576px) {
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
  }
  

`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 576px) {
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        margin: 0 auto;
  }

`;

