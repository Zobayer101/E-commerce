import { configureStore } from "@reduxjs/toolkit";
import Layoutbar from './../Fetuare/Them';


const stor = configureStore({
    reducer: {
      Bar:Layoutbar,
  }
});

export default stor;