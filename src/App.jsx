//import  Categorias  from "./components/categorias/Categorias.jsx";
//import  Footer  from "./components/footer/Footer.jsx";
import  Hero  from "./components/hero/Hero.jsx";
import  Navbar  from "./components/navbar/NavBar.jsx";
import Layout from "./components/layout/Layout.jsx";
//import CardsProductos from "./components/productos/CardsProductos.jsx";



function App() {
  

  return (
    <>
      <Navbar />
      <Layout>
        <Hero/>
        {/*<Categorias />*/}
        {/*<CardsProductos />*/}
      </Layout>
      {/*<Footer/>*/}
      
    </>
  )
}

export default App 
