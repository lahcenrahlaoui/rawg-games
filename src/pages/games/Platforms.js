/// icons
import {
    FaWindows,
    FaXbox,
    FaAppStoreIos,
    FaPlaystation,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

import {
    Platforms as PlatformsStyled,
    PlatformPadding,
} from "./GameDetails.Style";

const Platforms = ({ item }) => {
    return (
        <PlatformsStyled>
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
        </PlatformsStyled>
    );
};

export default Platforms;
