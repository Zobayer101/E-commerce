import { configureStore } from "@reduxjs/toolkit";
import Layoutbar from "./../Fetuare/Them";
import BigBag from "../Fetuare/Bag";
import stateCounter from './../Fetuare/Counter';

const stor = configureStore({
  reducer: {
    Bar: Layoutbar,
    bigBag: BigBag,
    count:stateCounter,
  },
});

export default stor;
