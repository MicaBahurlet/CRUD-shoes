import styled from 'styled-components';
import { Form as FormikForm } from 'formik';


export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 75vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 380px;
  }
`

export const ImgInicioSesion = styled.div`
  margin-bottom: 1rem;


    img {

        max-width: 500px;
        user-select: none;
        pointer-events: none;
    }

    @media (max-width: 768px) {
      max-width: 100px;
      justify-content: center;
      align-items: center;
    }
`


export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh; //a justar valor
  margin-top: 20px;
  background-color: whitesmoke;
  color: black;
  font-family: var( --font-family );


`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 500px;
  gap: 2rem;
  background-color: whitesmoke;
  color: black;
  padding: 1rem;
  font-family: var( --font-family );
`;

export const LoginEmailStyled = styled.p`
  color: green;
  font-weight: 600;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
