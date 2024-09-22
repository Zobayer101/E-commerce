import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  bar: true,
  bag:false,
};

const Layoutbar = createSlice({
    name: "Bar",
    initialState,
    reducers:{
        barMode: (state) => {
            state.bar = !state.bar;
      },
      openBag: (state) => {
        state.bag = !state.bag;
      }
    }
});

export default Layoutbar.reducer;
export const {barMode ,openBag} = Layoutbar.actions;