import styled from "styled-components";


export const RecomendadosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 15px;
    font-family: var(--font-family);
    margin-bottom: 5rem;

    h2 {
        margin-bottom: 1rem;
    }
    


    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
    };

`;



export const RecomendadosContainer = styled.div`
    display: flex;
    flex-wrap: nowrap; 

    justify-content: center; 
    align-items: center;
    gap: 15px;
    user-select:none;

    img {
        max-width: 150px;
        border-radius: 15px;
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

  padding: 1rem 1rem;

  background-color: ${({selected}) => selected ? 'var(--btn-principal)' : 'var(--background-card)'};
  border-radius: 20px;
  cursor: pointer;
  font-family: var(--font-family);

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border: 1px solid rgba(0, 0, 0, 0.1);

  
  flex-direction: row;
  text-align: left;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease; 

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

    font-weight: 700;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombras al pasar el ratón */
  }
`;

export const BotonBuy = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-size: 1.2rem;
    font-weight: 500;
    padding: 10px 10px;
    max-width: 7rem;
`;

export const Boton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));

    font-weight: 100;
`;


export const InfoCard = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  font-family: var(--font-family);
`;