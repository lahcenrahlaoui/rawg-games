import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "?key=61c5af83b1654b988e762e682eadd633";
/*
https://api.rawg.io/api/games?key=61c5af83b1654b988e762e682eadd633

*/
const gameOneApi = createApi({
    reducerPath: "gameOne",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.rawg.io/api/games",
    }),
    endpoints: (builder) => {
        return {
            fetchOneGame: builder.query({
                query: (id) => {
                    return {
                        url: `/${id}`,
                        params: {
                            key: "61c5af83b1654b988e762e682eadd633",
                        },
                        method: "GET",
                    };
                },
            }),
        };
    },
});

export { gameOneApi };
export const { useFetchOneGameQuery } = gameOneApi;
