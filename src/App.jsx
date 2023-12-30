import  Categorias  from "./components/categorias/Categorias.jsx";
//import  Footer  from "./components/footer/Footer.jsx";
import  Hero  from "./components/hero/Hero.jsx";
import  Navbar  from "./components/navbar/NavBar.jsx";
import Layout from "./components/layout/Layout.jsx";
import CardsProductos from "./components/productos/CardsProductos.jsx";
//import StyledButton from "./components/UI/Boton.jsx";




function App() {
  

  return (
    <>
      <Navbar />
      <Layout>
        <Hero/>
        {/*<StyledButton/>*/}
        <Categorias/>
        <CardsProductos/>
      </Layout>
      {/*<Footer/>*/}
      
    </>
  )
}

export default App 
