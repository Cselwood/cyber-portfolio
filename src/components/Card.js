import React from 'react';
import CV from "../assets/ChrisSelwoodCV.pdf";
import '../styles/Card.css';

function Card() {   

    return (
        <div className='card-container medium-padding-bottom'>
            <h2 className='alt small-padding-bottom'>Chris Selwood</h2>
            <p className='small-margin-bottom small-margin-top'>
                MSc Cyber Security student, experienced data analyst, and first-class software engineering graduate.
            </p>
            <p className='small-margin-bottom'>London, UK</p>
            <div className='button-flex small-margin-bottom small-padding-bottom'>  
                <a className='simple-button--white small-margin-top right-hand-margin' href="https://www.linkedin.com/messaging/compose/?recipient=chris-selwood" alt="linkedin" rel="noreferrer" target='_blank'>
                    <p>Say hello!</p>
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
