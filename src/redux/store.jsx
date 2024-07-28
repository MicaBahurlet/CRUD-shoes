import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";


import categoriesReducer from "./categories/categoriesSlice.js";  
import productsReducer from "./products/productsSlice.js";
import recommendedReducer from "./recomended/recomendedSlice.js";
import opinionesReducer from "./opininones/opinionesSlice.js";
import userReducer from "./user/userSlice.js";
import ordersReducer from "./orders/ordersSlice.js";


import cartReducer from "./cart/cartSlice.js"; 


const reducers = combineReducers({ //crea un objeto con todos los reducers que yo quiera
    categories: categoriesReducer,
    products: productsReducer, 
    recommended: recommendedReducer,
    cart : cartReducer,
    orders: ordersReducer, 
    user: userReducer, 
    opiniones: opinionesReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"], // array sólo con cart y user logueados, que es lo que quiero persistir 
};

const persistedReducer = persistReducer(persistConfig, reducers); // recibe la configuracion y los reducers

// acá había un problema con el persistor, hay que desactivar para los datos seriables. 
export const store = configureStore({ 
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const persistor = persistStore(store); // para que todo se almacene en el storage    


