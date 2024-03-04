import {  CardRecomendados } from "./recomendados"

function Recomendados( {img,title,category, desc, price}) {


  return (
    <CardRecomendados>
    <img src={img} alt={category} />
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>${price}</p>
    </div>
   
  </CardRecomendados>
);
}

export default Recomendados
