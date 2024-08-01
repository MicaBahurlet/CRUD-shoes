
// import { CardProducto } from "./CardsProductosStyles"
// import { BotonBuy } from "../recomendados/recomendados";

// import { useDispatch, useSelector } from "react-redux";
// import { addToCart} from "../../redux/cart/cartSlice";

// function Productos ( {img,title,category,price,desc,id}) {

//   const dispatch = useDispatch();
  

//   return (
//     <CardProducto>
//         <img src={img} alt={category} />
//         <h3>{title}</h3>
//         <p>{desc}</p>
//         <p>${price}</p>
//         <BotonBuy onClick={() => dispatch(addToCart({id, img, title, category, price, desc}))}>Comprar</BotonBuy>
//     </CardProducto>
//   )
// }

// export default Productos


import { CardProducto } from "./CardsProductosStyles";
import { BotonBuy } from "../recomendados/recomendados";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

function Productos({ img, title, category, price, desc, id }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleAddToCart = () => {
    if (currentUser) {
      dispatch(addToCart({ id, img, title, category, price, desc }));
    } else {
      alert("Debes iniciar sesión para agregar productos al carrito");
    }
  };

  return (
    <CardProducto>
      <img src={img} alt={category} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>${price}</p>
      <BotonBuy disabled={!currentUser} onClick={handleAddToCart}>
        Comprar
      </BotonBuy>
    </CardProducto>
  );
}

export default Productos;
