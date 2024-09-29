import { configureStore } from "@reduxjs/toolkit";
import Layoutbar from "./../Fetuare/Them";
import BigBag from "../Fetuare/Bag";
import SummerSlice from './../Fetuare/Summer';


const stor = configureStore({
  reducer: {
    Bar: Layoutbar,
    bigBag: BigBag,
    sumer: SummerSlice,
  },
});

export default stor;
