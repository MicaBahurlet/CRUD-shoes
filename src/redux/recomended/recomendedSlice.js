import { createSlice} from '@reduxjs/toolkit';

import { productos } from '../../data/productos.js';

const INITIAL_STATE = {
    recommended: Array(3)
    .fill (0) // para inicializar el array con 0 
    .reduce ((acc) => { 
        const IDs = acc.map ((value) => value.id); //haga un map de todo lo que levanta el acumulador
        let newRecommended;  //nueva variable para la recomendación
        do {
            newRecommended = {
                ...productos [ Math.floor(Math.random() * productos.length)], // que me busque en el array de productos 3 elementos
            };
        } while (IDs.includes(newRecommended.id));

        return [...acc, newRecommended];


    }, [])
};

 export const recomendedSlice = createSlice({
    name: "recommended",
    initialState: INITIAL_STATE,
    reducers: {
        randomRecommended: state => {
            return state;
        },
    },
});

export const { randomRecommended } = recomendedSlice.actions;

export default recomendedSlice.reducer;