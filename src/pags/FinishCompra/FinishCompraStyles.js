import styled from "styled-components";



export const FinishContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70vh;
    margin: 0 auto;
    font-family: var(--font-family);
    padding: 1rem; 

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        max-width: 400px;
        padding: 1rem;
        margin-top: 2rem;

    }
  @media (max-width: 576px) {
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        max-width: 350px;

  }
`

export const FinishMensaje = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    text-align: start;

    img {
        max-width: 100px;
    }
`

export const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    gap: 1rem;
`