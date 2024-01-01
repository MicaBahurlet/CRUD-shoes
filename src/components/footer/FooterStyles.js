import styled from "styled-components";

export const FooterContainerStyles = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid black;
    padding: 1rem 4rem;
    background-color: var(--background-nav);

    img{
        max-width: 120px;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    }
    p{
        font-family: var(--font-family);
        font-size: large;
    }



`;