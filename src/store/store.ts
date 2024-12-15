import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "@/store/games/apiSlice";
import { storesApi } from "@/store/stores/apiSlice";
import { leaderboardApi } from "@/store/leaderboard/apiSlice";

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    [storesApi.reducerPath]: storesApi.reducer,
    [leaderboardApi.reducerPath]: leaderboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      gamesApi.middleware,
      storesApi.middleware,
      leaderboardApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
