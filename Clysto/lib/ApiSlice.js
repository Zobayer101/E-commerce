import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3300/route/api/" }),
  endpoints: (builder) => ({
    fetchSummerProducts: builder.query({
      query: () => "product/summer",
    }),
    fetchFlashProducts: builder.query({
      query: () => `product/flash`,
    }),
    fetchFoodProducts: builder.query({
      query: () => "product/food",
    }),
    fetchPopluerProducts: builder.query({
      query: () => "product/popular",
    }),
    fetchCleaningProducts: builder.query({
      query: () => "product/cleaning",
    }),
    fetchPersonalProducts: builder.query({
      query: () => "product/personal",
    }),
    fetchHealthProducts: builder.query({
      query: () => "product/health",
    }),
    fetchBabyProducts: builder.query({
      query: () => "product/baby",
    }),
    fetchKitchenProducts: builder.query({
      query: () => "product/kitchen",
    }),
    fetchStationeryProducts: builder.query({
      query: () => "product/stationery",
    }),
    fetchPetProducts: builder.query({
      query: () => "product/pet",
    }),
    fetchToysProducts: builder.query({
      query: () => "product/toys",
    }),
    fetchBeautyProducts: builder.query({
      query: () => "product/beauty",
    }),
    fetchFashionProducts: builder.query({
      query: () => "product/fashion",
    }),
    fetchVehicleProducts: builder.query({
      query: () => "product/vehicle",
    }),
  }),
});

export const {
  useFetchSummerProductsQuery,
  useFetchFlashProductsQuery,
  useFetchFoodProductsQuery,
  useFetchPopluerProductsQuery,
  useFetchCleaningProductsQuery,
  useFetchPersonalProductsQuery,
  useFetchHealthProductsQuery,
  useFetchBabyProductsQuery,
  useFetchKitchenProductsQuery,
  useFetchStationeryProductsQuery,
  useFetchPetProductsQuery,
  useFetchToysProductsQuery,
  useFetchBeautyProductsQuery,
  useFetchFashionProductsQuery,
  useFetchVehicleProductsQuery,
} = apiSlice;
