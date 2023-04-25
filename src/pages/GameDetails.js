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

import { Link, useLocation, useNavigate } from "react-router-dom";

const GameDetails = ({ item, setCon }) => {
    const nagigateTo = useNavigate();

    const handleClickHide = () => {
        setCon(null);
        nagigateTo("/");
    };
    return (
        <Fixed layoutId={item.name + "v"} onClick={handleClickHide}>
            <Card>
                <motion.div layoutId={item.name}>{item.name.length}</motion.div>
                <motion.img
                    src={item.background_image}
                    layoutId={item.background_image}
                />

                <div>{item.rating}/5</div>
                <Platforms>
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
                </Platforms>
            </Card>
        </Fixed>
    );
};

const Platforms = styled.div`
    display: flex;
    justify-content: space-around;
`;
const PlatformPadding = styled.div`
    padding: 5px;
`;
const Fixed = styled(motion.div)`
    width: 100vw;
    height: 80vh;
    position: fixed;
    display: flex;

    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    background: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 60%;
    padding: 3%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export default GameDetails;
