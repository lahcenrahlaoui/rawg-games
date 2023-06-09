import { motion } from "framer-motion";
import styled from "styled-components";

export const Fixed = styled(motion.div)`

    width: 80vw;
    height: 86vh;
    position: fixed;
    display: flex;
    top: 10%;
    z-index: 10000;

`;

export const Card = styled(motion.div)`
    background: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

     img {
        padding: 20px;
        object-fit: cover;
        height: 100%;
        display: block;
    }
   

    overflow: scroll;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    width: 100%;
    height: 100%;
    .div-height {
        display: flex;

        padding: 20px;
        /* height: 60vh; */
    }
   
`;

export const Stars = styled(motion.div)`
    font-size: 20px;
    font-family: Times;
    line-height: 1;
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

export const Platforms = styled.div`
    display: flex;

    justify-content: center;
`;
export const PlatformPadding = styled.div`
    padding: 25px;
    font-size: 200%;
`;

export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    width: 100%;
    height: 100%;
    img {
        object-fit: cover;
        width: 100%;
        display: block;
        padding: 5px;
        &:hover {
            /* position:fixed; */
            transform: scale(0.95);
            transition: 0.8s all ease-in-out;
            /* padding: 200px  300px ; */
        }
    }
`;
