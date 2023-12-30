import styled from "styled-components";

export const CategoriasWrapper = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 15px;
    font-family: var(--font-family);
    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
    };

`;

export const CategoriasContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-araund;
    align-items: center;
    gap: 20px;
    user-select:none;

    img{ //esto es lo que toque para la img de la cart producto
        max-width: 150px;
        border-radius: 15px;
    }
    
`;


export const CardCategoria = styled.div` //Acá tenía un motion que supuestamente es de framer-motion//
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 220px;
    padding: 2rem 0.5rem;
    
    background-color: ${({selected}) => selected ? 'var(--btn-principal)' : 'var(--background-card)'};
    border-radius: 100px;
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
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    }

`;

export const BorderDecoration = styled.div`

    height: 5px;
    width: 30%;
    background-color: green;
    border-radius: 15px;
`;


