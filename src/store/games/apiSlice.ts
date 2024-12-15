// src/store/games/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.rawg.io/api',
  }),
  endpoints: (builder) => ({
    fetchGames: builder.query({
      query: ({ page = 1, page_size = 10 }) =>
        `/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page=${page}&page_size=${page_size}`,
    }),
    fetchGameDetails: builder.query({
      query: (id) => `/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
    }),
  }),
});

export const { useFetchGamesQuery, useFetchGameDetailsQuery } = gamesApi;
