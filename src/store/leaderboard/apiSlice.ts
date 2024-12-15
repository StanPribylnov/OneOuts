import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const leaderboardApi = createApi({
  reducerPath: "leaderboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
  }),
  endpoints: (builder) => ({
    fetchLeaderboard: builder.query({
      query: ({ page = 1, page_size = 10 }) =>
        `/creators?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page=${page}&page_size=${page_size}`,
    }),
    fetchCreatorDetails: builder.query({
      query: (id) => `creators/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
    }),
  }),
});

export const { useFetchLeaderboardQuery, useFetchCreatorDetailsQuery } = leaderboardApi;
