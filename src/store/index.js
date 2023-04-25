import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";

import { gamesApi } from "./apis/gamesApi";
import { genresApi } from "./apis/genresApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(gamesApi.middleware).concat(genresApi.middleware);
    },
});

setupListeners(store.dispatch);

export { store };
export { useFetchGamesQuery  } from "./apis/gamesApi";
export { useFetchGenresQuery  } from "./apis/genresApi";
