
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/axios-orders';
import { productos } from '../../data/productos'; 
import { useNavigate } from 'react-router-dom'; 

import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

import {
    MainContainer,
    OrderContainer,
    Order,
    NoOrdersMessage,
    ButtonLink
} from './OrderStyle';

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { currentUser } = useSelector((state) => state.user);
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (currentUser) {
      getOrders(dispatch, currentUser);
    }
  }, [dispatch, currentUser]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  // Ordenar las órdenes por fecha (más recientes primero)
  const sortedOrders = orders?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <MainContainer>
      <Navbar />

      <OrderContainer>
        <h1>Mis pedidos:</h1>
          {sortedOrders && sortedOrders.length > 0 ? (
              <ul>
                  {sortedOrders.map((order) => (
                    <Order key={order._id}>
                      <li>
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
              <NoOrdersMessage>
                  <p>Aún no has comprado nada o bien no has iniciado sesión.</p>
                  <ButtonLink onClick={() => navigate('/products')}>Ir a productos</ButtonLink>
                  <ButtonLink onClick={() => navigate('/login')}>Iniciar sesión</ButtonLink>
              </NoOrdersMessage>
          )}
      </OrderContainer>

      <Footer />
    </MainContainer>
  );
};

export default Orders;
