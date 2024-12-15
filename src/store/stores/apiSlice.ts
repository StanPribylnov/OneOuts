import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storesApi = createApi({
  reducerPath: "storesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api/",
  }),
  endpoints: (builder) => ({
    fetchStores: builder.query({
      query: () => `stores?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
    }),
    fetchStoreDetails: builder.query({
      query: (id) => `stores/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
    }),
  }),
});

export const { useFetchStoresQuery, useFetchStoreDetailsQuery } = storesApi;
