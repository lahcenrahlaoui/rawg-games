import styled from "styled-components";
import { motion } from "framer-motion";

import Games from "./Games";
import { useState } from "react";
import Nav from "./Nav";
import Skeleton from "./Skeleton";
import { useEffect } from "react";

const Home = () => {
    const [state, setState] = useState("action");

    let content;

    const stop = (time) =>
        new Promise((res) => {
            setTimeout(res, time);
        });

    // if (state) {
    //     content = (
    //         <>
    //             <Nav state={state} setState={setState} />
    //             <Games genres={state} />
    //         </>
    //     );
    // } else {
    //     content = (
    //         <>
    //             <Nav state={state} setState={setState} />
    //             <Skeleton loop={20} />
    //         </>
    //     );
    // }
    content = (
        <>
            {/* <Nav state={state} setState={setState} /> */}
            <Skeleton loop={20} />
        </>
    );
    return <div>{content}</div>;
};

export default Home;
