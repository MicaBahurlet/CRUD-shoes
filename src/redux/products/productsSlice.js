import {productos, TotalProducts } from "../../data/productos.js"; //traigo los productos y el total de productos que tengo

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    products: productos,
    totalProducts: TotalProducts,
};

export const productsSlice = createSlice({
    name: "Products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state;
        },
    },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;