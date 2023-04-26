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

import { GoChevronRight } from "react-icons/go";
import { BsNintendoSwitch } from "react-icons/bs";

import { useLocation, useNavigate } from "react-router-dom";
import { useFetchOneGameQuery } from "../store";
import { useEffect } from "react";
import { resizeImage } from "./resizeImage";

const GameDetails = ({ item, id, imgs, setCon }) => {
    // const { data, error, isFetching } = useFetchOneGameQuery(id);
    let itemx;
    let rating;

    const nagigateTo = useNavigate();

    const handleClickHide = (e) => {
        if (e.target.role !== "button") {
            setCon(null);

            nagigateTo("/rawg-games");
        } else {
            window.location.href = e.target.getAttribute("data-link");
        }
    };

    rating = (item.rating / 5) * 100 + "%";

    return (
        <Fixed layoutId={item.name + "v"} onClick={handleClickHide}>
            <Card>
                <div
                    style={{ background: "#ce0694" }}
                    className="flex justify-around items-center  w-full p-4   mb-2"
                >
                    <Stars layoutId={item.rating} rating={rating}></Stars>

                    <motion.div layoutId={item.name}>{item.name}</motion.div>
                </div>
                {item.background_image[0] && (
                    <div className="div-height flex justify-center ">
                        <motion.img
                            src={resizeImage(item.background_image, 640)}
                            layoutId={item.background_image}
                        />
                    </div>
                )}
                <div className="flex justify-center">
                    <div className="grid grid-cols-6 md:grid-cols-3 sm:grid-cols-2  pt-1 ">
                        {[...item.tags].splice(0, 6).map((tag) => {
                            return (
                                <div
                                    key={tag.id}
                                    style={{ background: "#ce0694" }}
                                    className="bg-gray-400 text-center border-b rounded-full m-2 p-1 w-48"
                                >
                                    {tag.name}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <h1 className="text-center p-2 text-3xl">Platforms</h1>
                <Platforms>
                    {item.parent_platforms.map((p) => {
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

                <div className="p-10">{item.description_raw}</div>

                {item.background_image[0] && (
                    <Images className=" ">
                        {imgs.map((img, idx) => {
                            if (idx !== 0) return <img src={img.image} />;
                        })}
                    </Images>
                )}
                <div className="flex justify-center p-4">
                    <button
                        className="button-30"
                        role="button"
                        data-link={item.website}
                    >
                        Visit &nbsp;
                        <GoChevronRight className="animate-bouncex " />
                    </button>
                </div>
            </Card>
        </Fixed>
    );
};

const Fixed = styled(motion.div)`
    width: 100vw;
    height: 80vh;
    position: fixed;
    display: flex;

    justify-content: center;
    align-items: center;
`;

const Card = styled(motion.div)`
    background: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    width: 90%;
    height: 100%;
    /* padding: 5%; */

    overflow: scroll;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    z-index: 10000;

    .div-height {
        height: 60vh;
    }
    img {
        object-fit: cover;
        height: 100%;
        display: block;
    }
`;

const Stars = styled(motion.div)`
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

const Platforms = styled.div`
    display: flex;
    justify-content: space-around;
`;
const PlatformPadding = styled.div`
    padding: 5px;
`;

const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 100%;
    height: 100%;
    img {
        object-fit: cover;
        width: 100%;
        display: block;
        padding: 1px;
    }
`;

export default GameDetails;
