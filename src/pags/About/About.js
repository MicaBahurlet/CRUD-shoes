import styled from "styled-components";


export const AboutContainer = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;
    margin-top: 3rem;

    @media (max-width: 968px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        
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
        font-size: 1.5rem;
        margin: 10px 0;
        font-family: var(--font-family);
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
    img{
        width: 100%;
        max-width: 300px;
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
    
    h3{
        font-size: 1.5rem;
        margin: 10px 0;
        font-family: var(--font-family);
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
    
    h3{
        font-size: 1.5rem;
        margin: 10px 0;
        font-family: var(--font-family);
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
        
        p {
            width: 100%;
            height: auto;
            max-width: 380px;
        }
    }


`;