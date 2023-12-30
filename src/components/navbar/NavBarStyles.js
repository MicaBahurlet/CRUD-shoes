import styled from "styled-components";

export const NavbarContainerStyled = styled.div`

    height: 6rem;
    background-color: var(--background-nav);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    border-bottom: solid 1px black;

    img{
        margin-top: 3px;
        max-width: 160px;
    }

    @media (max-width: 968px) {
        padding: 1rem 2rem;
    }
`;

export const LinksContainersStyled = styled.div`

    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    a{
        padding: 1 rem 1.5rem;
    }
    a:first-child{
        background-color: greenyellow;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding: 1rem;
        color: black;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
    }

`;

export const LinkContainerStyled = styled.div`

    font-size: 1.2rem;
    
    color: ${(props) => (props.home ? "black" : "black")};
`;

export const UserContainerStyled = styled (LinkContainerStyled)`

    display: flex;
    align-items: center;
`;

export const HomeContainerStyled = styled (LinkContainerStyled)`

    display: flex;
    align-items: center;
    font-family: var(--font-family);
    @media (max-width: 768px) {
        display: none;
    }

`;

export const MenuContainerStyled = styled (LinkContainerStyled)`

    display: none;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    @media(max-width: 768px){
        display: flex;
    }
`;

export const UserNavStyled = styled.div`
    gap: 15px;
    cursor: pointer;
    span{
        color: black;
        font-size: 1.2rem;
        
    }
    @media (max-width: 768px) {
        display: none;
    }

`;

export const UserImageStyled = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;

    
`;

export const SpanStyled = styled.span`

    color: black;
    font-family:var(--font-family);
    margin-left: 8px;
    &:hover{
        text-decoration: underline;
    }

`;