import styled from 'styled-components';

export const ContactoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh; 
  margin: 0 auto;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  img {
    max-width:350px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  height : auto ;
  max-width: 500px;
  font-family: var(--font-family);

  @media (max-width: 768px) {
    margin-top: 15rem;
  }
`;

export const Etiqueta = styled.label`
  margin-bottom: 8px; 
  font-family: var(--font-family);
  
`;

export const Input = styled.input`
  border-radius: 10px;
  margin-bottom: 16px; 
  padding: 0.5rem;
`;

export const Textarea = styled.textarea`

  margin-bottom: 16px; 
  border-radius: 10px;
`;

export const Boton = styled.button`
  border-radius: 10px;
  max-width: 8rem;
  font-family: var(--font-family);
  padding: 0.5rem;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
`;

export const GrupoEtiquetaInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height : auto ;
  max-width: 380px;
  margin-top: 1rem;
  
`;