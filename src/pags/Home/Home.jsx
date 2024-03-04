import { HomeContainer } from "./Home";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Layout from "../../components/layout/Layout";
import Categorias from "../../components/categorias/Categorias";
//import CardsProductos from "../../components/productos/CardsProductos"; 
import Footer from "../../components/footer/Footer";


import Recomendados from "../../components/recomendados/CardsRecomendados";

export function Home() {

    return (
        <div>
            <HomeContainer>
                <NavBar/> 
                <Layout>
                    <Hero/>
                    <Recomendados/>
                    <Categorias/>
                    <button onClick={() => window.location.href = "/Products"}>Ver Productos</button>
                </Layout>
                <Footer/>
            </HomeContainer>
        </div>    
    )
}

export default Home