// import { recomendados } from '../../data/recomendados.js';
import { RecomendadosContainer, RecomendadosWrapper, BotonBuy } from './recomendados.js';
import Recomendados from './CardRecomendado.jsx'; 

import { FaAngleDoubleRight } from 'react-icons/fa';

import { useSelector } from 'react-redux';




function RecomendadosProduct() {

  const {recommended} = useSelector((state) => state.recommended);
  return (
    <RecomendadosWrapper>   
      <h2>Zapatillas recomendadas para ti: </h2> 
      {/* <h3>Recomendaciones hechas para ti.</h3> */}
      <RecomendadosContainer> 
        {recommended.map(cat =>(  //antes estaba recomendados.map

          <Recomendados key={cat.id} {...cat} /> //le paso la key para que no de error y luego un spred para traer todo el objeto

        ))}
        
        

      </RecomendadosContainer>
      <BotonBuy  onClick={() => window.location.href = "/Products"}> Ver más  <FaAngleDoubleRight /></BotonBuy>

    </RecomendadosWrapper>
  );
};

export default RecomendadosProduct