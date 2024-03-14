import { createSlice } from '@reduxjs/toolkit';
import { opiniones } from '../../data/Opiniones';

const INITIAL_STATE = {
    opiniones: Array(3).fill(0).map(() => {
        return opiniones[Math.floor(Math.random() * opiniones.length)];
    })
};


// export const opinionesSlice = createSlice({
//     name: "opiniones",
//     initialState: INITIAL_STATE,
//     reducers: {
//         randomOpinion: state => {
//             return state;
//         },
//     },
// });

export const opinionesSlice = createSlice({
    name: "opiniones",
    initialState: INITIAL_STATE,
    reducers: {
        randomOpinion: state => {
            const uniqueOpinions = [];
            const opinionIds = new Set();
        
            while (uniqueOpinions.length < 3) {
                const randomOpinion = opiniones[Math.floor(Math.random() * opiniones.length)];
                if (!opinionIds.has(randomOpinion.id)) {
                    uniqueOpinions.push(randomOpinion);
                    opinionIds.add(randomOpinion.id);
                }
            }
        
            return { ...state, opiniones: uniqueOpinions };
        },
        
    },
});

export const { randomOpinion } = opinionesSlice.actions;

export default opinionesSlice.reducer;
