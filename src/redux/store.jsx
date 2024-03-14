import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";

import categoriesReducer from "./categories/categoriesSlice.js";  
import productsReducer from "./products/productsSlice.js";
import recommendedReducer from "./recomended/recomendedSlice.js";
import opinionesReducer from "./opininones/opinionesSlice.js";

import cartReducer from "./cart/cartSlice.js"; 


const reducers = combineReducers({ //crea un objeto con todos los reducers que yo quiera
    categories: categoriesReducer,
    products: productsReducer, 
    recommended: recommendedReducer,
    cart : cartReducer,
    opiniones: opinionesReducer,
    
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], // array sólo con cart, que es lo que quiero persistir // todo aquello que quiero incluir en el storage.
};

const persistedReducer = persistReducer(persistConfig, reducers); // recibe la configuracion y los reducers

export const store = configureStore({ // acá había un problema con el persistor, hay que desactivar para los datos seriables. 
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const persistor = persistStore(store); // para que todo se almacene en el storage    


