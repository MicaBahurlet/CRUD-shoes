import StyledButton from "./BotonStyles.js";

function Boton() {
  return (
    <div>
      <StyledButton onClick={() => window.location.href = "/products"}> Comprar</StyledButton>
    </div>
  )
};

export default Boton