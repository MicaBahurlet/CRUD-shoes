import styled from "styled-components";

export const ProductosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 15px; // ver acá para que queden alineados los dos Wrapper´s (category and products)
    font-family: var(--font-family);
    margin-top: 4rem;
   
    @media (max-width:768px){

        text-align: center;
        width: 100%;
        height: auto;
        max-width: 380px;
        margin-top: 2rem;
    };

`;



export const ProductosContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    user-select:none;
    margin-bottom: 4rem;

    @media (max-width:768px){

        text-align: center;
        width: 100%;
        height: auto;
        max-width: 380px;
        margin-top: 2rem;
       
    };
    
`;


export const CardProducto = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: auto;
    max-width: 220px;
    padding: 2rem 0.5rem;
    background-color: ${({selected}) => selected ? 'var(--btn-principal)' : 'var(--background-card)'};
    border-radius: 50px;
    
    font-family: var(--font-family);
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    h2{
        font-size: 1rem;
        font-family: var(--font-family);
    }
    

    img{
        max-width: 90px;
        border-radius: 15px;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    }
    p{
        text-align: center;
    }

    @media (max-width:768px){

        text-align: center;
        width: 100%;
        height: auto;
        max-width: 380px;
        

    };

`;

// export const BotonBuy = styled.button`
//   background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
//   color: ${(props) => (props.disabled ? "#666" : "#fff")};
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   font-size: 16px;
//   margin-top: 10px;
  
//   &:disabled {
//     cursor: not-allowed;
//   }
// `;


import styled from "styled-components";

export const BotonBuy = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#666" : "#fff")};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  margin-top: 10px;

  &:disabled {
    cursor: not-allowed;
  }
`;
