import { useFetchOneGameQuery } from "../../store";

// icons
import { GoChevronRight } from "react-icons/go";

// style motion
import { motion } from "framer-motion";
import {
    Fixed,
    Card,
    Stars,
    PlatformPadding,
    Images,
} from "./GameDetails.Style";

import Platforms from "./Platforms";

import { useNavigate } from "react-router-dom";
// helper to resize image
import { resizeImage } from "../resizeImage";

const GameDetails = ({ item, id, imgs, setDisplayedGame }) => {
    const { data, error, isFetching } = useFetchOneGameQuery(id);
    let itemx;
    let rating;

    const nagigateTo = useNavigate();

    const handleClickHide = (e) => {
        if (e.target.role !== "button") {
            setDisplayedGame(null);

            nagigateTo("/rawg-games");
        } else {
            window.location.href = e.target.getAttribute("data-link");
        }
    };

    rating = (item.rating / 5) * 100 + "%";

    let content;
    const i = item;

    const getContent = (item) => {
        content = (
            <Fixed layoutId={item.name + "v"} onClick={handleClickHide}>
                <Card>
                    <div
                        style={{ background: "#ce0694" }}
                        className="flex justify-around items-center  w-full p-4   mb-2"
                    >
                        <Stars layoutId={item.rating} rating={rating}></Stars>

                        <motion.div layoutId={item.name}>
                            {item.name}
                        </motion.div>
                    </div>
                    {i.background_image[0] && (
                        <div className="div-height flex justify-center ">
                            <motion.img
                                initial={{ rotate: [0] }}
                                animate={{
                                    scale: [0.95],
                                    rotate: 360,
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                                src={resizeImage(item.background_image, 640)}

                                />
                        </div>
                    )}
                    <div className="flex justify-center">
                        <div className="flex justify-center  p-20 flex-wrap pt-1 ">
                            {[...item.tags].splice(0, 6).map((tag) => {
                                return (
                                    <div
                                        key={tag.id}
                                        style={{ background: "#ce0694" }}
                                        className="text-center border-b rounded-full m-2 p-1 w-48"
                                    >
                                        {tag.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <h1 className="text-center p-2 text-3xl">Platforms</h1>
                    <Platforms item={item} />
                    <div className="p-10">{item.description_raw}</div>

                    <div>
                        {item.background_image[0] && (
                            <Images className="flex flex-wrap ">
                                {imgs.map((img, idx) => {
                                    if (idx !== 0)
                                        return (
                                            <img key={img.id} src={img.image} />
                                        );
                                })}
                            </Images>
                        )}
                    </div>
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

    if (!isFetching) {
        itemx = data;
        getContent(itemx);
    } else {
        getContent(item);
    }

    return content;
};

export default GameDetails;
