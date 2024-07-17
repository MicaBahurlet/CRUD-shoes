import { useSelector } from "react-redux";

import CheckoutForm from "../../components/checkout/checkoutForm";
import ProductsCheckout from "../../components/checkout/Products/ProductsCheckout";
import { ContainerCheckoutStyled } from "../Checkout/CheckoutStyles";

import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <div>
      <Navbar />
      <ContainerCheckoutStyled>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
      </ContainerCheckoutStyled>

      <Footer />
    </div>
  );
};

export default Checkout;
