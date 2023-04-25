import { useFetchGamesQuery } from "../store";

import styled from "styled-components";

import Game from "./Game";
import GameDetails from "./GameDetails";
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

const Games = ({ genres }) => {
    const { data, error, isFetching, isLoading } = useFetchGamesQuery(genres);

    let content;

    const [con, setCon] = useState(null);

    const stop = (time) =>
        new Promise((res) => {
            setTimeout(res, time);
        });

    let gameDetails = undefined;

    const handleOpenGame = async (item) => {
        setCon(null);
        await stop(350);
        if (item !== con) {
            setCon(item);
        }
    };
    if (!isFetching && !isLoading) {
        <AnimateSharedLayout>
            <AnimatePresence>
                {con &&
                    (gameDetails = (
                        <>
                            <GameDetails item={con} setCon={setCon} />
                        </>
                    ))}
            </AnimatePresence>
            {
                (content = data.results.map((item) => {
                    return (
                        <div
                            key={item.name}
                            onClick={() => handleOpenGame(item)}
                        >
                            <Link to={`/${item.id}`}>
                                <Game item={item} />
                            </Link>
                        </div>
                    );
                }))
            }
        </AnimateSharedLayout>;
    }else{
        content = (
            <Skeleton loop={20} className="h-48 w-full" />
        )
    }

    return (
        <Cards>
            {gameDetails && gameDetails}
            {content}
        </Cards>
    );
};

const Cards = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;


export default Games;
