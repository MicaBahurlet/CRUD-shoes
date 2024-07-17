import styled from "styled-components";

export const CategoriasWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 2rem auto;
    font-family: var(--font-family);
    gap: 1rem;
    /* z-index: -1; */


    h2 {
        margin-bottom: 3rem;
    }
    


    @media (max-width:768px){

        text-align: center;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 390px;
        height: auto;
    };

`;

export const CategoriasContainer = styled.div`

     display: grid;
      grid-template-columns: repeat(1, 1fr); /* Por defecto, una columna en escritorio */
      gap: 20px; /* Espacio entre las cards en escritorio */
      max-width: 1300px;
    justify-content: center;
    align-items: center;
    user-select:none;

    img{ 
        max-width: 150px;
    }
    img:hover {
        transform: scale(1.2); 
    }

    @media (max-width:768px){

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      width: 100%;
      margin: 0 auto;
      padding: 0 1rem;

      
    };
    
`;


export const CardCategoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 150px;
  height: 120px;
  padding: 1rem 1rem;
  border-radius: 15px;
  cursor: pointer;
  font-family: var(--font-family);

  background-color: ${({ selected }) => selected ? 'var(--btn-principal)' : 'var(--background-card)'}; 

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
    
  }

  img {
    max-width: 80%;
    height: auto;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
    pointer-events: none;
    user-select: none;
    

  }

  h2 {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-align: center;
  }

  @media (max-width:768px){
    width: 100%;
    height: 120px;
    max-width: 120px; // el ancho de la card en mobile


    img {
      max-width: 70%;
    }

  };
`;



export const BorderDecoration = styled.div`

    height: 5px;
    width: 30%;

   background-color: black;
    border-radius: 15px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
`;




