import styled from 'styled-components';
import { Form as FormikForm } from 'formik';


export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 380px;
  }
  @media (max-width: 576px) {

        max-width: 300px;
        padding: 0 15px;
        margin: 0 auto;

  }
`

export const ImgInicioSesion = styled.div`
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;


    img {

        max-width: 500px;
        user-select: none;
        pointer-events: none;

      @media (max-width: 576px) {
        align-items: center;
        justify-content: center;
        width: 250px;
        height: auto;
        margin: 0 auto;

      }
    }

    @media (max-width: 768px) {
      max-width: 100px;
      justify-content: center;
      align-items: center;
    }

`


// export const LoginContainerStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: auto; 
//   margin-top: 20px;

//   color: black;
//   font-family: var( --font-family );


// `;

// export const Form = styled(FormikForm)`
//   display: flex;
//   flex-direction: column; 
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: auto;
//   max-width: 500px;
//   gap: 2rem;
//   background-color: whitesmoke;
//   color: black;
//   padding: 1rem;
//   font-family: var( --font-family );
// `;

// export const LoginEmailStyled = styled.p`
//   color: green;
//   font-weight: 600;
//   font-size: 1.3rem ;

//   :hover {
//     text-decoration: underline;
//     transition: all 0.25s ease-out;
//   }
// `;
// export const PasswordWrapper = styled.div`
//   position: relative;
//   width: 300px;
//   align-items: center;
//   justify-content: center;
  
//   input {
//     width: 100%;
//     padding-right: 2rem; 
//   }
// `;

// export const PasswordIcon = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   color: #333; 

//   &:hover {
//     color: green; 
//   }
// `;

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
  color: black;
  font-family: var(--font-family);
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  gap: 2rem;
  background-color: whitesmoke;
  color: black;
  padding: 1rem;
  font-family: var(--font-family);

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const LoginEmailStyled = styled.p`
  color: green;
  font-weight: 600;
  font-size: 1.3rem;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 275px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  input {
    width: 100%;
    padding-right: 2.5rem; 
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const PasswordIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #333; 
  &:hover {
    color: green; 
  }
`;
