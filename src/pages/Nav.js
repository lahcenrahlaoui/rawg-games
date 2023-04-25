import { useState } from "react";

import styled from "styled-components";

const Nav = ({ state, setState }) => {
    const list = ["action", "indie", "adventure", "shooter"];

    const handleClick = (e) => {
        setState(e.target.innerText);
    };

    const renderNav = list.map((item) => {

        return (
            <li
                className={`${state === item ? "active" : ""}  `}
                key={item}
                onClick={handleClick}
            >
                {item}
            </li>
        );
    });

    return (
        <NavList>
            <Ul>{renderNav}</Ul>
        </NavList>
    );
};

const NavList = styled.nav`
    position: fixed;
    top:0;
    
    
`
const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    background: #82ef4b;
    justify-content: space-around;
    align-items: space-between;
    li {
        padding: 15px 150px;
        &:hover{
            background: #80bfba;
        }
    }
`;

export default Nav;
