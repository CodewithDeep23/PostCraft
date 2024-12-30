import { configureStore } from '@reduxjs/toolkit'
import storeReducer from "./authSlice"

export const store = configureStore({
    reducer: storeReducer
})