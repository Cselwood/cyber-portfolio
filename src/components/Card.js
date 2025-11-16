import React from 'react';
import CV from "../assets/ChrisSelwoodCV.pdf";
import badge from "../assets/isc2-candidate.png";
import '../styles/Card.css';


function Card() {   

    return (
        <div className='card-container medium-padding-bottom'>
            <h2 className='alt small-padding-bottom'>Chris Selwood 
            
            </h2>
            <h4 className='alt small-margin-bottom small-margin-top'>
                A Distinction MSc Cyber Security graduate (2025) and ISC2 Certified in Cybersecurity (CC) professional, seeking graduate roles in cyber security. <br/><br/>Focused on AI-driven threat intelligence, network security, ISO-compliant ISMS design, red team operations, vulnerability assessments, and applied cryptography. Currently studying towards Security+ (CompTIA). Known for adapting quickly, simplifying complex problems, and turning technical insight into measurable success.
            </h4>
            <div className='button-flex small-margin-bottom small-padding-bottom'>  
                <a className='blue-button small-margin-top right-hand-margin' href="https://www.linkedin.com/messaging/compose/?recipient=chris-selwood" alt="linkedin" rel="noreferrer" target='_blank'>
                    <p className='alt'>Talk to me</p>
                </a>
                <a className='simple-button--white small-margin-top' href={CV} alt="resume" rel="noreferrer" target='_blank'>
                    <p className='alt'>Download CV</p>
                </a>
            </div>
            
            <div className='seperator small-margin-top small-margin-bottom'></div> 
        </div>
    );
}

export default Card;
