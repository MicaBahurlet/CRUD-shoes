import {productos} from "../../data/productos.js";
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

import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";

import { useRef } from "react";

function CardsProductos( ) {

  const productRef = useRef(); // Referencia del ref

  const [value, setValue] = useState("");
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const listOfCategories = useSelector((state) => state.categories.categories).map((category) => category.category);
  const dispatch = useDispatch();

  const handlerSubmit = (e, value) => {
    e.preventDefault();
    const newCategory = value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").split(" ").join("");
    const selectedCategory = listOfCategories.find((category) => category.toLowerCase() === newCategory);
    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory));
      // Scroll al ProductosWrapper
      doScroll();
    } else {
      alert("Ups! la categoría no existe, vuelve a intentar.");
    }
    setValue("");
  };

  const doScroll = () => {
    window.scrollTo(
      productRef.current.getBoundingClientRect().x,
      productRef.current.getBoundingClientRect().y
    );
  }

  const handleVerMas = () => {
    setLimit((prevLimit) => prevLimit + LIMIT_INCREMENT);
  };

  const handleVerMenos = () => {
    if (limit > INITIAL_LIMIT) {
      setLimit((prevLimit) => prevLimit - LIMIT_DECREMENT);
    }
  };

  return (
    <div>
      <NavBar />
      
        <Categorias />
        <ImputContainerStyles>
          <InputStyles
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Ej. Clasicos..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlerSubmit(e, value);
              }
            }}
          />
          <BotonInput
            type="submit"
            onClick={(e) => handlerSubmit(e, value)}
            disabled={!value}
          >
            BUSCAR
          </BotonInput>
        </ImputContainerStyles>
        <BorderSeparacion />
        <ProductosWrapper ref={productRef}> 
          <h2>Nuestros Auris: </h2>
          <ProductosContainer>
            {productos.slice(0, limit).map((prod) => (
              <CardProductos key={prod.id} {...prod} />
            ))}
          </ProductosContainer>
        </ProductosWrapper>
      <BotonsWrapper>
        <BotonVerMenos onClick={handleVerMenos}>Ver menos</BotonVerMenos>
        <Boton onClick={handleVerMas}>Ver más</Boton>
      </BotonsWrapper>
      <Footer />
    </div>
  );
}

export default CardsProductos;

// esto es para la paginación, inicia en 4 y suma y resta de a 4

const INITIAL_LIMIT = 4;
const LIMIT_INCREMENT = 4;
const LIMIT_DECREMENT = 4;




// esto tenía antes del doScroll

// import {productos} from "../../data/productos.js";


// import { 
//     ProductosContainer, 
//     ProductosWrapper, 
//     BorderSeparacion,
//     BotonsWrapper,
//     Boton,
//     BotonVerMenos,
// } from './Product.js';

// import {
//     ImputContainerStyles,
//     InputStyles,
//     BotonInput
// } from "../../components/hero/HeroStyles.js"

// import CardProductos from "./CardProductos.jsx"

// import Footer from "../../components/footer/Footer.jsx"
// import NavBar from "../../components/navbar/NavBar";

// import Categorias from "../../components/categorias/Categorias.jsx"

// import { useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCategory } from "../../redux/categories/categoriesSlice";


// import { useRef } from "react";

// function CardsProductos( ) {

//   const productRef = useRef(); //referencia del ref

//   const [value, setValue] = useState("");
//   const [limit, setLimit] = useState(INITIAL_LIMIT);


//   const listOfCategories = useSelector((state) => state.categories.categories).map((category) => category.category);
//   const dispatch = useDispatch();

//   const handlerSubmit = (e, value) => {
//     e.preventDefault();
//     const newCategory = value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").split(" ").join("");
//     const selectedCategory = listOfCategories.find((category) => category.toLowerCase() === newCategory);
//     if (selectedCategory) {
//       dispatch(selectCategory(selectedCategory));
//       // doScroll();
//     } else {
//       alert("Ups! la categoría no existe, vuelve a intentar.");
//     }
//     setValue("");
//   };

//   const doScroll = () => {
//     window.scrollTo(
//       productRef.current.getBoundingClientRect().x,  // devuelve la ubicacion X de productRef
//       productRef.current.getBoundingClientRect().y // devuelve la ubicacion Y de productRef
//     );
//   }

//   const handleVerMas = () => {
//     setLimit((prevLimit) => prevLimit + LIMIT_INCREMENT);
//   };

//   const handleVerMenos = () => {
//     if (limit > INITIAL_LIMIT) {
//       setLimit((prevLimit) => prevLimit - LIMIT_DECREMENT);
//     }
//   };

//   return (
//     <div>
//       <NavBar />
      

