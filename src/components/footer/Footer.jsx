// import {
//   FooterContainerStyles,
//   PagosContainerStyles

// } from './FooterStyles.js' 
// import LogoCrud from '../../data/imgProducts/Ap-icon.png';


// function footer() {
//   return (
//     <FooterContainerStyles>
//       <div>
//         <img src={LogoCrud} alt="Logo Finish" />
//       </div>

//       <h2>CRUD | shoes</h2>

//       <div>
        
//         <p>Todos los derechos reservados ®</p>

//       </div>
//       <PagosContainerStyles>
//         <p>Medios de pago</p>

//         <div>

//           <img src="https://img.icons8.com/color/48/000000/visa.png"/>
//           <img src="https://img.icons8.com/color/48/000000/mastercard.png"/>
//           <img src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>
//           <img src="https://img.icons8.com/color/48/000000/paypal.png"/>
//         </div>

//       </PagosContainerStyles>

//     </FooterContainerStyles>
//   )
// }

// export default footer

import { FooterContainerStyles, PagosContainerStyles } from './FooterStyles.js';
import LogoCrud from '../../data/imgProducts/Ap-icon.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterContainerStyles>
      <div>
        <img src={LogoCrud} alt="Logo Finish" />
        <h2>CRUD | shoes</h2>
      </div>
      <div>
        <p onClick={() => navigate('/products')} style={{ cursor: 'pointer', color: 'white' }}>Productos</p>
        <p onClick={() => navigate('/contact')} style={{ cursor: 'pointer', color: 'white' }}>Contacto</p>
        <p onClick={() => navigate('/orders')} style={{ cursor: 'pointer', color: 'white' }}>Mis órdenes</p>
      </div>
      

      <PagosContainerStyles>
        <p>Medios de pago</p>
        <div>
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
          <img src="https://img.icons8.com/color/48/000000/mercado-pago.png" alt="Mercado Pago" />
          <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
        </div>
      </PagosContainerStyles>

    </FooterContainerStyles>
  );
}

export default Footer;
