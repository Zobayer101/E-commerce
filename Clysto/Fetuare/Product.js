import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  ProductData: [
    // {
    //   id: "0",
    //   counter: "",
    //   text: "Guava Premium (50 gm)",
    //   price: "50",
    //   Catagori: "summer",
    //   exPrice: "৳70",
    //   quantity: "1 kg",
    //   Image: "../src/Product/summer/guava-premium-50-gm-1-kg.webp",
    // },
    // {
    //   id: "1",
    //   counter: "",
    //   text: "Sippy Mango Drinks",
    //   price: "249",
    //   Catagori: "summer",
    //   exPrice: "৳ 500",
    //   quantity: "500 gm",
    //   Image: "../src/Product/summer/chaldal-sippy-mango-drinks-500-gm.webp",
    // },
    // {
    //   id: "2",
    //   counter: "",
    //   text: "Mojo Soft Drink",
    //   price: "100",
    //   Catagori: "summer",
    //   exPrice: "",
    //   quantity: "2 L",
    //   Image: "../src/Product/summer/mojo-soft-drink-2-ltr.webp",
    // },
    // {
    //   id: "3",
    //   counter: "",
    //   text: "Daab (Green Coconut)",
    //   price: "139",
    //   Catagori: "summer",
    //   exPrice: "৳149",
    //   quantity: "each",
    //   Image: "../src/Product/summer/daab-green-coconut-1-pcs.webp",
    // },
    // {
    //   id: "4",
    //   counter: "",
    //   text: "Kagozi Lebu (Kagozi Lemon)",
    //   price: "35",
    //   Catagori: "summer",
    //   exPrice: "৳40",
    //   quantity: "4 pcs",
    //   Image: "../src/Product/summer/kagozi-lebu-kagozi-lemon-4-pcs.webp",
    // },
    // {
    //   id: "5",
    //   counter: "",
    //   text: "Sippy Orange Drinks",
    //   price: "249",
    //   Catagori: "summer",
    //   exPrice: "৳500",
    //   quantity: "500 gm",
    //   Image:
    //     "../src/Product/summer/chaldal-sippy-orange-drinks-500-gm.webp",
    // },
    // {
    //   id: "6",
    //   counter: "",
    //   text: "Ambassador Spanish Olive Oil Can",
    //   price: "670",
    //   Catagori: "Food",
    //   exPrice: "",
    //   quantity: "300 ml",
    //   Image:"../src/Product/Food/ambassador-spanish-olive-oil-can-300-ml.webp",
    // },
    // {
    //   id: "7",
    //   counter: "",
    //   text: "Fargo Premium Ghee",
    //   price: "1550",
    //   Catagori: "Food",
    //   exPrice: "",
    //   quantity: "900 gm",
    //   Image:
    //     "../src/Product/Food/fargo-premium-ghee-900-gm.webp",
    // },
    // {
    //   id: "8",
    //   counter: "",
    //   text: "Beef Bone ",
    //   price: "779",
    //   Catagori: "Food",
    //   exPrice: "",
    //   quantity: "1 kg",
    //   Image:
    //     "../src/Product/Food/beef-bone-in-50-gm-1-kg.webp",
    // },
  ],
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        FromAPI: (state, action) => {
            state.ProductData=[...state.ProductData,...action.payload];
        },
        UpdateProduct: (state, action) => {
            const { id,counter } = action.payload;
          const Index = state.ProductData.findIndex((data) => data.id === id);
            if (Index !== -1) {
                state.ProductData[Index].counter = counter;
            }
      },
      NewApiADD: (state, action) => {
        state.ProductData.concat(action.payload);
      },
      clearData: (state) => {
        state.ProductData=[]
      }

    }
})
export default ProductSlice.reducer;
export const { FromAPI, UpdateProduct, NewApiADD ,clearData} = ProductSlice.actions;