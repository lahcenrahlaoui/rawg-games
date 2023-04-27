import { useFetchGamesQuery } from "../../store";

import { Link } from "react-router-dom";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

// components
import Game from "./Game";
import GameDetails from "./GameDetails";
import Skeleton from "../Skeleton";

import { useState, useRef, useCallback } from "react";

const Games = ({ genres, page, search, setPage }) => {
    // thsi state to display one game over others
    const [displayedGame, setDisplayedGame] = useState(null);
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

    /**** this is from one game click  */
    let gameDetails = undefined;
    const handleOpenGame = async (item) => {
        setDisplayedGame(null);
        if (item !== displayedGame) {
            setDisplayedGame(item);
        }
    };

    // if we fetch all the data we go inside this block condition

    if (!isFetching && data.count === 0) {
        return <div className=""> there is no data </div>;
    }

    if (!isFetching && !isLoading) {
        <AnimateSharedLayout>
            <AnimatePresence>
                {displayedGame  &&
                    (gameDetails = (
                        <>
                            <GameDetails
                                item={displayedGame}
                                id={displayedGame.id}
                                imgs={displayedGame.short_screenshots}
                                setDisplayedGame={setDisplayedGame}
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
