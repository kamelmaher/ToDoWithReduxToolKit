import { configureStore } from "@reduxjs/toolkit";
import Noteslice from "./ToDoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const Store = configureStore({
    reducer: {
        ToDo: Noteslice
    }
})

export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof Store.getState>> = useSelector;