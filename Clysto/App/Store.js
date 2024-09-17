import { configureStore } from "@reduxjs/toolkit";
import LayoutThem from './../Fetuare/Them';


const stor = configureStore({
    reducer: {
      Thims:LayoutThem,
  }
});

export default stor;