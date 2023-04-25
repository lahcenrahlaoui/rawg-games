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

const Game = ({ item }) => {

    return (
        <Card  layoutId={item.name+"v"} >
            <motion.div layoutId={item.name} >{item.name}</motion.div>
            <motion.img src={item.background_image} layoutId={item.background_image} />
            <div>{item.released}</div>
            <div>{item.rating}/5</div>
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
            </Platforms> */}
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
    height: 300px;
    border-radius: 20px;
    img {
        max-width: 100%;
        max-height: 100%;
    }
    margin: 20px auto;
`;

export default Game;
