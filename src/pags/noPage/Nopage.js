import styled from "styled-components";

export const NoPage = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;

    h2 {
        font-family: var(--font-family);
    }

    p {
        font-family: var(--font-family);
    }

    button {
        background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
        border-radius: 10px;
        padding: 1rem;
        border: transparent;
        margin-top: 2rem;
        font-family: var(--font-family);
        font-size: medium;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 5rem;
    }
`;

