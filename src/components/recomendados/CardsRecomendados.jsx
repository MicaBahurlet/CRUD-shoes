// import { recomendados } from '../../data/recomendados.js';
import { RecomendadosContainer, RecomendadosWrapper, Boton } from './recomendados.js';
import Recomendados from './CardRecomendado.jsx'; 

import { FaAngleDoubleRight } from 'react-icons/fa';

import { useSelector } from 'react-redux';




function RecomendadosProduct() {

  const {recommended} = useSelector((state) => state.recommended);
  return (
    <RecomendadosWrapper>   
      <h2>Recomendados  random para ti: </h2> 
      <h3>Probá suerte, te recomendamos en base a los más comprados.</h3>
      <RecomendadosContainer> 
        {recommended.map(cat =>(  //antes estaba recomendados.map

          <Recomendados key={cat.id} {...cat} /> //le paso la key para que no de error y luego un spred para traer todo el objeto

        ))}
        
        

      </RecomendadosContainer>
      <Boton  onClick={() => window.location.href = "/Products"}>Más <FaAngleDoubleRight /></Boton>

    </RecomendadosWrapper>
  );
};

export default RecomendadosProduct