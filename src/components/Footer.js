import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <p>
                Made by 
                <b>&nbsp;Me!</b> 
                &nbsp;Based on the designs of 
                <b><a className="footer-link" href="https://www.brittanychiang.com" alt="BrittanyChiang.com" target="_blank" rel="noreferrer"> Brittany Chiang. </a></b>
                Programmed in 
                <b><a className="footer-link" href="https://www.react.dev" alt="React.dev" target="_blank" rel="noreferrer"> ReactJS </a></b>
                and deployed in 
                <b><a className="footer-link" href="https://www.vercel.com" alt="Vercel.com" target="_blank" rel="noreferrer"> Vercel.</a></b>
            </p>
        </div>
    );
}

export default Footer;