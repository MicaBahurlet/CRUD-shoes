import {  CardRecomendados,
  InfoCard,
  BotonBuy

} from "./recomendados"


function Recomendados( {img,title,category, desc, price}) {


  return (
    <CardRecomendados>
    <img src={img} alt={category} />
    <InfoCard >
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>${price}</p>
       <BotonBuy>Comprar</BotonBuy> 
      
    </InfoCard>
    
    
   
  </CardRecomendados>
);
}

export default Recomendados


