import styled from "styled-components";

export const HeroContainerStyles = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    gap: 30px;
    height: 100vh;  // ver este inicio
    background-color: black;
   
    
    
    @media (max-width: 968px) {
        flex-direction: column;
        flex-direction: column;
        gap: 20px;
        height: 84vh;
        padding: 1rem;  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const HeroTextContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: -7rem;
    margin-left: 10rem;
    
    h1{
        font-size: 5rem;
        margin: 10px 0;
        font-family: var(--font-family);
        text-shadow: 1.2px 1px 1px #000;
        color: white;
        font-weight: 800;
        user-select: none; 


    }
    
    h2{
        font-size: 1.5rem;
        margin: 10px 0;
        font-family: var(--font-family);
        color: white;
    }
    p{
        font-size: 1.4rem;
        font-family: var(--font-family);
        line-height: 1.6;
        margin-top: 1rem;
        margin-bottom: 2rem;
        color: white;
    }


    @media (max-width: 968px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        width: 70;
        margin-top: 2rem;
        margin: 0 auto;
        h1{
            font-size: 3rem;
            color: white;

        }
        h2 {
            font-size: 1.5rem;
            color: white;
        }
        p {
            font-size: 1rem;
            color: white;
        }
    }
    @media (max-width: 576px) {
        align-items: center;
        text-align: center;
        justify-content: center;
        width: 70;
        margin-top: 2rem;

    }

`;

// export const ImputContainerStyles = styled.div`

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: 1rem;

//     gap: 2rem;
    

//     @media (max-width: 968px) {
//         flex-direction: column;
        
//     }
// `;

export const InputStyles = styled.input`
    align-items: center;
    justify-content:center;
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
    background-color: var( --btn-Background);
    
    color: #1E1E1E;
    font-weight: bold;
    border: 0.5px solid  #1E1E1E;
    font-family:  var(--font-family) ;


    @media (max-width: 968px) {
        max-width: 9rem;
        font-size: small;
    }

`;




export const HeroImageContainerStyles = styled.div`

    width: 50%; // para que compartan el 50% del contenedor
    z-index: 1; // ver este z index
    padding-right: 10rem;
    pointer-events: none;
    user-select: none;
    img{

        width: 997px;
        margin-top: 2.5rem;
        
        filter: drop-shadow(3px 3px 5px rgba (0, 0, 0, 0.2));
        
    }

    @media (max-width: 968px) {
        width: 100%;
        padding-right: 0;
        max-width: 400px;

     

        img {
            display: flex;
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            
        }
        
    }

`;