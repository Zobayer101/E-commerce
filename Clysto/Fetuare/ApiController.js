import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summer: true,
  flash: true,
  food: true,
  popular: true,
  cleaning: true,
  personal: true,
  health: true,
  baby: true,
  kitchen: true,
  stationery: true,
  pet: true,
  toys: true,
  beauty: true,
  fashion: true,
  vehicle: true,
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
    CleaningControll: (state, action) => {
      state.cleaning = action.payload;
    },
    PersonalControll: (state, action) => {
      state.personal = action.payload;
    },
    HealthControll: (state, action) => {
      state.health = action.payload;
    },
    BabyControll: (state, action) => {
      state.baby = action.payload;
    },
    KitchenControll: (state, action) => {
      state.kitchen = action.payload;
    },
    StationeryControll: (state, action) => {
      state.stationery = action.payload;
    },
    PetControll: (state, action) => {
      state.pet = action.payload;
    },
    ToyesControll: (state, action) => {
      state.toys = action.payload;
    },
    BeautyControll: (state, action) => {
      state.beauty = action.payload;
    },
    FashionControll: (state, action) => {
      state.beauty = action.payload;
    },
    VehicleControll: (state, action) => {
      state.vehicle = action.payload;
    },
  },
});

export default ApiController.reducer;
export const {
  SummerControll,
  FlashControll,
  FoodControll,
  PopularControll,
  CleaningControll,
  PersonalControll,
  HealthControll,
  PetControll,
  BabyControll,
  BeautyControll,
  KitchenControll,
  StationeryControll,
  ToyesControll,
  FashionControll,
  VehicleControll,
} = ApiController.actions;
