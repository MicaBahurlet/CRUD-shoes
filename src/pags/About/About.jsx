import { 
    AboutContainer, 
    AboutTextContainerStyles,
    AboutImageContainerStyles,
    HistoriaAbout,
    MisionAbout,
    

} from "./About";

import Footer from "../../components/footer/Footer";
import ImgAbout from "../../data/imgProducts/About.png";




function About() {
    
    return (

            <div>
                <AboutContainer>

                            <AboutImageContainerStyles>
                                <img src={ImgAbout} alt="About"/>
                            </AboutImageContainerStyles>

                    
                            <AboutTextContainerStyles>
                                <h2>Quienes somos?</h2>
                                <p>Un grupo de amigos, la decición de emprender y el amor por la música fueron los desencadenantes. Desde hace 4 años decidimos crear un e-comerce que permita a las personas  comprar sus auriculares, de <strong> manera simple y sin letra chica.</strong> </p>
                            </AboutTextContainerStyles>

                </AboutContainer>

            
                <HistoriaAbout>
                    <h3>Filosofía de la empresa</h3>
                    <p>Para disfrutar y vivir la música se necesitan unos BUENOS auriculares, la calidad del sonido es fundamental para la apreciación musical. Queremos que cualquier persona pueda acceder de manera online a la compra de sus auriculares.
                        <br /> Queremos que sea fácil, simple y rápido.
                    </p>
                    
                </HistoriaAbout>

                <MisionAbout>
                    <h3>Nuestra misión</h3>
                    <p>Que puedas encontrar los auriculares que estás buscando en nuestra tienda, que pagues por ellos lo que verdaderamente cuestan y que lleguen a tu casa, vos no te moves, sólo esperas a que llegue el paquete.
                    </p>
                </MisionAbout>

                <Footer/>

            </div>
     
     

    )

    

 
}

export default About