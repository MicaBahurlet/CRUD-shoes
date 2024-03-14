import {
    addItemToCart,
    removeItemFromCart,
    resetShippingCost,
   
}  from "./cart-utils";

import {SHIPPING_COST} from "../../utils/constantes.js";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true
};


const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
            addToCart: (state, action) => {

                return{
                    ... state,
                    cartItems: addItemToCart(state.cartItems, action.payload),
                    shippingCost: SHIPPING_COST

                };

            }, 
            removeFromCart: (state, action) => {

                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload), // la info de qué clickeo
                    shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
                };
            },
            clearCart: (state) => {
                return {
                    ...state,
                    cartItems: [],
                    shippingCost: 0
                };
            },
            toggleHiddenCart: (state) => {
                return {
                    ...state,
                    hidden: !state.hidden
                };
            },

            finalizePurchase: (state) => {
                return {
                    ...state,
                    hidden: !state.hidden,
                    cartItems: [],
                    shippingCost: 0,
                    

                }
            }



        }

        // const finalizePurchase = () => (dispatch) => {
        //     dispatch(clearCart());
        

        //     alert("¡Gracias por tu compra! Esperamos que disfrutes tus auris.");
        // };


});

export const {addToCart, removeFromCart, clearCart, toggleHiddenCart, finalizePurchase} = cartSlice.actions;

export default cartSlice.reducer;