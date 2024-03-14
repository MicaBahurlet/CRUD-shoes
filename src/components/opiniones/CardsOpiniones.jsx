import { RecomendadosContainer, RecomendadosWrapper } from "./opinionesStyle";

import Opiniones from './CardOpinion';

import { useSelector } from 'react-redux';

function OpinionesCompra() {
  const { opiniones } = useSelector((state) => state.opiniones);

  return (
    <RecomendadosWrapper>
      <h2>Experiencias de compra: </h2>
      <RecomendadosContainer>
        {opiniones.map(opinion => (
          <Opiniones key={opinion.id} {...opinion} />
        ))}
      </RecomendadosContainer>
    </RecomendadosWrapper>
  );
}

export default OpinionesCompra;
