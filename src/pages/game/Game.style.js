import { motion } from "framer-motion";
import styled from "styled-components";


export const Card = styled(motion.div)`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 250px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;

    .div-height {
        height: 50vh;
    }

    img {
        height: 100%;
        object-fit: cover;
        display: block;
    }
    margin: 20px auto;
`;

export const Stars = styled(motion.div)`
    font-size: 20px;
    font-family: Times;

    &:before {
        content: "★★★★★";
        letter-spacing: 3px;
        background: linear-gradient(
            90deg,
            #fc0 ${(props) => props.rating},
            #bebebe ${(props) => props.rating}
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
