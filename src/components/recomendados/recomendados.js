import styled from "styled-components";


export const RecomendadosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    font-family: var(--font-family);
    width: 100%;
    height: auto;
    background-color: whitesmoke;

    h2 {
      margin-top: 4rem;
        margin-bottom: 1rem;
        
    }
    h3 {
        margin-bottom: 3rem;
        font-weight: 400;
       

    }


    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
        width: 100%;
        max-width: 380px;
    };

`;



export const RecomendadosContainer = styled.div`
    display: flex;
    flex-wrap: nowrap; 
    justify-content: center; 
    align-items: center;
    width: 100%;

    gap: 25px;
    user-select:none;

    img {
        max-width: 200px;
        border-radius: 15px;
    
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        max-width: 380px;
        
    }
`;


export const CardRecomendados = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 400px;
  height: auto;
  padding: 1rem 1rem;

  /* background-color: grey;  */
  background-color: white;
  border-radius: 20px;
  font-family: var(--font-family);

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease; 
  margin-top: 2rem;
  margin-bottom: 5rem;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  gap: 23px;


  img {
    max-width: 210px;
    border-radius: 10px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3));
    transition: transform 0.7s ease;
   
  }
  img:hover {
        transform: scale(1.2); 
        user-select: none;
        -webkit-user-drag: none; /* Para navegadores basados en WebKit */
        pointer-events: none; /* Evita eventos de puntero (clics, arrastres, etc.) */
  }

 


    h3{
        font-size: 1.2rem;
        font-family: var(--font-family);
        font-weight: 800;
    }
    h4{
        font-size: 1.1rem;
        color: green;
        font-weight: 800;
    }

    p {
      color: black;
    }


    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    }

`;

export const BotonBuy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;

    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-weight: 500;
    padding: 10px 10px;
    max-width: 5rem;
    margin-bottom: 4rem;
`;



export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

 

`;



// export const Boton = styled.button`
//     display: flex;

//     justify-content: center;
//     align-items: center;

//     font-size: 7px;

//     background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;
//     color: black;
//     font-weight: 100;
//     max-width: 10rem;
// `;
