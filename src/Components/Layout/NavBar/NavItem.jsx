import React from "react";

const NavItem = (props) => {
    return (
        <li onClick={props.onClick}>
            <a href={`#${props.label === "About me" ? "About" : props.label}`}>{props.label}</a>
        </li>
    )
}

export default NavItem;