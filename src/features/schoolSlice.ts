import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";



export interface SchoolState {
    school_name: string | null;
    school_dise: string | null;
    school_grade: string | null;
    school_address: string | null;
    school_email: string | null;
    school_mobile: string | null;
    school_img_url: string | null;
}

const initialSchoolState: SchoolState = {
    school_name:  null,
    school_dise: null,
    school_grade: null,
    school_address: null,
    school_email: null,
    school_mobile: null,
    school_img_url: null
}

export const schoolSlice = createSlice({
    name: "school",
    initialState: initialSchoolState,
    reducers:{
        setSchool: (state, action: PayloadAction<SchoolState>) =>{
            // console.log("schSlice: name:", action.payload.school_name);

            state.school_name = action.payload.school_name;
            state.school_dise = action.payload.school_dise;
            state.school_grade = action.payload.school_grade;
            state.school_address = action.payload.school_address;
            state.school_email = action.payload.school_email;
            state.school_mobile = action.payload.school_mobile;
            state.school_img_url = action.payload.school_img_url;

        }
    }
});



// create a selecter to select the state
export const selectSchool = (state: RootState) => state.school;//??

// export our actions as well
export const { setSchool } = schoolSlice.actions;

// default export authSlice as reducer, slice nothing but set of reducer
// reducers are the functions, that make some task i.e. make change in state
export default schoolSlice.reducer;


