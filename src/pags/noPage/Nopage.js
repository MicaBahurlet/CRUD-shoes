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

    z-index: 3;

    img {
        max-width: 500px;
        margin-bottom: 1rem;
        margin-top: 1rem;
        
    }

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
        
        /* debería quedarme abajo */
       
    }

    button:hover {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }

    @media (max-width: 768px) {
        
        img {
            max-width: 350px;
            margin-bottom: 1rem;
            margin-top: 1rem;
            z-index: -2;
        }
        p {
            width: 100%;
            height: auto;
            max-width: 300px;
            margin: 1 auto;
        }

        @media (min-width: 768px) { 
            img {
                max-width: 350px;
                margin-bottom: 1rem;
                margin-top: 1rem;

                z-index: -2;
            }

        }
  }

    /* z-index: -2; */
`;

