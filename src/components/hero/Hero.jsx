//import Boton from "../UI/Boton"
import { HeroContainerStyles, HeroTextContainerStyles, HeroImageContainerStyles } from "./HeroStyles"
import StyledButton from "../UI/Boton.jsx" 
import { Fade } from "react-awesome-reveal"
import IMGHero from "../../data/imgProducts/HEROAuris.png"

function Hero() {
  return (
   <HeroContainerStyles>
    <HeroTextContainerStyles>
    <h1>Viví tú música.</h1>
    <h2><strong>Tus auriculares importan</strong></h2>
    <p><strong> El mejor sonido</strong> a tu disposición. Comprá <b>rápido</b>, comprá <b>calidad</b>, comprá <b>facil.</b> </p>
    <Fade duration={3000} >
        <StyledButton/> 
    </Fade>    
    </HeroTextContainerStyles>
    <HeroImageContainerStyles>
      <Fade direction="left"  duration={3000} >
         <img src= {IMGHero} alt="Auriculares Hero"/>
      </Fade>   
    </HeroImageContainerStyles>
   </HeroContainerStyles>

  )
}

export default Hero