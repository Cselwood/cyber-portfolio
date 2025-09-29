import React from 'react';
import CV from "../assets/ChrisSelwoodCV.pdf";
import badge from "../assets/isc2-candidate.png";
import '../styles/Card.css';


function Card() {   

    return (
        <div className='card-container medium-padding-bottom'>
            <h2 className='alt small-padding-bottom'>Chris Selwood 
                <a href='https://www.credly.com/badges/bdd5d8d3-0c93-4c1c-961d-15e6c3c4ab77/public_url' target="_blank" rel="noreferrer">
                    <img className='credly' src={badge} alt="badge"/>
                </a>
            </h2>
            <p className='small-margin-bottom small-margin-top'>
                MSc Cyber Security graduate with Distinction, experienced data analyst, and software engineering.
            </p>
            <p className='small-margin-bottom'>London, UK</p>
            <div className='button-flex small-margin-bottom small-padding-bottom'>  
                <a className='simple-button--white small-margin-top right-hand-margin' href="https://www.linkedin.com/messaging/compose/?recipient=chris-selwood" alt="linkedin" rel="noreferrer" target='_blank'>
                    <p>Say hi on LinkedIn!</p>
                </a>
                <a className='blue-button small-margin-top' href={CV} alt="resume" rel="noreferrer" target='_blank'>
                    <p>Download CV</p>
                </a>
            </div>
            
            <div className='seperator small-margin-top small-margin-bottom'></div> 
        </div>
    );
}

export default Card;
