export const SHIPPING_COST = 7500; // Costo de envio por defecto
export const INITIAL_LIMIT = 8; // Cantidad inicial de productos por defecto
export const BASE_URL = "https://crud-shoes.vercel.app/";

export const formatPrice = price => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(price);
  };
  