import styled from "styled-components";


export const RecomendadosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 15px;
    font-family: var(--font-family);
    margin-bottom: 5rem;

    h2 {
        margin-bottom: 1rem;
    }
    h3 {
        margin-bottom: 3rem;
        font-weight: 400;
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

  width: 200px;

  padding: 1rem 1rem;

  /* background-color: ${({selected}) => selected ? 'var(--btn-principal)' : 'var(--background-card)'}; */
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
  border-radius: 20px;
  
  font-family: var(--font-family);

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border: 1px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease; 
  margin-bottom: 3.5rem;

  img {
    max-width: 100px;
    border-radius: 10px;
   
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
   
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
  }

  p {
    color: black;

    /* font-weight: 700; */
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombras al pasar el ratón */
  }
`;

export const BotonBuy = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */

    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    color: #ffffff;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-weight: 500;
    padding: 10px 10px;
    max-width: 7rem;
`;

export const Boton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7px;
    /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */
    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    font-weight: 100;
    max-width: 9rem;
`;


export const InfoCard = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
`;