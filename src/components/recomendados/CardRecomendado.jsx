import {  CardRecomendados,
  infoCart,
  Boton, 

} from "./recomendados"


function Recomendados( {img,title,category, desc, price}) {


  return (
    <CardRecomendados>
    <img src={img} alt={category} />
    <infoCart >
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>${price}</p>
      <Boton>Comprar</Boton>
      
    </infoCart>
    
    
   
  </CardRecomendados>
);
}

export default Recomendados


