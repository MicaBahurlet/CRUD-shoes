import {FooterContainerStyles} from './FooterStyles.js' // para importar SIEMPRE tengo que poner el estilo en {}
import logoFooter from '../../data/imgProducts/LOGO.png'

function footer() {
  return (
    <FooterContainerStyles>
      <div>
      <img src= {logoFooter} alt="Logo Auris" />
      </div>

      <div>
        <p>Todos los derechos reservados ®</p>
      </div>
    </FooterContainerStyles>
  )
}

export default footer