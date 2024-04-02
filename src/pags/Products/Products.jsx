
import {productos} from "../../data/productos.js";
// import INITIAL_LIMIT from "../../utils/constantes.js";

import { 
    ProductosContainer, 
    ProductosWrapper, 
    BorderSeparacion,
    BotonsWrapper,
    Boton,
    BotonVerMenos,
} from './Product.js';


import {
    ImputContainerStyles,
    InputStyles,
    BotonInput
} from "../../components/hero/HeroStyles.js"

import CardProductos from "./CardProductos.jsx"

import Footer from "../../components/footer/Footer.jsx"
import NavBar from "../../components/navbar/NavBar";

import Categorias from "../../components/categorias/Categorias.jsx"


  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { selectCategory } from "../../redux/categories/categoriesSlice";




function CardsProductos() {
    const [value,setValue]=useState("");

    const listOfCategories=useSelector(
    (state)=> state.categories.categories)
    .map((category)=>category.category);

    const dispatch =useDispatch();

    const handlerSubmit=(e,value)=>{
      e.preventDefault();

      const newCategory=value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").split(" ").join("");

      const selectedCategory = listOfCategories.find((category)=>category.toLowerCase()=== newCategory);

      if (selectedCategory) {
        dispatch(selectCategory(selectedCategory));
        doScroll();
      } else {
        return alert("Ups! la categoría no existe, vuelve a intentar.")
      }

      setValue("");
    };
 

  return (
    <div>
      <NavBar/>
      <ProductosWrapper>
        <Categorias/> 
        {/* <TextProductos> 
                <h2>La casa es chica pero el corazón es grande.</h2>
                <h3>Nuestros productos serán pocos, pero ofrecemos calidad y garantía.</h3>
                <p>Tan simple como seleccionar un producto y agregar al carrito. No dudes, el mejor precio está en <strong>Auris.</strong> </p>
        </TextProductos>   */}

          <ImputContainerStyles>
              <InputStyles 
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                type="text" 
                placeholder="Ej. Clasicos..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handlerSubmit(e, value); // si se presiona la tecla enter llama a handlerSubmit
                  }
                }}
              
              />
              <BotonInput
                type="submit"
                onClick={(e) => handlerSubmit(e, value)}
                disabled={!value}
                
              
              >BUSCAR</BotonInput>
          </ImputContainerStyles>

          

          <BorderSeparacion/>

           


        <ProductosContainer>
          {productos.map(prod =>(
            <CardProductos key={prod.id} {...prod} />
          ))}
          

           {/* {Object.entries(productos).map(([,auriculares]) => 
              auriculares.map((auris) => <CardProductos key={auris.id} {...auris} /> ) 
           )} */}
        </ProductosContainer>


      </ProductosWrapper>

      <BotonsWrapper>

        <BotonVerMenos>Ver menos</BotonVerMenos>
        <Boton>Ver más</Boton>
      </BotonsWrapper>  
      <Footer/>

    </div>       

  )
}

export default CardsProductos