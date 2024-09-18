import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  bar: true,
};

const Layoutbar = createSlice({
    name: "Bar",
    initialState,
    reducers:{
        barMode: (state) => {
            state.bar = !state.bar;
       } 
    }
});

export default Layoutbar.reducer;
export const {barMode } = Layoutbar.actions;