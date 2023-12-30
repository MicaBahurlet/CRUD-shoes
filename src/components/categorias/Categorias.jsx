import { categorias } from '../../data/categorias.js';
import { CategoriasContainer, CategoriasWrapper } from './CategoriasStyles.js';
import Categoria from './Categoria.jsx'; //acá tengo la ruta de la img en una misma carpeta

function Categorias() {
  return (
    <CategoriasWrapper>  
      <h2>Categorías</h2> 
      <CategoriasContainer> 
        {categorias.map(cat =>( //hago un map para poder leer el archivo categorias.js dentro de data

          <Categoria key={cat.id} {...cat} /> //le paso la key para que no de error y luego un spred para traer todo el objeto

        ))}
      </CategoriasContainer>

    </CategoriasWrapper>
  );
};

export default Categorias