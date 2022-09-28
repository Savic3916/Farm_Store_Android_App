import { configureStore } from "@reduxjs/toolkit";
import fruitsReducer from "./fruits";

export const store = configureStore({
    reducer: {
        fruitObject: fruitsReducer,
    },
})