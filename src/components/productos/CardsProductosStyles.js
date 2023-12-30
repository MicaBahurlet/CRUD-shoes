import styled from "styled-components";

export const ProductosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    
    max-width: 1200px;
    margin: 0 15px; // ver acá para que queden alineados los dos Wrapper´s (category and products)
    font-family: var(--font-family);
    margin-top: 10rem;
    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
    };

`;



export const ProductosContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-araund;
    align-items: center;
    gap: 20px;
    user-select:none;
    
`;


export const CardProducto = styled.div` //Acá tenía un motion que supuestamente es de framer-motion//
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 170px;
    padding: 2rem 0.5rem;
    background-color: ${({selected}) => selected ? 'var(--btn-principal)' : 'var(--background-card)'};
    border-radius: 50px;
    cursor: pointer;
    font-family: var(--font-family);
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    h2{
        font-size: 1rem;
        font-family: var(--font-family);
    }
    :firts-child{
        img{
            padding-top: 7px;
            padding-bottom: 7px;
        }
    }

    img{
        max-width: 100px;
        border-radius: 15px;
    }
    p{
        text-align: center;
    }

`;

export const BorderDecorationProducto = styled.div`

    height: 5px;
    width: 30%;
    background-color: greenyellow;
    border-radius: 15px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
`;