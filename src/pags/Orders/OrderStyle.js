import styled from "styled-components";


export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem;
    border-radius: 15px;
    cursor: pointer;
    font-family: var(--font-family);

`

export const Order = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem;
    border-radius: 15px;
    border: 1px solid black;
    font-family: var(--font-family);
    margin-bottom: 1rem; //entre cada orden

    border-bottom: 3px solid black; 
    &:last-of-type {
        margin-bottom: 0;
    }
    h2 {
        font-family: var(--font-family);
        color: green;
        font-weight: 800;
    }
`;