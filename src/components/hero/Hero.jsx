//import Boton from "../UI/Boton"
import { HeroContainerStyles, 
  HeroTextContainerStyles, 
  HeroImageContainerStyles,
  // ImputContainerStyles,
  // InputStyles,
  BotonInput
} from "./HeroStyles"

import { Fade } from "react-awesome-reveal"
// import IMGHero from "../../data/imgProducts/HEROAuris.png"

import HeroCrud from "../../data/imgProducts/HEROCrud.png"


// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCategory } from "../../redux/categories/categoriesSlice";


const Hero = ({doScroll}) => {
  // const [value,setValue]=useState("");

  // const listOfCategories=useSelector(
  //   (state)=> state.categories.categories)
  //   .map((category)=>category.category);

  //   const dispatch =useDispatch();

  //   const handlerSubmit=(e,value)=>{
  //     e.preventDefault();

  //     const newCategory=value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").split(" ").join("");

  //     const selectedCategory = listOfCategories.find((category)=>category.toLowerCase()=== newCategory);

  //     if (selectedCategory) {
  //       dispatch(selectCategory(selectedCategory));
  //       doScroll();
  //     } else {
  //       return alert("Ups! la categoría no existe, vuelve a intentar.")
  //     }

  //     setValue("");
  //   };


  return (
    <HeroContainerStyles>

        

      
        <HeroTextContainerStyles>
          <h1>DEJÁ TU HUELLA.</h1>
          {/* <h2><strong>Tus auriculares importan</strong></h2> */}
          <p><strong> Las mejores zapatillas</strong> están acá. <br></br> <b>Pares únicos al mejor precio.</b> </p>

          <BotonInput onClick={() => window.location.href = "/Products"}>COMPRAR</BotonInput>
          
          
        </HeroTextContainerStyles>
     
        <HeroImageContainerStyles>
          <Fade direction="left"  duration={3000} >
            <img src= {HeroCrud} alt="Auriculares Hero"/>
          </Fade>   
        </HeroImageContainerStyles>

        


    </HeroContainerStyles>

  )
};

export default Hero