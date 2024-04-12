import styled from "styled-components";

export const HeroContainerStyles = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    gap: 30px;
    height: 100vh;  // ver este inicio
   
    
    
    @media (max-width: 968px) {
        flex-direction: column;
        flex-direction: column;
        margin-top: 4rem;
        gap: 20px;
        height: 84vh;

       
    }
`;

export const HeroTextContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    margin-top: -7rem;
    h1{
        font-size: 3.7rem;
        margin: 10px 0;
        font-family: var(--font-family);
        text-shadow: 1.2px 1px 1px #000;
        color: #1E1E1E;
        

    }
    
    h2{
        font-size: 1.5rem;
        margin: 10px 0;
        font-family: var(--font-family);
        color: #1E1E1E;
    }
    p{
        font-size: 1.2rem;
        font-family: var(--font-family);
        line-height: 1.4;
        margin-bottom: 2rem;
        color: #1E1E1E;
    }


    @media (max-width: 968px) {
        align-items: center;
        text-align: center;
        justify-content: center;
        width: 70;
        margin-top: 2rem;
        h1{
            font-size: 3rem;
            color: #1E1E1E;

        }
        h2 {
            font-size: 1.5rem;
            color: #1E1E1E;
        }
        p {
            font-size: 1rem;
            color: #1E1E1E;
        }
    }

`;

export const ImputContainerStyles = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    gap: 2rem;
    

    @media (max-width: 968px) {
        flex-direction: column;
        
    }
`;

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
  
    background-color: var(--btn-Background);
    
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
    z-index: -2; // ver este z index
    padding-right: 10rem;
    img{

        width: 1000px;
        
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
            
        }
        
    }

`;