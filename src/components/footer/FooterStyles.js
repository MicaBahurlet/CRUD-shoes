import styled from "styled-components";

export const FooterContainerStyles = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid black;
    padding: 1rem 4rem;
    background-color: black;
    height: 11rem;
    

    img{
        max-width: 120px;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
        margin-top: 3px;
    }
    h2 {
        font-family: var(--font-family);
        color: white;
    }
    p{
        font-family: var(--font-family);
        font-size: large;
        color: white;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        height: 20rem;
    }
    @media (max-width: 576px) {
        flex-direction: column;
        height: 30rem;
    }



`;

export const PagosContainerStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
    width: 100%;
    height: auto;
    max-width: 400px;

    p {
        font-family: var(--font-family);
        color: white;
    }

    img {
        width: 50px;
        border-radius: 10px;
    }
    @media (max-width: 576px) {
        flex-direction: column;
    }





`