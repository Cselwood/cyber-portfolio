import React from 'react';
import CV from "../assets/ChrisSelwoodCV.pdf";
import badge from "../assets/isc2-candidate.png";
import '../styles/Card.css';


function Card() {   

    return (
        <div className='card-container medium-padding-bottom'>
            <h2 className='alt small-padding-bottom'>Chris Selwood 
            
            </h2>
            <h3 className='small-margin-bottom small-margin-top'>
                MSc Cyber Security graduate (Distinction) and ISC2 Certified in Cybersecurity (CC) with experience in data analysis, software engineering, and operations across retail and technology. Skilled in AI-driven security tools, ISO/NIST-aligned systems, and threat mitigation. Known for quickly simplifying complex problems and turning technical insight into measurable results.
            </h3>
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
