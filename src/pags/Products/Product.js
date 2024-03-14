import styled from "styled-components";

export const ProductosWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    max-width: 1200px;
    margin: 0 auto; 
    font-family: var(--font-family);
    margin-top: 6rem;
  


    @media (max-width:768px){
        padding-top: 30px;
        text-align: center;
    };

`;

export const TextProductos = styled.div`

        display: flex;
        flex-direction: column;
        text-align: start;
        margin: 3rem auto;
        margin-bottom: 2rem;

        
    @media (max-width:768px){
        padding-top: 30px;
        text-align: start;
        max-width: 300px;
        margin: 0 auto;
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
    margin-top: 6rem;

    @media (max-width:768px){
        flex-direction: column;
        padding-top: 30px;
        text-align: center;
    };
    
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
    cursor: pointer;
    font-family: var(--font-family);
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    h2{
        font-size: 1rem;
        font-family: var(--font-family);
    }
    

    img {
        max-width: 100px;
        border-radius: 15px;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
        transition: transform 0.7s ease;
    }

    p {
        text-align: center;
    }


    img:hover {
        transform: scale(1.2); 
    }

    @media (max-width:768px){
        flex-direction: column;
        padding-top: 30px;
        text-align: center;
    };
    
    

`;

export const AgregarCart = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    font-size: 15px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-size: 1.2rem;
    font-weight: 200;
`;

// export const BorderDecorationProducto = styled.div`
//     margin-top: 0.5rem;
//     height: 7px;
//     width: 30%;
//     background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
//     border-radius: 15px;
//     filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
// `;

export const BorderSeparacion = styled.div`

    height: 7px;
    width: 70%;
    margin:  6rem auto;
    margin-bottom: 2rem;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border-radius: 15px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
`;


export const BotonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center ;
    gap: 2rem;
    margin: 1rem auto;
`;

export const Boton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    font-size: 15px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    font-size: 1.2rem;
    font-weight: 500;
    font-family: var(--font-family) ;
`;

export const BotonVerMenos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    font-size: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    border: 1px solid black;
    font-family: var(--font-family) ;
`;


export const ImputContainerStyles = styled.div`

    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 5rem;
    
    gap: 2rem;

    @media (max-width: 968px) {
        flex-direction: column;
        
    }
`;

export const InputStyles = styled.input`

    padding: 10px;
    font-size: 1.2rem;
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
    font-family:  var(--font-family) ;
    font-style: italic;
`;

export const BotonInput = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    color: black;
    font-weight: bold;
    border: none;
    font-family:  var(--font-family) ;
    margin-top: 3rem;

    &:hover {
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }

`;
