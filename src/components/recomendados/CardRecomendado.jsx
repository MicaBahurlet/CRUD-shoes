import {  CardRecomendados,
  infoCart,
  BotonBuy

} from "./recomendados"


function Recomendados( {img,title,category, desc, price}) {


  return (
    <CardRecomendados>
    <img src={img} alt={category} />
    <infoCart >
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>${price}</p>
       <BotonBuy>Comprar</BotonBuy> 
      
    </infoCart>
    
    
   
  </CardRecomendados>
);
}

export default Recomendados


