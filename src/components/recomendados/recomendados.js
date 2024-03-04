import styled from "styled-components";


export const RecomendadosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 15px;
    font-family: var(--font-family);
    margin-bottom: 5rem;

    h2 {
        margin-bottom: 3rem;
    }
    


    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
    };

`;

// export const RecomendadosContainer = styled.div`

//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     align-items: center;
    
//     user-select:none;

//     img{ 
//         max-width: 150px;
//         border-radius: 15px;
//     }
//     img:hover {
//         transform: scale(1.2); 
//     }
    
// `;

export const RecomendadosContainer = styled.div`
    display: flex;
    flex-wrap: nowrap; /* Evitar que se envuelva a la siguiente línea */
    justify-content: center; /* Ajustado a inicio (izquierda) */
    align-items: center;
   gap: 15px;
    user-select:none;

    img {
        max-width: 150px;
        border-radius: 15px;
    }

    img:hover {
        transform: scale(1.2); 
    }
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
    }
`;


export const CardRecomendados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 320px;
  height: 5.5rem;
  padding: 2rem 0.5rem;

  background-color: ${({selected}) => selected ? 'var(--btn-principal)' : 'var(--background-card)'};
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border: 1px solid rgba(0, 0, 0, 0.1);

  
  flex-direction: row;
  text-align: left;
  font-family: var(--font-family);

  img {
    max-width: 100px;
    border-radius: 10px;
    margin-right: 2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease-in-out;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
  }

  p {
    color: #666;
    margin-bottom: 0.5rem; 
    font-weight: 400;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Boton = styled.button`
    display: flex;
    justify-content: center;
  align-items: center;
  gap : 5px;
  padding: 10px 20px;
  font-size: 16px;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  
  
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
  font-size: 1.2rem;
  font-weight: 200;
`;