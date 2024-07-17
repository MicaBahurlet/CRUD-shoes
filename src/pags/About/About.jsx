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
import ImgAbout from "../../data/imgProducts/AboutCrud.jpg";
import NavBar from "../../components/navbar/NavBar";
import { Fade } from "react-awesome-reveal";
import BeneficiosImgAbout from "../../data/imgProducts/Iconic3.png";




function About() {
    
    return (

            <div>
                <NavBar/>
                <AboutContainer>
          
                        
                            <AboutImageContainerStyles>
                                <Fade direction="zoom"  duration={2000} >
                                    <img src={ImgAbout} alt="About"/>
                                </Fade>
                            </AboutImageContainerStyles>
                        
                    
                            <AboutTextContainerStyles>
                                <h2>¿Quienes somos?</h2>
                                <p>Somos una <strong>empresa familiar</strong> apasionada por ofrecerte lo mejor. Nos dedicamos a <strong>revender pares discontinuos de zapatillas</strong> al <strong>mejor costo</strong>. Nuestra misión es brindarte productos de calidad a precios accesibles, siempre con un servicio personalizado y cercano. ¡Descubre las mejores ofertas y encuentra tus zapatillas favoritas con nosotros!</p>
                            </AboutTextContainerStyles>

                </AboutContainer>

                <BeneficiosMusica>
                    <div>
                        <h2>Beneficios de comprar en nuestra tienda online:</h2>
                        <ul>
                            <li>&#128176; Pares discontinuos originales al mejor precio del mercado.</li>
                            <li>&#128241; Compra rápida y sencilla.</li>
                            <li>&#128242; Comunicación directa con nosotros para resolver tus dudas.</li>
                            <li>&#128077; Envío seguro y confiable a tu domicilio.</li>
                            <li>&#127752; Amplia variedad de métodos de pago disponibles.</li>
                            <li>&#128230; Ofertas exclusivas y descuentos especiales para clientes registrados.</li>
                        </ul>
                    </div>

                    <BeneficiosImg> 
                        <Fade direction="right"  duration={2000} >
                            <img src={BeneficiosImgAbout} alt="Beneficios de la musica"/>
                        </Fade>    
                    </BeneficiosImg>    

                </BeneficiosMusica>

            
                <HistoriaAbout>
                    <h2>Filosofía de la empresa:</h2>
                    <p>Para <strong><i>disfrutar de cada paso</i></strong>, se necesitan unas <strong>BUENAS zapatillas</strong>. La <strong>calidad y comodidad</strong> son fundamentales para el bienestar diario. Queremos que cualquier persona pueda acceder de manera online a la compra de pares discontinuos de zapatillas al mejor costo.
                        <br /> Queremos que sea <strong>fácil, simple y rápido</strong>.
                    </p>

                    
                </HistoriaAbout>

                <MisionAbout>
                    <h2>Nuestra misión:</h2>
                    <p>Queremos que encuentres las <strong>zapatillas perfectas</strong> en nuestra tienda, que pagues por ellas lo que <strong>realmente valen</strong> y que lleguen a la puerta de tu casa. Tú no tienes que moverte, solo espera a que llegue el paquete.</p>

                </MisionAbout>


                <Footer/>

            </div>
     
     

    )

    

 
}

export default About