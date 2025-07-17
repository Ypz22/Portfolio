import React, { useState } from "react";
import NavItem from "./NavItem";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "About me" },
        { label: "Skills" },
        { label: "Projects" },
        { label: "Contact" }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <h1><a href="#">Portfolio</a></h1>
            <div className="hamburger" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                ☰
            </div>
            <ul className={isOpen ? "nav-open" : "nav-closed"}>
                {navLinks.map(link => (
                    <NavItem onClick={() => setIsOpen(false)} key={link.label} {...link} />
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
