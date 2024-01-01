//import Boton from "../UI/Boton"
import { HeroContainerStyles, HeroTextContainerStyles, HeroImageContainerStyles } from "./HeroStyles"
import StyledButton from "../UI/Boton.jsx" 
import { Fade } from "react-awesome-reveal"

function Hero() {
  return (
   <HeroContainerStyles>
    <HeroTextContainerStyles>
    <h1>Viví tú música.</h1>
    <h2>Tus auriculares importan</h2>
    <p>El mejor sonido a tu disposición. Comprá rápido, comprá calidad, comprá facil. </p>
    <Fade duration={3000} >
        <StyledButton/>
    </Fade>    
    </HeroTextContainerStyles>
    <HeroImageContainerStyles>
      <Fade direction="left"  duration={3000} >
         <img src="./src/data/imgProducts/HEROAuris.png" alt="Auriculares Hero"/>
      </Fade>   
    </HeroImageContainerStyles>
   </HeroContainerStyles>

  )
}

export default Hero