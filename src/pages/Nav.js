import { useState } from "react";

import styled from "styled-components";
import { useFetchGenresQuery } from "../store";

const Nav = ({ state, setState }) => {
    const { data, isFetching, error } = useFetchGenresQuery();

    const [isOpen, setIsOpen] = useState(false);

    let renderNav;

    const handleClick = (e) => {
        console.log(e.target.id);
        setState(e.target.id);

        setIsOpen(false);
    };

    if (!isFetching) {
        console.log(data);
        renderNav = data.results.map((item, idx) => {
            return (
                <li
                    className={`capitalize text-white ${
                        state === item.slug ? "active" : ""
                    }  `}
                    key={item.slug}
                    id={item.slug}
                    onClick={handleClick}
                >
                    {item.name.includes(" ")
                        ? item.name.split(" ")[1]
                        : item.name}
                </li>
            );
        });
    }

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap">
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
                    <Ul>
                        {/* {renderNav1} */}
                        {renderNav}
                    </Ul>
                </div>
            </nav>
        </>
    );
};
const Img = styled.img`
    width: 20px;
    height: 20px;
`;

const Ul = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 10%);
    list-style-type: none;
    background: #141029;
    @media only screen and (max-width: 991px) {
        grid-template-columns: repeat(auto-fit, 100%);

        li {
            justify-content: start;
        }
    }
    li {
        text-transform: capitalize;
        display: flex;
        padding: 5px 10px;
        justify-content: center;
        align-items: center;

        height: 50px;
        &:hover {
            background: #3d55ea;
        }
        cursor: pointer;
    }
`;

export default Nav;
