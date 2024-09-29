import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  Summer: [
    {
      id: "0",
      counter: "",
      text: "Guava Premium (50 gm)",
      price: "50",
      TotalPrice: "",
      exPrice: "৳70",
      quantity: "1 kg",
      Image: "../src/img/guava-premium-50-gm-1-kg.webp",
    },
    {
      id: "1",
      counter: "",
      text: "RC Q Lemon Pet",
      price: "25",
      TotalPrice: "",
      exPrice: "",
      quantity: "250 ml",
      Image: "../src/Product/rc-q-lemon-pet-250-ml.webp",
    },
    {
      id: "2",
      counter: "",
      text: "Mojo Soft Drink",
      price: "100",
      TotalPrice: "",
      exPrice: "",
      quantity: "2 L",
      Image: "../src/Product/mojo-soft-drink-2-ltr.webp",
    },
    {
      id: "3",
      counter: "",
      text: "Daab (Green Coconut)",
      price: "139",
      TotalPrice: "",
      exPrice: "৳149",
      quantity: "each",
      Image: "../src/Product/daab-green-coconut-1-pcs.webp",
    },
    {
      id: "4",
      counter: "",
      text: "Kagozi Lebu (Kagozi Lemon)",
      price: "35",
      TotalPrice: "",
      exPrice: "৳40",
      quantity: "4 pcs",
      Image: "../src/Product/kagozi-lebu-kagozi-lemon-4-pcs.webp",
    },
    {
      id: "5",
      counter: "",
      text: "Whole Hilsha Fish (Asto llish)",
      price: "979",
      TotalPrice: "",
      exPrice: "৳1050",
      quantity: "700 gm",
      Image: "../src/Product/whole-hilsha-fish-asto-ilish-50-gm-700-gm.webp",
    },
  ],
};

const SummerSlice = createSlice({
    name: "sumer",
    initialState,
    reducers: {
        FromAPI: (state, action) => {
            state.Summer.push(action.payload);
        },
        UpdateSummer: (state, action) => {
            const { id,counter } = action.payload;
          const Index = state.Summer.findIndex((data) => data.id === id);
            if (Index !== -1) {
                state.Summer[Index].counter = counter;
            }
        }

    }
})
export default SummerSlice.reducer;
export const {FromAPI,UpdateSummer}=SummerSlice.actions