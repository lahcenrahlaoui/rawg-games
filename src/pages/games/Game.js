import styled from "styled-components";

import {
    FaWindows,
    FaXbox,
    FaAppStoreIos,
    FaPlaystation,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { BsNintendoSwitch } from "react-icons/bs";
import { resizeImage } from "../resizeImage";

const Game = ({ item }) => {
    const rating = (item.rating / 5) * 100 + "%";

    return (
        <Card layoutId={item.name + "v"}>
            <motion.div layoutId={item.name}>{item.name}</motion.div>
            <div className="div-height">
                {item.background_image?.length && (
                    <motion.img
                        src={resizeImage(item.background_image, 640)}
                        layoutId={item.background_image}
                    />
                )}
            </div>
            <div>{item.released}</div>

            <Stars layoutId={item.rating} rating={rating}></Stars>

            {/* <Platforms>
                {item.platforms.map((p) => {
                    switch (p.platform.slug) {
                        case "pc":
                            return (
                                <PlatformPadding key={p.platform.id}>
                                    <FaWindows />
                                </PlatformPadding>
                            );
                        case "android":
                            return (
                                <PlatformPadding key={p.platform.id}>
                                    <FaAndroid />
                                </PlatformPadding>
                            );
                        case "linux":
                            return (
                                <PlatformPadding key={p.platform.id}>
                                    <FaLinux />
                                </PlatformPadding>
                            );
                        case "xbox":
                            return (
                                <PlatformPadding key={p.platform.id}>
                                    <FaXbox />
                                </PlatformPadding>
                            );
                        case "mac":
                            return (
                                <PlatformPadding key={p.platform.id}>
                                    <FaAppStoreIos />
                                </PlatformPadding>
                            );
                        case "playstation":
                            return (
                                <PlatformPadding key={p.platform.id}>
                                    <FaPlaystation />
                                </PlatformPadding>
                            );
                        case "nintendo":
                            return (
                                <PlatformPadding key={p.platform.id}>
                                    <BsNintendoSwitch />
                                </PlatformPadding>
                            );
                        default:
                            return;
                    }
                })}
            </Platforms>  */}
        </Card>
    );
};

const Platforms = styled.div`
    display: flex;
    justify-content: space-around;
`;
const PlatformPadding = styled.div`
    padding: 5px;
`;

const Card = styled(motion.div)`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 400px;
    height: 450px;
    border-radius: 20px;
    overflow: hidden;

    .div-height {
        height: 50vh;
    }

    img {
        object-fit: cover;
        height: 100%;
        display: block;
    }
    margin: 20px auto;
`;

const Stars = styled(motion.div)`
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

export default Game;
