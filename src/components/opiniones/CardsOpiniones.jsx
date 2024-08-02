import { OpinionesContainer, OpininonesWrapper } from "./opinionesStyle";
import Opiniones from './CardOpinion';
import { useSelector, useDispatch } from 'react-redux';
import { randomOpinion } from '../../redux/opininones/opinionesSlice'; 
import styled from "styled-components";

function OpinionesCompra() {
  const { opiniones } = useSelector((state) => state.opiniones);
  const dispatch = useDispatch();

  const handleReloadOpinions = () => {
    dispatch(randomOpinion());
  };

  return (
    <OpininonesWrapper>
      <h2>Experiencias de compra: </h2>

      
      <OpinionesContainer>
        {opiniones.map(opinion => (
          <Opiniones key={opinion.id} {...opinion} />
        ))}
      </OpinionesContainer>

      <BotonRecargar className='BotonRecargar' onClick={handleReloadOpinions}>Más opiniones</BotonRecargar>
      
    </OpininonesWrapper>
  );
}

export default OpinionesCompra;

export const BotonRecargar = styled.button`
  
  padding: 10px 20px;
  background-color: var( --btn-Background);

  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  margin: 0 auto;
  max-width: 12rem;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 3rem;
  font-family: var(--font-family);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

`
