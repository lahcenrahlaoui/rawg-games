


const NavItem = ({ state, item, handleClick }) => {
    return (
        <li
            className={`capitalize text-white ${
                state === item.slug ? "active" : ""
            }  `}
            id={item.slug}
            onClick={handleClick}
        >
            {item.name.includes(" ") ? item.name.split(" ")[1] : item.name}
        </li>
    );
};

export default NavItem;
