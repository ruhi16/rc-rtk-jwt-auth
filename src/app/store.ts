import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import authReducer from "../features/authSlice";
import sessionReducer from "../features/sessionSlice";
import schoolReducer from "../features/schoolSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        session: sessionReducer,
        school: schoolReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([authApi.middleware]),



});
// console.log("store:", store);
setupListeners(store.dispatch);



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


