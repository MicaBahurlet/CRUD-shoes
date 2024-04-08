// import { useDispatch, useSelector } from "react-redux";  // me traigo el dispatch porque tengo actions
// import { selectCategory } from "../../redux/categories/categoriesSlice";


// import { BorderDecoration, CardCategoria } from "./CategoriasStyles"


// function Categoria( {img,title,category}) {
//     const { selectedCategory } = useSelector((state) => state.categories);

//     const dispatch = useDispatch();


//   return (
//     <CardCategoria 
//       selected={category === selectedCategory }
//       onClick={(e) => dispatch(selectCategory(category))}
    
//     >
        
//         <img src={img} alt={category} />
//         <h3>{title}</h3>
//         <BorderDecoration />
//     </CardCategoria>
//   )
// }

// export default Categoria;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';
import { BorderDecoration, CardCategoria } from './CategoriasStyles';

function Categoria({ img, title, category }) {
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCategoryClick = () => {
    dispatch(selectCategory(category));
    doScroll();
  };

  const doScroll = () => {
    // Acá le paso el ide de Wrapper de Productos
    const productWrapper = document.getElementById('productos-wrapper');
    if (productWrapper) {
      productWrapper.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={handleCategoryClick}
    >
      <img src={img} alt={category} />
      <h3>{title}</h3>
      <BorderDecoration />
    </CardCategoria>
  );
}

export default Categoria;
