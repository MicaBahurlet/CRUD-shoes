
import { productos } from "../../data/productos.js";
import {
  ProductosContainer,
  ProductosWrapper,
  BorderSeparacion,
  BotonsWrapper,
  Boton,
  BotonVerMenos,
} from "./Product.js";

import {
  ImputContainerStyles,
  InputStyles,
  BotonInput
} from "../../components/hero/HeroStyles.js";

import CardProductos from "./CardProductos.jsx";

import Footer from "../../components/footer/Footer.jsx";
import NavBar from "../../components/navbar/NavBar";

import Categorias from "../../components/categorias/Categorias.jsx";

import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";

function CardsProductos() {
  const productRef = useRef(); // Referencia del ref

  const [value, setValue] = useState("");
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  
    
  );

  // const handleCategoryClick = (category) => {
  //   dispatch(selectCategory(category));
  //   doScroll(); // Realizar scroll al ProductWrapper
  // };

  const dispatch = useDispatch();

  const handlerSubmit = (e, value) => {
    e.preventDefault();

    if (!value.trim()) {
      alert("El campo está vacío. Por favor, ingresa una categoría.");
      return;
    }

    // Validación de caracteres especiales
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (!regex.test(value)) {
      alert("Upss! algo anda mal, verificá tu búsqueda.");
      return;
    }

    // Verificar si la categoría ingresada está en la lista de categorías
    const normalizedValue = value.trim().toLowerCase();
    const categoryExists = productos.some(
      (prod) => prod.category.toLowerCase() === normalizedValue
    );
     // Si no existe la categoría
    if (!categoryExists) {
      alert("Ups! No se encontró ninguna categoría. Por favor, intenta una categoría existente.");
      return;
    }

    dispatch(selectCategory(normalizedValue));
    setValue("");

    doScroll();
  };

  const doScroll = () => {
    window.scrollTo(
      productRef.current.getBoundingClientRect().x,
      productRef.current.getBoundingClientRect().y
    );
  };



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
      <ProductosWrapper id="productos-wrapper" ref={productRef}>
        <h2>Nuestros Auris: </h2>
        <ProductosContainer>
          {productos
            .filter((prod) =>
              selectedCategory
                ? prod.category.toLowerCase().includes(selectedCategory.toLowerCase())
                : true
            )
            .slice(0, limit)
            .map((prod) => (
              <CardProductos key={prod.id} {...prod} />
            ))}
        </ProductosContainer>
      </ProductosWrapper>
      <BotonsWrapper>
        <BotonVerMenos onClick={handleVerMenos}>
          Ver menos
        </BotonVerMenos>
        <Boton onClick={handleVerMas} >
          Ver más
        </Boton>
      </BotonsWrapper>
      <Footer />
    </div>
  );
}

export default CardsProductos;

const INITIAL_LIMIT = 4;
const LIMIT_INCREMENT = 4;
const LIMIT_DECREMENT = 4;


// aqui tenía filtros por categorías y pocas validaciones


// import { productos } from "../../data/productos.js";
// import {
//   ProductosContainer,
//   ProductosWrapper,
//   BorderSeparacion,
//   BotonsWrapper,
//   Boton,
//   BotonVerMenos,
// } from "./Product.js";

// import {
//   ImputContainerStyles,
//   InputStyles,
//   BotonInput
// } from "../../components/hero/HeroStyles.js";

// import CardProductos from "./CardProductos.jsx";

// import Footer from "../../components/footer/Footer.jsx";
// import NavBar from "../../components/navbar/NavBar";

// import Categorias from "../../components/categorias/Categorias.jsx";

// import { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCategory } from "../../redux/categories/categoriesSlice";

// function CardsProductos() {
//   const productRef = useRef(); // Referencia del ref

//   const [value, setValue] = useState("");
//   const [limit, setLimit] = useState(INITIAL_LIMIT);

//   const selectedCategory = useSelector(
//     (state) => state.categories.selectedCategory
//   );

//   const dispatch = useDispatch();

//   const handlerSubmit = (e, value) => {
//     e.preventDefault();


//     if (!value.trim()) {
//       alert("El campo está vacío. Por favor, ingresa un valor.");
//       return;
//     }

