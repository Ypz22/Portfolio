import React from "react";

const NavItem = (props) => {
    return (
        <li>
            <a href={`#${props.label === "About me" ? "About" : props.label}`}>{props.label}</a>
        </li>
    )
}

export default NavItem;