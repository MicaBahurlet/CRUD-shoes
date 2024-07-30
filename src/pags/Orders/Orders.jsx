import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/axios-orders';
import { productos } from '../../data/productos'; 

import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

import {
    OrderContainer
} from './OrderStyle';

const Orders = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (currentUser) {
      getOrders(dispatch, currentUser);
    }
  }, [dispatch, currentUser]);

  if (loading) return <p>cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />

      <OrderContainer>
        <h1>Tus ordenes:</h1>
        {orders && orders.length > 0 ? (
            <ul>
            {orders.map((order) => (
                <li key={order._id}>
                <h2>N° de orden: {order._id}</h2>
                <p>Total: ${order.total}</p>
                <p>Envío total: ${order.shippingCost}</p>
                <ul>
                    {order.items.map((item) => {
                    const product = productos.find(p => p.id === item.id); 
                    return (
                        <li key={item.id}>
                            <p>{product.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio unidad: ${item.price}</p>
                        </li>
                    );
                    })}
                </ul>
                </li>
            ))}
            </ul>
        ) : (
            <p>Aún no has comprado nada</p> //boton que mande a productos
        )}
      </OrderContainer>

      <Footer />
    </div>
  );
};

export default Orders;
