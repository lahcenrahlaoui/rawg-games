import { useFetchGamesQuery } from "../store";

import { Link, useNavigate } from "react-router-dom";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Game from "./Game";
import GameDetails from "./GameDetails";
import Skeleton from "./Skeleton";

import { useState, useRef, useCallback } from "react";

const Games = ({ genres, page, search, setPage }) => {
    // thsi state to display one game over others
    const [con, setCon] = useState(null);

    const { data, error, isFetching, isLoading } = useFetchGamesQuery({
        genres,
        search,
        page,
    });

    let content;

    const observer = useRef();
    const lastGameElementRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPageNumber) => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading]
    );

    /*****
     * thread stop a while
     */
    const stop = (time) =>
        new Promise((res) => {
            setTimeout(res, time);
        });
    /**** this is from one game click  */
    let gameDetails = undefined;
    const handleOpenGame = async (item) => {
        setCon(null);
        // await stop(3500);
        if (item !== con) {
            setCon(item);
        }
    };

    // if we fetch all the data we go inside this block condition

    if (!isFetching && data.count === 0) {
        return <div className=""> there is no data </div>;
    }

    if (!isFetching && !isLoading) {
        <AnimateSharedLayout>
            <AnimatePresence>
                {con &&
                    (gameDetails = (
                        <>
                            <GameDetails
                                item={con}
                                id={con.id}
                                imgs={con.short_screenshots}
                                setCon={setCon}
                            />
                        </>
                    ))}
            </AnimatePresence>
            {
                (content = data?.results?.map((item, index) => {
                    if (data?.results?.length === index + 1) {
                        return (
                            <div
                                ref={lastGameElementRef}
                                key={item.id}
                                onClick={() => handleOpenGame(item)}
                            >
                                <Link to={`/rawg-games/${item.id}`}>
                                    <Game item={item} />
                                </Link>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={item.id}
                                onClick={() => {
                                    handleOpenGame(item);
                                }}
                            >
                                <Link to={`/rawg-games/${item.id}`}>
                                    <Game item={item} />
                                </Link>
                            </div>
                        );
                    }
                }))
            }
        </AnimateSharedLayout>;
    } else {
        content = <Skeleton loop={20} className="h-48 w-full" />;
    }

    return (
        <>
            {gameDetails && gameDetails}
            {content}
        </>
    );
};

export default Games;
