import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summer: true,
  flash: true,
  food: true,
  popular: true,
};
const ApiController = createSlice({
  name: "apiCon",
  initialState,
  reducers: {
    SummerControll: (state, action) => {
      state.summer = action.payload;
    },
    FlashControll: (state, action) => {
      state.flash = action.payload;
    },
    FoodControll: (state, action) => {
      state.food = action.payload;
    },
    PopularControll: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export default ApiController.reducer;
export const { SummerControll, FlashControll, FoodControll, PopularControll } =
  ApiController.actions;
