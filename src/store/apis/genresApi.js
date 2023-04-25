import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "?key=61c5af83b1654b988e762e682eadd633";
/*
https://api.rawg.io/api/games?key=61c5af83b1654b988e762e682eadd633

*/
const genresApi = createApi({
    reducerPath: "genres",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.rawg.io/api/genres",
    }),
    endpoints: (builder) => {
        return {
            fetchGenres: builder.query({
                query: () => {
                    return {
                        url: "",
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

export { genresApi };
export const { useFetchGenresQuery } = genresApi;
