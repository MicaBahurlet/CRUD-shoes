import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

import { FinishContainer, FinishMensaje } from "./FinishCompraStyles";

import Submit from "../../components/UI/Submit/Submit";

import CheckImg from "../../data/imgProducts/check.png";

import {Zoom} from "react-awesome-reveal"




const FinishCompra = () => {
    return (
        <div>
            <Navbar />

            <FinishContainer>
                <FinishMensaje>
                    <Zoom duration={2000} >
                        <img src={CheckImg} alt="Check" />
                    </Zoom>

                    <h1>Gracias por tu compra</h1>

                    <h2>¡Tu pedido ha sido realizado con exito!</h2>
                    <h3>Revisá tu correo electrónico para más novedades.</h3>
                    <p>Mañana despacharemos tu pedido. Esperamos que disfrutes tus nuevas zapatillas.</p>

                    <Submit
                        type="submit"
                        onClick={() => window.location.href = "/"}
                    >Volver Inicio</Submit>
                </FinishMensaje>    

            </FinishContainer>    


            <Footer />
        </div>
    );
};
export default FinishCompra