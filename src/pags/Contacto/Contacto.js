import styled from 'styled-components';

export const ContactoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta según tus necesidades */
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
`;

export const Etiqueta = styled.label`
  margin-bottom: 8px; /* Agrega espacio entre las etiquetas para mejorar la apariencia */
  font-family: var(--font-family);
  
`;

export const Input = styled.input`
  border-radius: 10px;
  margin-bottom: 16px; /* Agrega espacio entre los inputs para mejorar la apariencia */
`;

export const Textarea = styled.textarea`
  /* Estilos adicionales para las áreas de texto si es necesario */
  margin-bottom: 16px; /* Agrega espacio entre las áreas de texto para mejorar la apariencia */
  border-radius: 10px;
`;

export const Boton = styled.button`
  /* Estilos adicionales para los botones si es necesario */
`;

export const GrupoEtiquetaInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height : auto ;
  max-width: 380px;
  margin-top: 1rem;
  
`;