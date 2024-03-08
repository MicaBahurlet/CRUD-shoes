import { categorias } from '../../data/categorias.js'; //traigo las categorías de data
import { createSlice } from '@reduxjs/toolkit';  

const INITIAL_STATE = {
    categories: categorias  // guardo las categorías como estado inicial en el store
};

const categoriesSlice = createSlice({
    name: "Categories",
    initialState: INITIAL_STATE,
    reducers: { getCategories: (state) => {
        return state
    }

    }
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer

