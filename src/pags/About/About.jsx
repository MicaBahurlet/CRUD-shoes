import { 
    AboutContainer, 
    AboutTextContainerStyles,
    AboutImageContainerStyles,
    HistoriaAbout,
    MisionAbout,
    

} from "./About";

import Footer from "../../components/footer/Footer";




function About() {
    
    return (

            <div>
                <AboutContainer>

                            <AboutImageContainerStyles>
                                <img src="./src/data/imgProducts/About.png" alt="Logo"/>
                            </AboutImageContainerStyles>

                    
                            <AboutTextContainerStyles>
                                <h2>Quienes somos?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur in rerum doloribus doloremque, quos nisi aliquid, dignissimos quis, id autem qui! Possimus, et asperiores consequatur rem debitis eligendi, quam, qui hic totam dolore sapiente? Cum, harum voluptates et alias fuga quibusdam rem! Accusantium ratione doloremque magnam. Quas aut architecto reiciendis?</p>
                            </AboutTextContainerStyles>

                </AboutContainer>

            
                <HistoriaAbout>
                    <h3>Filosofía de la empresa</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium id ipsa repellat fuga explicabo in, officia hic itaque eos praesentium velit. Ipsum soluta cum temporibus dolorem molestias earum iste, at reprehenderit ipsam nulla, est delectus repellat repellendus sapiente necessitatibus ea! Expedita commodi est ab? Veritatis tempora excepturi quod consectetur rerum sunt aliquid, iusto alias sint consequuntur neque nemo quidem quasi, inventore dolor adipisci perferendis id. Asperiores possimus excepturi odio porro?</p>
                </HistoriaAbout>

                <MisionAbout>
                    <h3>Nuestra misión</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maiores. Quas facere, numquam quibusdam consequuntur, corrupti suscipit eaque sed tenetur vitae, saepe incidunt natus dolorem earum ut! Nostrum, sint enim.</p>
                </MisionAbout>

                <Footer/>

            </div>
     
     

    )

    

 
}

export default About