//import Boton from "../UI/Boton"
import { HeroContainerStyles, HeroTextContainerStyles, HeroImageContainerStyles } from "./HeroStyles"

function Hero() {
  return (
   <HeroContainerStyles>
    <HeroTextContainerStyles>
    <h1>Disfruta de tus canciones favoritas</h1>
    <h2>Tus auriculares importan</h2>
    <p>El mejor sonido a tu disposición. Comprá rápido, comprá calidad, comprá facil. </p>
    </HeroTextContainerStyles>
    <HeroImageContainerStyles>
      <img src="./src/data/imgProducts/HEROAuris.png" alt="Auriculares Hero"/>
    </HeroImageContainerStyles>
    {/*<Boton/>*/}
   </HeroContainerStyles>

  )
}

export default Hero