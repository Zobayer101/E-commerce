import { configureStore } from "@reduxjs/toolkit";
import Layoutbar from "./../Fetuare/Them";
import BigBag from "../Fetuare/Bag";

const stor = configureStore({
  reducer: {
    Bar: Layoutbar,
    bigBag: BigBag,
  },
});

export default stor;
