import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "?key=61c5af83b1654b988e762e682eadd633";
/*
https://api.rawg.io/api/games?key=61c5af83b1654b988e762e682eadd633

*/
const gamesApi = createApi({
    reducerPath: "games",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.rawg.io/api/games",
    }),
    endpoints: (builder) => {
        return {
            fetchGames: builder.query({
                query: (genres) => {
                    return {
                        url: "",
                        params: {
                            genres:genres,
                            key: "61c5af83b1654b988e762e682eadd633",
                        },
                        method: "GET",
                    };
                },
            }),
        };
    },
});

export { gamesApi };
export const { useFetchGamesQuery } = gamesApi;
