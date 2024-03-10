import styled from "styled-components";

export const HeroContainerStyles = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    gap: 30px;
    
    @media (max-width: 968px) {
        flex-direction: column;
        flex-direction: column-reverse;
        margin-top: 4rem;
    }
`;

export const HeroTextContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    h1{
        font-size: 4rem;
        margin: 10px 0;
        font-family: var(--font-family);
        text-shadow: 1px 1px 1px #000;

    }
    
    h2{
        font-size: 1.5rem;
        margin: 10px 0;
        font-family: var(--font-family);
    }
    p{
        font-size: 1.2rem;
        font-family: var(--font-family);
        line-height: 1.2;
    }


    @media (max-width: 968px) {
        align-items: center;
        text-align: center;
        width: 80;
        h1{
            margin-top: 7px;
        }
    }

`;

export const ImputContainerStyles = styled.div`

    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 3rem;
    
    gap: 2rem;

    @media (max-width: 968px) {
        flex-direction: column;
        
    }
`;

export const InputStyles = styled.input`

    padding: 10px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-family:  var(--font-family) ;
`;

export const BotonInput = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    color: black;
    font-weight: bold;
    border: none;
    font-family:  var(--font-family) ;

    &:hover {
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }

`;


export const HeroImageContainerStyles = styled.div`

    width: 40%;
    z-index: -2;
    img{
        width: 100%;
        max-width: 400px;
        padding-bottom: 75px;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
        
    }

    @media (max-width: 968px) {
        max-width: 200px;
    }

`;