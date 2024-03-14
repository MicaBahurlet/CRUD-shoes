import { CardRecomendados, InfoCard } from "./opinionesStyle";

function Opiniones({ img, title, desc }) {
  return (
    <CardRecomendados>
      <img src={img} alt="imagen" /> {/* Usar img o remover si no es necesario */}
      <InfoCard>
        <h3>{title}</h3>
        <p>{desc}</p>
      </InfoCard>
    </CardRecomendados>
  );
}

export default Opiniones;
