import React from "react";
import "../styles/Footer.css";

function Footer() {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="footer-container">

            <h5>Made by </h5>
            <a href="https://www.linkedin.com/in/chris-selwood/" alt="linkedin.com/in/chris-selwood/" target="_blank" rel="noreferrer"> 
                <b className="hover2 footer-text">Me</b>
            </a>

            <h5  className="small-padding-top">Programmed in </h5>
            <a href="https://www.react.dev" alt="React.dev" target="_blank" rel="noreferrer"> 
                <b className="hover2 footer-text">ReactJS</b>
            </a>

            <h5  className="small-padding-top">Deployed in </h5> 
            <a href="https://www.vercel.com" alt="Vercel.com" target="_blank" rel="noreferrer"> 
                <b className="hover2 footer-text">Vercel</b>
            </a>

            <h5 className="small-padding-bottom medium-padding-top spaced footer-text">ALL RIGHTS RESERVED</h5>

            <h5 className="footer-text">&copy; {year} Chris Selwood</h5>

            

        </div>
    );
}

export default Footer;