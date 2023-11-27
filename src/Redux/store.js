import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import imageReducer from "./Image/Image"

const store=configureStore({
    reducer:{
        image:imageReducer,
        
    }
})

export default store;
