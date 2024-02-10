import { HomeContainer } from "./Home";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Layout from "../../components/layout/Layout";
import Categorias from "../../components/categorias/Categorias";
import CardsProductos from "../../components/productos/CardsProductos";
import Footer from "../../components/footer/Footer";

export function Home() {

    return (
        <HomeContainer>
            <NavBar/>
            <Layout>
                <Hero/>
                <Categorias/>
                <CardsProductos/>
            </Layout>
            <Footer/>
        </HomeContainer>
    )
}

export default Home