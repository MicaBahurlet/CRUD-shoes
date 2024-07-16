

import { HomeContainer } from "./Home";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Layout from "../../components/layout/Layout";

import Footer from "../../components/footer/Footer";
import Marcas from "../../components/marcas/Marcas";






import Recomendados from "../../components/recomendados/CardsRecomendados";

import Opiniones from "../../components/opiniones/CardsOpiniones";

import { useRef } from "react";

export function Home() {
   


    return (
        <>
            <NavBar/> 
            <HomeContainer>
                
                
                <Layout>
                    <Hero/>

                    <Marcas/>
                    {/* <Opiniones/> */}
                    <Recomendados/>

                </Layout>
                
                <Footer/>
            </HomeContainer>
        </>    
    );
}

export default Home