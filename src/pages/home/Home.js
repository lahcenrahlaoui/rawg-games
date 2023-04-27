import { useEffect, useState } from "react";

// styles
import { Cards } from "./Home.Styled";

// components
import Games from "../games/Games";
import Nav from "../navbar/Nav";
import SearchForm from "../SearchForm";

const Home = () => {
    const [activeLink, setActiveLink] = useState("");
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    let content;
    console.log(typeof setSearch);

    const renderGames = [];

    useEffect(() => {
        setSearch("");
    }, [activeLink]);

    for (let j = 1; j < page + 1; j++) {
        renderGames.push(
            <Games
                key={j}
                page={j}
                search={search}
                setPage={setPage}
                genres={activeLink}
            />
        );
    }
    content = (
        <Nav
           
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            setPage={setPage}
            setSearch={setSearch}
        />
    );
    if (activeLink) {
        content = (
            <>
                <Nav
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                    setPage={setPage}
                />
                <SearchForm search={search} setSearch={setSearch} />
                <Cards>{renderGames}</Cards>
            </>
        );
    }
    return <div>{content}</div>;
};

export default Home;
