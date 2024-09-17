import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  them: false,
};

const LayoutThem = createSlice({
    name: "Them",
    initialState,
    reducers:{
        ThemMode: (state) => {
            state.them = !state.them;
       } 
    }
});

export default LayoutThem.reducer;
export const {ThemMode } = LayoutThem.actions;