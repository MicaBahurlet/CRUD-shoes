import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  checkoutInitialValues,
} from "../../formik/initialValues";

import { checkoutValidationSchema } from "../../formik/validationSchema";

import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import Submit from "../../components/UI/Submit/Submit";

import { createOrder } from "../../axios/axios-orders";
import { clearCart } from "../../redux/cart/cartSlice";
import { CheckoutDatosStyled, Form, Formik } from "./checkoutFormStyles";

const CheckoutForm = ({ cartItems, price, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const orderData = {
            items: cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values },
          };
          try {
            await createOrder(orderData, dispatch, currentUser);
            navigate("/Finish");
            dispatch(clearCart());
          } catch (error) {
            alert("Error al crear la orden");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              name="name"
              htmlFor="nombre"
              type="text"
              id="nombre"
              placeholder="Tu nombre"
            >
              Nombre
            </Input>
            <Input
              name="cellphone"
              htmlFor="celular"
              type="text"
              id="celular"
              placeholder="Tu celular"
            >
              Celular
            </Input>
            <Input
              name="location"
              htmlFor="localidad"
              type="text"
              id="localidad"
              placeholder="Tu localidad"
            >
              Localidad
            </Input>
            <Input
              name="address"
              htmlFor="direccion"
              type="text"
              id="dirección"
              placeholder="Tu dirección"
            >
              Dirección
            </Input>
            <div>
              <Submit 
                disabled={!cartItems.length} type="submit">
                {isSubmitting ? <Loader /> : "Iniciar Pedido"}

              </Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;


