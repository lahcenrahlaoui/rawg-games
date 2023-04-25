import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";

import { gamesApi } from "./apis/gamesApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(gamesApi.middleware);
    },
});

setupListeners(store.dispatch);

export { store };
export { useFetchGamesQuery } from "./apis/gamesApi";
