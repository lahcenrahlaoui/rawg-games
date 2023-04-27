import { motion } from "framer-motion";

import { Card, Stars } from "./Game.style";

import { resizeImage } from "../resizeImage";

const Game = ({ item }) => {
    const rating = (item.rating / 5) * 100 + "%";

    return (
        <Card
            layoutId={item.name + "v"}
            initial={{ x: 400, rotate: [0] }}
            animate={{
                x: 0,
            }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <motion.div layoutId={item.name} className="p-2">{item.name}</motion.div>
            <div className="div-height">
                {item.background_image?.length && (
                    <motion.img
                        initial={{ rotate: [0] }}
                        animate={{
                            scale: [0.2, 0.8, 1],
                            rotate: 360,
                        }}
                        transition={{ type: "spring", stiffness: 100 }}
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
