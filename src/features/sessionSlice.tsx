import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


export interface SessionState {
    session_name: string | null;
    session_st_date: string | null;
    session_en_date: string | null;
}

const initialSessionState: SessionState = {
    session_name: null,
    session_st_date: null,
    session_en_date: null
}


export const sessionSlice = createSlice({
    name: "session",
    initialState: initialSessionState,
    reducers: {
        setSession:(state, action: PayloadAction<SessionState>) => {
            state.session_name = action.payload.session_name;
            state.session_st_date = action.payload.session_st_date;
            state.session_en_date = action.payload.session_en_date;
        }
    }
});

// create a selecter to select the state
export const selectSession = (state: RootState) => state.session;//??

// export our actions as well
export const { setSession } = sessionSlice.actions;

// default export authSlice as reducer, slice nothing but set of reducer
// reducers are the functions, that make some task i.e. make change in state
export default sessionSlice.reducer;





