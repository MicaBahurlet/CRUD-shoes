import { CardOpiniones, InfoCard} from "./opinionesStyle";



function Opiniones({ img, name, desc, Punt }) {
  return (
    <CardOpiniones>
      <img src={img} alt="imagen" /> 
      <InfoCard>
        <h3>{name}</h3>
        <p><i>"{desc}"</i></p>
        <img src= {Punt} alt="Puntuación" />
      </InfoCard>
    </CardOpiniones>
  );
}

export default Opiniones;
