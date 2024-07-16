import styled from "styled-components";


export const AboutContainer = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;
    margin-top: 5rem;


    @media (max-width: 968px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        max-width: 380px;
        
        
    }

`;



export const AboutTextContainerStyles = styled.div`
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
        font-size: 2rem;
        margin: 10px 0;
        font-family: var(--font-family);
        text-shadow: 0.5px 0.5px 0.5px #000;
    }
    p{
        font-size: 1.2rem;
        font-family: var(--font-family);
        line-height: 1.8;
    }


    @media (max-width: 968px) {
        align-items: start;
        text-align: start;
        width: 100%;
        height: auto;
        max-width: 380px;
    }

`;



export const AboutImageContainerStyles = styled.div`

    width: 40%;
    z-index: -2;
    img{
        width: 100%;
        max-width: 500px;
        padding-bottom: 75px;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    }

    @media (max-width: 968px) {
        max-width: 200px;
    }

`;

export const HistoriaAbout = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 2rem auto;
    
    h2{
        font-size: 2rem;
        margin: 10px 0;
        font-family: var(--font-family);
        text-shadow: 0.5px 0.5px 0.5px #000;
    }
    p{
        font-size: 1.2rem;
        font-family: var(--font-family);
        line-height: 1.8;
    }

    @media (max-width: 968px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: start;
        max-width: 380px;
        
        p {
            width: 100%;
            height: auto;
            max-width: 380px;
        }
    }



`;


export const MisionAbout = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 2rem auto;
    
    h2{
        font-size: 2rem;
        margin: 10px 0;
        font-family: var(--font-family);
        text-shadow: 0.5px 0.5px 0.5px #000;
    }
    p{
        font-size: 1.2rem;
        font-family: var(--font-family);
        line-height: 1.8;
    }

    @media (max-width: 968px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: start;
        max-width: 380px;
        
        p {
            width: 100%;
            height: auto;
            max-width: 380px;
        }
    }


`;


export const BeneficiosMusica = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    gap: 5rem;
    
    h2{
        font-size: 2rem;
        margin: 10px 0;
        font-family: var(--font-family);
        text-shadow: 0.5px 0.5px 0.5px #000;
    }
    ul {
        font-size: 1.2rem;
        font-family: var(--font-family);
        line-height: 1.8;
    }

    @media (max-width: 968px) {
        margin: 2 auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: start;
        max-width: 380px;

        h2 {
            margin: 0 auto;
            text-align: center;
        }
        
        ul {
            width: 100%;
            height: auto;
            max-width: 350px;
            text-align: start;
            margin-top: 3rem;
        }
    }


`;

export const BeneficiosImg = styled.div`

    width: 40%;
    z-index: -2;
    margin: 4rem auto;
    
    img{
        width: 100%;
        max-width: 400px;
       
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
        border-radius: 10px;
    }

    @media (max-width: 968px) {
        max-width: 300px;
    }

`;