//     dispatch(selectCategory(value.trim()));
//     setValue("");
//     doScroll();
//   };

//   const doScroll = () => {
//     window.scrollTo(
//       productRef.current.getBoundingClientRect().x,
//       productRef.current.getBoundingClientRect().y
//     );
//   };

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

//       <Categorias />
//       <ImputContainerStyles>
//         <InputStyles
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           type="text"
//           placeholder="Ej. Clasicos..."
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handlerSubmit(e, value);
//             }
//           }}
//         />
//         <BotonInput
//           type="submit"
//           onClick={(e) => handlerSubmit(e, value)}
//           disabled={!value}
//         >
//           BUSCAR
//         </BotonInput>
//       </ImputContainerStyles>
//       <BorderSeparacion />
//       <ProductosWrapper ref={productRef}>
//         <h2>Nuestros Auris: </h2>
//         <ProductosContainer>
//           {productos
//             .filter((prod) =>
//               selectedCategory
//                 ? prod.category.toLowerCase().includes(selectedCategory.toLowerCase())
//                 : true
//             )
//             .slice(0, limit)
//             .map((prod) => (
//               <CardProductos key={prod.id} {...prod} />
//             ))}
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

// const INITIAL_LIMIT = 4;
// const LIMIT_INCREMENT = 4;
// const LIMIT_DECREMENT = 4;




// lo que tenía antes del 7 y funcionaba

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

// import { useRef } from "react"; // para la funciónn de doScroll

// function CardsProductos( ) {

//   const productRef = useRef(); // Referencia del ref

//   const [value, setValue] = useState("");
//   const [limit, setLimit] = useState(INITIAL_LIMIT);

//   const listOfCategories = useSelector((state) => state.categories.categories).map((category) => category.category); // me trae las categorías y las recorre
//   const dispatch = useDispatch(); 

//   const handlerSubmit = (e, value) => {
//     e.preventDefault();
//     const newCategory = value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").split(" ").join("");
//     const selectedCategory = listOfCategories.find((category) => category.toLowerCase() === newCategory); // busca entre toda la lista de categorias y filtra la categoria que coincida con newCategory y la alamecena en selectedCategory validandola

//     if (!value.trim()) { // Verifica si el valor está vacío o solo contiene espacios en blanco
//       alert("El campo está vacío. Por favor, ingresa un valor.");
//       return; // Sale de la función si el campo está vacío
//     }

//     if (selectedCategory) {
//       dispatch(selectCategory(selectedCategory));
//       // Scroll al ProductosWrapper
//       doScroll();
//     } else {
//       alert("Ups! la categoría no existe, vuelve a intentar.");
//     }
//     setValue("");

    
//   };

//   const doScroll = () => {
//     window.scrollTo(
//       productRef.current.getBoundingClientRect().x, // devuelve la ubicacion X de productRef
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
//         <ImputContainerStyles>
//           <InputStyles
//             value={value}
//             onChange={(e) => setValue(e.target.value)} //a medida de que haya cambios, almacena el value en el estado
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
//         <ProductosWrapper ref={productRef}> 
//           <h2>Nuestros Auris: </h2>
//           <ProductosContainer>
//             {productos.slice(0, limit).map((prod) => (
//               <CardProductos key={prod.id} {...prod} />
//             ))}
//             {/* {productos.filter ((productos) => productos.category === "Deportivo").slice(0, limit).map((productos) => (
//               <CardProductos key={productos.id} {...productos}  />
//             ))} */}
            
            
             
//           </ProductosContainer>
//         </ProductosWrapper>
//       <BotonsWrapper>
//         <BotonVerMenos onClick={handleVerMenos}>Ver menos</BotonVerMenos>
//         <Boton onClick={handleVerMas}>Ver más</Boton>
//       </BotonsWrapper>
//       <Footer />
//     </div>
//   );
// }

// export default CardsProductos;

// // esto es para la paginación, inicia en 4 y suma y resta de a 4

// const INITIAL_LIMIT = 4;
// const LIMIT_INCREMENT = 4;
// const LIMIT_DECREMENT = 4;



