export const SHIPPING_COST = 7500; // Costo de envio por defecto
export const INITIAL_LIMIT = 8; // Cantidad inicial de productos por defecto
export const BASE_URL = "http://back-crud.vercel.app"; // URL anterior "http://localhost:6060"

export const ADMIN = 'admninRole';
export const USER = 'userRole';



export const formatPrice = price => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(price);
  };
  