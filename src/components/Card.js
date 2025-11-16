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
                Distinction MSc Cyber Security graduate (2025) and ISC2 Certified in Cybersecurity (CC) with experience in data analysis, software engineering, and security operations across retail and technology. Currently studying towards Security+ (CompTIA).
                    <br/><br/>
                Skilled in AI-driven security, ISO/NIST-aligned systems, and threat mitigation. Known for simplifying complex problems and turning technical insight into measurable results.
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
