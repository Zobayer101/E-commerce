import { configureStore } from "@reduxjs/toolkit";
import Layoutbar from "./../Fetuare/Them";
import BigBag from "../Fetuare/Bag";
import ProductSlice from "../Fetuare/Product";


const stor = configureStore({
  reducer: {
    Bar: Layoutbar,
    bigBag: BigBag,
    product: ProductSlice,
  },
});

export default stor;
