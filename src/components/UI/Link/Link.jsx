import { ContainerLinkStyled, StyledLink } from "./LinkStyles";

const Link = ({ radius = "32" }) => {
  return (
    <ContainerLinkStyled whileTap={{ scale: 0.95 }}>
      <StyledLink radius={radius}>
        <span onClick={() => window.location.href = "/products"}>Ver productos</span>
      </StyledLink>
    </ContainerLinkStyled>
  );
};

export default Link;
