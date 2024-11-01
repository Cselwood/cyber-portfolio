import React from "react";
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import "../styles/Footer.css";

function Footer() {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <div className="seperator"></div>

            <div className="footer-container small-margin-top">
                <p className="inner-container footer-text">&copy; {year} Chris Selwood</p>
                <div className="inner-container">
                    <a className='nav-item' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'>
                        <Icon className='nav-icon' path={mdiLinkedin} size={1.1}/>
                    </a>
                    <a className='nav-item' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                        <Icon className='nav-icon' path={mdiGithub} size={1.1} />
                    </a>
                </div>
            </div>
        </div>
        
    );
}

export default Footer;