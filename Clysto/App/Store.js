import { configureStore } from "@reduxjs/toolkit";
import Layoutbar from "./../Fetuare/Them";
import BigBag from "../Fetuare/Bag";
import ProductSlice from "../Fetuare/Product";
import { apiSlice } from "../lib/ApiSlice";
import ApiController from "../Fetuare/ApiController";


const stor = configureStore({
  reducer: {
    Bar: Layoutbar,
    bigBag: BigBag,
    product: ProductSlice,
    apiCon:ApiController,
    [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  
});

export default stor;
