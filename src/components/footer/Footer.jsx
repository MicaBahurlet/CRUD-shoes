import {FooterContainerStyles} from './FooterStyles.js' 
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
    </FooterContainerStyles>
  )
}

export default footer