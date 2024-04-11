import styled from "styled-components";

export const ProductosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 15px; // ver acá para que queden alineados los dos Wrapper´s (category and products)
    font-family: var(--font-family);
    margin-top: 4rem;
   
    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
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
    
`;


export const CardProducto = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 220px;
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

`;

export const BorderDecorationProducto = styled.div`

    height: 7px;
    width: 30%;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border-radius: 15px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
`;