import React from "react";
import NavItem from "./NavItem";
const Nav = () => {

    const navLinks = [
        { label: "About me" },
        { label: "Skills" },
        { label: "Projects" },
        { label: "Contact" }
    ]

    return (
        <nav>
            <h1><a href="#">Portfolio</a></h1>
            <ul>
                {navLinks.map(link => (<NavItem key={link.label} {...link} />))}
            </ul>
        </nav>
    )
}

export default Nav;