//import Boton from "../UI/Boton"
import { HeroContainerStyles, 
  HeroTextContainerStyles, 
  HeroImageContainerStyles,
  // ImputContainerStyles,
  // InputStyles,
  BotonInput
} from "./HeroStyles"

import { Fade } from "react-awesome-reveal"
import IMGHero from "../../data/imgProducts/HEROAuris.png"


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
          <h1>Viví tú música.</h1>
          <h2><strong>Tus auriculares importan</strong></h2>
          <p><strong> El mejor sonido</strong> a tu disposición. Comprá <b>rápido</b>, comprá <b>calidad</b>, comprá <b>facil.</b> </p>

          <BotonInput onClick={() => window.location.href = "/Products"}>VER PRODUCTOS</BotonInput>
          
          {/* <ImputContainerStyles>
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
          </ImputContainerStyles> */}
          
        </HeroTextContainerStyles>
      <HeroImageContainerStyles>
        <Fade direction="left"  duration={3000} >
          <img src= {IMGHero} alt="Auriculares Hero"/>
        </Fade>   
      </HeroImageContainerStyles>


        


    </HeroContainerStyles>

  )
};

export default Hero