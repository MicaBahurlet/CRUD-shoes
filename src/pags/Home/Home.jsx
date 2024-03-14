import { HomeContainer } from "./Home";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Layout from "../../components/layout/Layout";
import Categorias from "../../components/categorias/Categorias";
// import CardsProductos from "../../components/productos/CardsProductos"; 
import Footer from "../../components/footer/Footer";

import { ProductosWrapper } from "../../components/productos/CardsProductosStyles";

import { BotonVerMenos, Boton, BotonsWrapper } from "../Products/Product";


import Recomendados from "../../components/recomendados/CardsRecomendados";

import Opiniones from "../../components/opiniones/CardsOpiniones";

import { useRef } from "react";

export function Home() {
    const productsRef = useRef(); // acá se almacena la referencia

    const doScroll = () => {
        window.scrollTo(
            productsRef.current.getBoundingClientReact().x, //nos devuelve la ubicación X de algo = productRef.current
            productsRef.current.getBoundingClientReact().y // ubicación y 
        );
    }

    return (
        <>
            <HomeContainer>
                <NavBar/> 
                <Layout>
                    <Hero doScroll={doScroll}/>
                    
                    <Categorias/>
                    <button onClick={() => window.location.href = "/Products"}>Ver Productos</button>

                    <Recomendados/>

                    <Opiniones/>

                    {/* <ProductosWrapper ref={productsRef}>  
                        <h2>Nuestros Auris:</h2>
                        <CardsProductos/> 

                        <BotonsWrapper>
                            <BotonVerMenos>Ver menos</BotonVerMenos>
                            <Boton >Ver mas</Boton>
                        </BotonsWrapper>
                    </ProductosWrapper>     */}
                </Layout>
                <Footer/>
            </HomeContainer>
        </>    
    );
}

export default Home