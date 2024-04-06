import { createSlice } from '@reduxjs/toolkit';  

import { categorias } from '../../data/categorias.js'; //traigo las categorías de data


const INITIAL_STATE = {
    categories: categorias, // guardo las categorías como estado inicial en el store
    selectedCategory: null, // ahora necesito un nuevo estado, la categoría seleccionada

};

const categoriesSlice = createSlice({
    name: "Categories",
    initialState: INITIAL_STATE,
    reducers: { 
        selectCategory: (state, action) => {
            return {
                ...state,  // tenemos que poner spread para no reemplazar el estado
                selectedCategory: action.payload !== state.selectedCategory  ? action.payload : null,//trae todo el estado,la categoría seleccionada y la carga del componente para trabajar en el estado. Si la categoría es diferente a la seleccionada, la selecciona, reemplazamos el null del estado original. 
            };
        },
        categories: (state) => { //simplemente devuelve el estado
        return state
    }

    }
});

export const { categories, selectCategory } = categoriesSlice.actions; // las dos funciones para hacer las acciones de los estados. 

export default categoriesSlice.reducer