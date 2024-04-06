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
        margin-bottom: 4rem;
    }


    @media (max-width: 968px) {
        align-items: center;
        text-align: center;
        width: 70;
        h1{
            font-size: 3rem;

        }
        h2 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }
    }

`;

export const ImputContainerStyles = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    
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
    /* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */
    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    color: black;
    font-weight: bold;
    border: 0.5px solid black;
    font-family:  var(--font-family) ;


    &:hover {
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }

    @media (max-width: 968px) {
        max-width: 9rem;
        font-size: small;
    }

`;




export const HeroImageContainerStyles = styled.div`

    width: 50%;
    z-index: -2; // ver este z index
    padding-right: 10rem;
    img{
        /* width: 100%; */
        /* max-width: 400px; */
        /* padding-bottom: 75px; */
        width: 1000px;
        
        filter: drop-shadow(3px 3px 5px rgba (0, 0, 0, 0.2));
        
    }

    @media (max-width: 968px) {
        img {
            max-width: 400px;
        }
        
    }

`;