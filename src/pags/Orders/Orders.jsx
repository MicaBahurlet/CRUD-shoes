import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/axios-orders';
import { productos } from '../../data/productos'; 

import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

import {
    OrderContainer,
    Order
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
        <h1>Mis pedidos:</h1>
          {orders && orders.length > 0 ? (
              <ul>
                
                  {orders.map((order) => (
                    <Order>
                      <li key={order._id}>
                      <h2>N° de orden: {order._id}</h2>
                      <h4>Total con envío incluido: ${order.total}</h4>
                      <h4>Envío: ${order.shippingCost}</h4>
                      <h4>Fecha de compra: {new Date(order.createdAt).toLocaleDateString()}</h4>
                      <ul>
                          {order.items.map((item) => {
                          const product = productos.find(p => p.id === item.id); 
                          return (
                              <li key={item.id}>
                                  <p>Producto: {product.title}</p>
                                  <p>Cantidad: {item.quantity}</p>
                                  <p>Precio unidad: ${item.price}</p>
                              </li>
                          );
                          })}
                      </ul>
                      </li>
                    </Order>
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
