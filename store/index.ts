import { configureStore } from "@reduxjs/toolkit";
import { sectionSlice } from "./slices/sections.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        [sectionSlice.name]: sectionSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector