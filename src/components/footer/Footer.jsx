import {
  FooterContainerStyles,
  PagosContainerStyles

} from './FooterStyles.js' 
import LogoImg from '../../data/imgProducts/LogoFinish.png';


function footer() {
  return (
    <FooterContainerStyles>
      <div>
        <img src={LogoImg} alt="Logo Finish" />
      </div>

      <h2>Auris ®</h2>

      <div>
        
        <p>Todos los derechos reservados ®</p>

      </div>
      <PagosContainerStyles>
        <p>Medios de pago:</p>

        <div>

          <img src="https://img.icons8.com/color/48/000000/visa.png"/>
          <img src="https://img.icons8.com/color/48/000000/mastercard.png"/>
          <img src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>
          <img src="https://img.icons8.com/color/48/000000/paypal.png"/>
        </div>

      </PagosContainerStyles>

    </FooterContainerStyles>
  )
}

export default footer