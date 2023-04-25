import styled from "styled-components";
import { motion } from "framer-motion";

import Games from "./Games";
import { useState } from "react";
import Nav from "./Nav";

const Home = () => {
    const [state, setState] = useState("action");

    let content;

    if (state) {
        content = (
            <>
                <Nav state={state} setState={setState} />
                <Games genres={state} />
            </>
        );
    } 
    // else {
    //     content = <Nav state={state} setState={setState} />;
    // }

    return <div>{content}</div>;
};

export default Home;
