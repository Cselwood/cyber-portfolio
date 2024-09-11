import React from "react";
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import "../styles/Footer.css";

function Footer() {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="footer-container">

            <div className="inner-container">
                <h5 className="inner-container-text">By </h5>
                <a className="right-hand-margin" href="https://www.linkedin.com/in/chris-selwood/" alt="linkedin.com/in/chris-selwood/" target="_blank" rel="noreferrer"> 
                    <b className="hover2 footer-text">Me</b>
                </a>

                <h5 className="inner-container-text">With</h5>
                <a className="right-hand-margin" href="https://www.react.dev" alt="React.dev" target="_blank" rel="noreferrer"> 
                    <b className="hover2 footer-text">React</b>
                </a>

                <h5  className="inner-container-text">For</h5> 
                <a className="right-hand-margin" href="https://www.vercel.com" alt="Vercel.com" target="_blank" rel="noreferrer"> 
                    <b className="hover2 footer-text">Vercel</b>
                </a>
            </div>

            <div className="inner-container">
                <a className='nav-item' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'>
                    <Icon className='nav-icon' path={mdiLinkedin} size={1.1}/>
                </a>
                <a href="#home">
                    <h4 className="inner-container-text landing-name">
                        CS
                    </h4>
                </a>
                <a className='nav-item' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                    <Icon className='nav-icon' path={mdiGithub} size={1.1} />
                </a>
            </div>

            <h5 className="inner-container footer-text">&copy; {year} Chris Selwood</h5>

        </div>
    );
}

export default Footer;