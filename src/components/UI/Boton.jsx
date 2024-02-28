import StyledButton from "./BotonStyles.js";
import { Link } from 'react-router-dom';

function Boton() {
  return (
    <div>
      <StyledButton onClick={() => window.location.href = "/products"}> Comprar</StyledButton>
    </div>
  )
};

export default Boton