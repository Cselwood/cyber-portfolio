import React, { useEffect, useState } from "react";
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import { mdiMenu } from '@mdi/js';
import "../styles/Nav.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    const toggleNav = () => {
        console.log("Nav is now changed!")
        setIsNavOpen(!isNavOpen);
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
                    <h4 className="nav-item landing-name alt">
                        CS
                    </h4>
                </a>
                <a className="nav-item" href="#about">
                    <p className="alt hover3">
                        About
                    </p>
                </a>
                <a className="nav-item" href="#jobs">
                    <p className="alt hover3">
                        Experience
                    </p>
                </a>
                <a className="nav-item" href="#projects">
                    <p className="alt hover3">
                        Projects
                    </p>
                </a>
                <a className='nav-item' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'>
                    <Icon className='nav-icon' path={mdiLinkedin} size={1.1}/>
                </a>
                <a className='nav-item' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                    <Icon className='nav-icon' path={mdiGithub} size={1.1} />
                </a>
            </div>
            <div className="nav-hb">
                <button className="hamburger-container" onClick={toggleNav}>
                    <Icon className="hamburger-icon" path={mdiMenu} size={1.1} />
                </button>
            </div>
            <div className={`hidden-nav ${isNavOpen ? 'open' : ''}`}>
                <div className="nav-holding-container">
                    <div className="hidden-nav-flex">
                        <a href="#home">
                            <h3 className="nav-item landing-name medium-margin-top">
                                <strong>CS</strong>
                            </h3>
                        </a>
                        <a className="nav-item" href="#about" onClick={toggleNav}>
                            <h2 className="hover3 nav-link">
                                About
                            </h2>
                        </a>
                        <a className="nav-item" href="#jobs" onClick={toggleNav}>
                            <h2 className="hover3 nav-link">
                                Experience
                            </h2>
                        </a>
                        <a className="nav-item" href="#projects" onClick={toggleNav}>
                            <h2 className="hover3 nav-link">
                                Projects
                            </h2>
                        </a>
                        <a className='nav-item nav-link' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'>
                            <h2><Icon className='nav-icon' path={mdiLinkedin} size={2}/></h2>
                        </a>
                        <a className='nav-item nav-link' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                            <h2><Icon className='nav-icon' path={mdiGithub} size={2} /></h2>
                        </a>
                    </div>
                    <div className="empty-nav" onClick={toggleNav}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
