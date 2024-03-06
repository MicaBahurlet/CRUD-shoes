import { recomendados } from '../../data/recomendados.js';
import { RecomendadosContainer, RecomendadosWrapper, Boton } from './recomendados.js';
import Recomendados from './CardRecomendado.jsx'; 

import { FaAngleDoubleRight } from 'react-icons/fa';




function RecomendadosProduct() {
  return (
    <RecomendadosWrapper>  
      <h2>Recomendados off :</h2> 
      <RecomendadosContainer> 
        {recomendados.map(cat =>( 

          <Recomendados key={cat.id} {...cat} /> //le paso la key para que no de error y luego un spred para traer todo el objeto

        ))}
        
        <Boton className='Boton' onClick={() => window.location.href = "/Products"}>Ver más <FaAngleDoubleRight /></Boton>

      </RecomendadosContainer>

    </RecomendadosWrapper>
  );
};

export default RecomendadosProduct