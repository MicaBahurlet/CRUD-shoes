import { CardRecomendados, InfoCard} from "./opinionesStyle";



function Opiniones({ img, name, desc, Punt }) {
  return (
    <CardRecomendados>
      <img src={img} alt="imagen" /> 
      <InfoCard>
        <h3>{name}</h3>
        <p><i>"{desc}"</i></p>
        <img src= {Punt} alt="Puntuación" />
      </InfoCard>
    </CardRecomendados>
  );
}

export default Opiniones;
