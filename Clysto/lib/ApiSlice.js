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
        query:()=>"product/food",
      }),
      fetchPopluerProducts: builder.query({
          query:()=>"product/popular",
      })
  }),
});

export const {
  useFetchSummerProductsQuery,
  useFetchFlashProductsQuery,
  useFetchFoodProductsQuery,
  useFetchPopluerProductsQuery,
} = apiSlice;


