import { BorderDecoration, CardCategoria } from "./CategoriasStyles"

function Categoria( {img,title,category}) {


  return (
    <CardCategoria>
        <img src={img} alt={category} />
        <h3>{title}</h3>
        <BorderDecoration />
    </CardCategoria>
  )
}

export default Categoria
