

import { HomeContainer } from "./Home";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Layout from "../../components/layout/Layout";
// import Categorias from "../../components/categorias/Categorias";
// import CardsProductos from "../../components/productos/CardsProductos"; 
import Footer from "../../components/footer/Footer";

// import { ProductosWrapper } from "../../components/productos/CardsProductosStyles";

// import { BotonVerMenos, Boton, BotonsWrapper } from "../Products/Product";




import Recomendados from "../../components/recomendados/CardsRecomendados";

import Opiniones from "../../components/opiniones/CardsOpiniones";

import { useRef } from "react";

export function Home() {
   


    return (
        <>
            <HomeContainer>
                <NavBar/> 
                <Layout>
                    <Hero/>

                    <Opiniones/>
                    <Recomendados/>

                </Layout>
                
                <Footer/>
            </HomeContainer>
        </>    
    );
}

export default Home