import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


// to define Auth Satate
export interface AuthState {
    name: string | null;
    token: string | null;
}

const initialState: AuthState = {
    name: null,
    token: null
}

export const authSlice = createSlice({
    name: "myauth",
    initialState,
    reducers: {        
        setUser: (
            state, 
            action: PayloadAction<{name: string; token: string}>
            ) => {

                localStorage.setItem(
                    "myuser", 
                    JSON.stringify({
                        name: action.payload.name,
                        token: action.payload.token
                    })
                );

                state.name = action.payload.name;
                state.token = action.payload.token;                
        },

        logout: (state) => {
            localStorage.clear();
            state.name = null;
            state.token = null;
        },

    },
});

// create a selecter to select the state
export const selectAuth = (state: RootState) => state.auth;

// export our actions as well
export const { setUser, logout } = authSlice.actions;

// default export authSlice as reducer, slice nothing but set of reducer
// reducers are the functions, that make some task i.e. make change in state
export default authSlice.reducer;


