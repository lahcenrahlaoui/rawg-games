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

const GameDetails = ({ item, setCon }) => {
   
    
    const handleClickHide = () => {
        setCon(null);
    };
    return (
        <Fixed layoutId={item.name+"v"} onClick={handleClickHide}>
            <Card >
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
    height: 92vh;
    position: fixed;
    display: flex;

    justify-content: center;
    align-items: center;
    
/* padding: 80px; */
`;

const Card = styled.div`

background: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    width: 60%;
    padding: 3%;
    /* height: 100%; */
    position: absolute;

    /* top:50%;
    left:25vw;  */
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
