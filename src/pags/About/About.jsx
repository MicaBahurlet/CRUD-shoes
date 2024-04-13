import { 
    AboutContainer, 
    AboutTextContainerStyles,
    AboutImageContainerStyles,
    HistoriaAbout,
    MisionAbout,
    BeneficiosMusica,
    BeneficiosImg 
    

} from "./About";

import Footer from "../../components/footer/Footer";
import ImgAbout from "../../data/imgProducts/AurisAbout.png";
import NavBar from "../../components/navbar/NavBar";
import { Fade } from "react-awesome-reveal";
import BeneficiosImgAbout from "../../data/imgProducts/AboutBenefic.jpg";




function About() {
    
    return (

            <div>
                <NavBar/>
                <AboutContainer>
          
                        
                            <AboutImageContainerStyles>
                                <Fade direction="left"  duration={2000} >
                                    <img src={ImgAbout} alt="About"/>
                                </Fade>
                            </AboutImageContainerStyles>
                        
                    
                            <AboutTextContainerStyles>
                                <h2>¿Quienes somos?</h2>
                                <p>Un grupo de amigos, la decición de emprender y el amor por la música fueron los desencadenantes. Desde hace 4 años decidimos crear un e-comerce que permita a las personas  comprar sus auriculares, de <strong> manera simple y sin letra chica.</strong> </p>
                            </AboutTextContainerStyles>

                </AboutContainer>

            
                <HistoriaAbout>
                    <h2>Filosofía de la empresa:</h2>
                    <p>Para <b> <i> disfrutar y vivir la música </i></b> se necesitan unos <strong>BUENOS auriculares</strong>, la calidad del sonido es fundamental para la apreciación musical. Queremos que cualquier persona pueda acceder de manera online a la compra de sus auriculares.
                        <br /> Queremos que sea fácil, simple y rápido.
                    </p>
                    
                </HistoriaAbout>

                <MisionAbout>
                    <h2>Nuestra misión:</h2>
                    <p>Que puedas encontrar los auriculares que estás buscando en nuestra tienda, que pagues por ellos lo que verdaderamente cuestan y que lleguen a tu casa, vos no te moves, sólo esperas a que llegue el paquete.
                    </p>
                </MisionAbout>

                <BeneficiosMusica>
                    <div>
                        <h2>Beneficios de la Musica:</h2>
                        <ul>
                            <li>&#128588; <b> Reduce </b> el estrés y la ansiedad.</li>
                            <li>&#128129; <b>Mejora</b> la concentración y el enfoque.</li>
                            <li>&#128587; <b>Eleva</b> el estado de ánimo y la felicidad.</li>
                            <li>&#128640; <b>Motiva y aumenta</b> la energía durante el ejercicio.</li>
                            <li>&#129309; Proporciona <b> compañía y consuelo.</b></li>
                            <li>&#128275; <b>Estimula</b> la creatividad y la inspiración.</li>
                            <li>&#129504; Mejora la <b> salud mental y física.</b></li>
                            <li>&#127183; Proporciona <b> diversión y entretenimiento.</b></li>
                        </ul>
                    </div>
                    <BeneficiosImg> 
                        <Fade direction="right"  duration={2000} >
                            <img src={BeneficiosImgAbout} alt="Beneficios de la musica"/>
                        </Fade>    
                    </BeneficiosImg>    

                </BeneficiosMusica>


                <Footer/>

            </div>
     
     

    )

    

 
}

export default About