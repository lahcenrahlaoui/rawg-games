import { useState } from "react";

// styles
import { Cards } from "./Home.Styled";

// components
import Games from "./Games";
import Nav from "./navbar/Nav";
import SearchForm from "./SearchForm";

const Home = () => {
    const [state, setState] = useState("action");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    let content;

    const renderGames = [];

    for (let j = 1; j < page + 1; j++) {
        renderGames.push(
            <Games
                key={j}
                page={j}
                search={search}
                setPage={setPage}
                genres={state}
            />
        );
    }
    content = <Nav state={state} setState={setState} setPage={setPage} />;
    if (state) {
        content = (
            <>
                <Nav state={state} setState={setState} setPage={setPage} />
                <SearchForm search={search} setSearch={setSearch} />
                <Cards>{renderGames}</Cards>
            </>
        );
    }
    return <div>{content}</div>;
};

export default Home;
