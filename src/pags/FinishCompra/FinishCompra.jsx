
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { FinishContainer, FinishMensaje, ContainerBtn } from "./FinishCompraStyles";
import Submit from "../../components/UI/Submit/Submit";
import CheckImg from "../../data/imgProducts/check.png";
import { Zoom } from "react-awesome-reveal";
import { useSelector } from 'react-redux';

const FinishCompra = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.currentUser);

    return (
        <div>
            <Navbar />
            <FinishContainer>
                <FinishMensaje>
                    <Zoom duration={2000}>
                        <img src={CheckImg} alt="Check" />
                    </Zoom>
                    <h1>Gracias por tu compra</h1>
                    <h2>¡Tu pedido ha sido realizado con exito!</h2>
                    <h3>Hemos enviado a tu correo {currentUser.email} más detalles.</h3>
                    <p>Mañana despacharemos tu pedido. Esperamos que disfrutes tus nuevas zapatillas.</p>
                    <ContainerBtn>
                        <Submit
                            type="submit"
                            onClick={() => navigate("/")}
                        >
                            Volver Inicio
                        </Submit>
                        <Submit
                            type="submit"
                            onClick={() => navigate("/orders")}
                        >
                            Ver mis pedidos
                        </Submit>
                    </ContainerBtn>
                </FinishMensaje>
            </FinishContainer>
            <Footer />
        </div>
    );
};

export default FinishCompra;
