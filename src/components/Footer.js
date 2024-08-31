import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <p className="white">Made by </p>
            <b><a className="footer-link small-margin-bottom chartreuse chartreuse-hover" href="https://www.linkedin.com/in/chris-selwood/" alt="BrittanyChiang.com" target="_blank" rel="noreferrer"> Me. </a></b> 

            <p className="small-padding-top white">Programmed in </p>
            <b><a className="footer-link small-margin-bottom chartreuse chartreuse-hover" href="https://www.react.dev" alt="React.dev" target="_blank" rel="noreferrer"> ReactJS.</a></b>

            <p className="small-padding-top white">Deployed in </p> 
            <b><a className="footer-link medium-padding-bottom chartreuse chartreuse-hover" href="https://www.vercel.com" alt="Vercel.com" target="_blank" rel="noreferrer"> Vercel.</a></b>

            <b className="small-padding-top"><a className=" chartreuse chartreuse-hover" href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com </a></b>

            <h4 className="medium-padding-top small-padding-bottom spaced white">ALL RIGHTS RESERVED</h4>

            <h4 className="white">&copy; Chris Selwood</h4>

            

        </div>
    );
}

export default Footer;