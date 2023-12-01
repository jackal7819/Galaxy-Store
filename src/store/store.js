import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    }
})