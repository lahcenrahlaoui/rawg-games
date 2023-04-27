import { motion } from "framer-motion";

import { Card, Stars } from "./Game.style";

import { resizeImage } from "../resizeImage";

const Game = ({ item }) => {
    const rating = (item.rating / 5) * 100 + "%";

    return (
        <Card layoutId={item.name + "v"}>
            <motion.div layoutId={item.name}>{item.name}</motion.div>
            <div className="div-height">
                {item.background_image?.length && (
                    <motion.img
                        animate={{
                            rotate: [0],
                        }}
                        src={resizeImage(item.background_image, 640)}

                        />
                )}
            </div>
            <div>{item.released}</div>
            <Stars layoutId={item.rating} rating={rating}></Stars>
        </Card>
    );
};

export default Game;