//         <Categorias />

//         <ImputContainerStyles  doScroll={doScroll} >
//           <InputStyles
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             type="text"
//             placeholder="Ej. Clasicos..."
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handlerSubmit(e, value);
//               }
//             }}
//           />
//           <BotonInput
//             type="submit"
//             onClick={(e) => handlerSubmit(e, value)}
//             disabled={!value}
//           >
//             BUSCAR
//           </BotonInput>
//         </ImputContainerStyles>

//         <BorderSeparacion />
//       <ProductosWrapper>  
//         <h2>Nuestros Auris: </h2>
//         <ProductosContainer ref={productRef} >
              
//           {productos.slice(0, limit).map((prod) => (
//             <CardProductos key={prod.id} {...prod} />
//           ))}
//         </ProductosContainer>


//       </ProductosWrapper>


//       <BotonsWrapper>
//         <BotonVerMenos onClick={handleVerMenos}>Ver menos</BotonVerMenos>
//         <Boton onClick={handleVerMas}>Ver más</Boton>
//       </BotonsWrapper>

//       <Footer />
//     </div>
//   );
// }

// export default CardsProductos;


// //Valores iniciales para la paginación, quiero que inicie en 4 y que sume de a 4 y reste de a 4

// const INITIAL_LIMIT = 4;
// const LIMIT_INCREMENT = 4;
// const LIMIT_DECREMENT = 4;





// ésto es lo que tenía antes y funcionaba



// import {productos} from "../../data/productos.js";
// // import {INITIAL_LIMIT} from "../../utils/constantes.js";

// import { 
//     ProductosContainer, 
//     ProductosWrapper, 
//     BorderSeparacion,
//     BotonsWrapper,
//     Boton,
//     BotonVerMenos,
// } from './Product.js';

// import {
//     ImputContainerStyles,
//     InputStyles,
//     BotonInput
// } from "../../components/hero/HeroStyles.js"

// import CardProductos from "./CardProductos.jsx"

// import Footer from "../../components/footer/Footer.jsx"
// import NavBar from "../../components/navbar/NavBar";

// import Categorias from "../../components/categorias/Categorias.jsx"

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCategory } from "../../redux/categories/categoriesSlice";




// function CardsProductos() {

//     const [value,setValue]=useState("");

//     const listOfCategories=useSelector(
//     (state)=> state.categories.categories)
//     .map((category)=>category.category);

//     const dispatch =useDispatch();

//     const handlerSubmit=(e,value)=>{
//       e.preventDefault();

//       const newCategory=value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").split(" ").join("");

//       const selectedCategory = listOfCategories.find((category)=>category.toLowerCase()=== newCategory);

//       if (selectedCategory) {
//         dispatch(selectCategory(selectedCategory));
//         doScroll();
//       } else {
//         return alert("Ups! la categoría no existe, vuelve a intentar.")
//       }

//       setValue("");
//     };

 
 

//   return (
//     <div>
//       <NavBar/>
//       <ProductosWrapper>
//         <Categorias/> 
//         {/* <TextProductos> 
//                 <h2>La casa es chica pero el corazón es grande.</h2>
//                 <h3>Nuestros productos serán pocos, pero ofrecemos calidad y garantía.</h3>
//                 <p>Tan simple como seleccionar un producto y agregar al carrito. No dudes, el mejor precio está en <strong>Auris.</strong> </p>
//         </TextProductos>   */}

//           <ImputContainerStyles>
//               <InputStyles 
//                 value={value}
//                 onChange={(e)=> setValue(e.target.value)}
//                 type="text" 
//                 placeholder="Ej. Clasicos..."
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     handlerSubmit(e, value); // si se presiona la tecla enter llama a handlerSubmit
//                   }
//                 }}
              
//               />
//               <BotonInput
//                 type="submit"
//                 onClick={(e) => handlerSubmit(e, value)}
//                 disabled={!value}
                
              
//               >BUSCAR</BotonInput>
//           </ImputContainerStyles>

          

//           <BorderSeparacion/>

           


//         <ProductosContainer>
//           {productos.map(prod =>(
//             <CardProductos key={prod.id} {...prod} />
//           ))}
          

//            {/* {Object.entries(productos).map(([,auriculares]) => 
//               auriculares.map((auris) => <CardProductos key={auris.id} {...auris} /> ) 
//            )} */}
//         </ProductosContainer>


//       </ProductosWrapper>


//         <BotonsWrapper>

//             <BotonVerMenos
//             >Ver menos</BotonVerMenos>
//             <Boton
           
//             >Ver más</Boton>
//         </BotonsWrapper>  

//       <Footer/>

//     </div>       

//   )
// }

// export default CardsProductos
