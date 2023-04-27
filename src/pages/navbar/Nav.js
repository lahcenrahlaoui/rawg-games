import { useState } from "react";
import { useFetchGenresQuery } from "../../store";

import classNames from "classnames";

// components 
import NavItem from "./NavItem";
// styles
import { NavStyle, UnorderList, Img } from "./Nav.Styled";



const Nav = ({ activeLink, setState, setPage }) => {
    const { data, isFetching, error } = useFetchGenresQuery();

    // check navbar status
    const [isOpen, setIsOpen] = useState(false);

    let renderNavItems;

    const handleClick = (e) => {
        setState(e.target.id);
        setPage(1);
        setIsOpen(false);
    };

    if (!isFetching) {
        // setState(data.results[0].slug)
        renderNavItems = data.results.map((item, idx) => {
            return (
                <NavItem
                    activeLink={activeLink}
                    key={item.slug}
                    item={item}
                    idx={idx}
                    handleClick={handleClick}
                />
            );
        });
    }

    const navStyles = classNames(`flex 
                                opacity-0 
                                transition duration-1000 opacity-100
                                items-center justify-between flex-wrap`);

    return (
        <>
            <NavStyle className={navStyles}>
                <div className="lg:hidden flex justify-between bg-red-500 w-full p-3">
                    <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
                        <Img
                            src={
                                "https://cdn1.vectorstock.com/i/1000x1000/39/60/games-logo-with-gamepad-vector-27523960.jpg"
                            }
                            alt="d"
                        />
                    </div>

                    <div className=" ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                        >
                            <svg
                                className={`fill-current h-3 w-3 ${
                                    isOpen ? "hidden" : "block"
                                }`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                            <svg
                                className={`fill-current h-3 w-3 ${
                                    isOpen ? "block" : "hidden"
                                }`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`w-full block flex-grow lg:flex lg:items-center  ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    <UnorderList>{renderNavItems}</UnorderList>
                </div>
            </NavStyle>
        </>
    );
};

export default Nav;
