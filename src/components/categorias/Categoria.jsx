import { BorderDecoration, CardCategoria } from "./CategoriasStyles"

import { useDispatch, useSelector } from "react-redux";  // me traigo el dispatch porque tengo actions
import { selectCategory } from "../../redux/categories/categoriesSlice";



function Categoria( {img,title,category}) {
    const { selectedCategory } = useSelector((state) => state.categories);
    const dispatch = useDispatch();


  return (
    <CardCategoria 
      selected={category === selectedCategory }
      onClick={(e) => dispatch(selectCategory(category))}
    
    >
        
        <img src={img} alt={category} />
        <h3>{title}</h3>
        <BorderDecoration />
    </CardCategoria>
  )
}

export default Categoria
