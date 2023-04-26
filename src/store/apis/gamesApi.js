import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/dist/query";
import * as _ from "lodash";

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
                providesTags: (result, error, game) => {
                    const tags = result.results.map((album) => {
                        return { type: "Game", id: album.id };
                    });
                    tags.push({ type: "UsersGame", id: "1" });
                    return tags;
                },

                query: ({ genres, search , page }) => {
                    if(search !== ''){
                        return {
                            url: "",
                            params: {
                                search:search,
                                key: "61c5af83b1654b988e762e682eadd633",
                                page: page,
                            },
                            method: "GET",
                        };
                    }
                    return {
                        url: "",
                        params: {
                            search:search,
                            genres: genres,
                            key: "61c5af83b1654b988e762e682eadd633",
                            page: page,
                        },
                        method: "GET",
                    };
                },

                merge(currentCache, newItems) {
                    console.log("falkdsjf")
                },

                // // Refetch when the page arg changes
                forceRefetch({ currentArg, previousArg }) {
                    return currentArg !== previousArg;
                },


            }),
        };
    },
});

export { gamesApi };
export const { useFetchGamesQuery } = gamesApi;
