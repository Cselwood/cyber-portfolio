import React, { useEffect, useState } from "react";
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import "../styles/Nav.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-flex">
            <a href="#home">
                <h4 className="nav-item nav-logo">
                    CS
                </h4>
            </a>
            <a className="nav-item" href="#about">
                <p className="hover3">
                    About
                </p>
            </a>
            <a className="nav-item" href="#jobs">
                <p className="hover3">
                    Experience
                </p>
            </a>
            <a className="nav-item" href="#projects">
                <p className="hover3">
                    Projects
                </p>
            </a>
            <a className="nav-item" href="#blog">
                <p className="hover3">
                    Blog
                </p>
            </a>
            <a className='nav-item' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'>
                <Icon className='nav-icon' path={mdiLinkedin} size={1.1}/>
            </a>
            <a className='nav-item' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                <Icon className='nav-icon' path={mdiGithub} size={1.1} />
            </a>
        </div>
        </div>
    );
}

export default Navbar;
