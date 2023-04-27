


const NavItem = ({ activeLink, item, handleClick }) => {
    return (
        <li
            className={`capitalize text-white ${
                activeLink === item.slug ? "active" : ""
            }  `}
            id={item.slug}
            onClick={handleClick}
        >
            {item.name.includes(" ") ? item.name.split(" ")[1] : item.name}
        </li>
    );
};

export default NavItem;
