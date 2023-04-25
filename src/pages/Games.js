import { useFetchGamesQuery } from "../store";

import styled from "styled-components";

import Game from "./Game";
import GameDetails from "./GameDetails";
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Games = ({ genres }) => {
    const { data, error, isFetching, isLoading } = useFetchGamesQuery(genres);

    let content;

    const [con, setCon] = useState(null);

    const stop = (time) =>
        new Promise((res) => {
            setTimeout(res, time);
        });

    let c1 = undefined;

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
                    (c1 = (
                        <>
                            <GameDetails item={con} setCon={setCon} />
                        </>
                    ))}
            </AnimatePresence>
            {
                (content = data.results.map((item) => (
                    <div key={item.name} onClick={() => handleOpenGame(item)}>
                        <Game item={item} />
                    </div>
                )))
            }
        </AnimateSharedLayout>;
    }

    return (
        <Div>
            <Cards>
                {c1 && c1}
                {content}
            </Cards>
        </Div>
    );
};

const Div = styled.div`
    margin-top: 8vh;
`

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
