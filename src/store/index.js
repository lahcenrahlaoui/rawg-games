import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { gamesApi } from "./apis/gamesApi";
import { gameOneApi } from "./apis/gameOneApi";
import { genresApi } from "./apis/genresApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";



const store = configureStore({
    reducer: {

        [gamesApi.reducerPath]: gamesApi.reducer,
        [gameOneApi.reducerPath]: gameOneApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(gamesApi.middleware)
            .concat(genresApi.middleware)
            .concat(gameOneApi.middleware)
    },
});

setupListeners(store.dispatch);

export { store };
export { useFetchGamesQuery } from "./apis/gamesApi";
export { useFetchOneGameQuery } from "./apis/gameOneApi";
export { useFetchGenresQuery } from "./apis/genresApi";


