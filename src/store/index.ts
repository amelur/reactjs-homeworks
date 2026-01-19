import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import mealsReducer from "./mealsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        meals: mealsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch