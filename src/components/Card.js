import React from 'react';
import CV from "../assets/ChrisSelwoodCV.pdf";
import Chris from "../assets/chris.png"
import '../styles/Card.css';

function Card() {   

    return (
        <div className='card-container'>
            <h1 className='landing-name'>Hi, I'm Chris Selwood.</h1>
            <p className='small-margin-top student-line'>Student - Cyber Security & Forensics MSc</p>
            <p className='small-margin-bottom'>London, UK. </p>
            <h3 className='small-margin-bottom uni-line'>
                <a href="https://twitter.com/UniWestminster" alt="UniWestminster" rel="noreferrer" target='_blank'>
                    <b className='hover3'>@UniWestminster</b>       
                </a>
            </h3> 
            <div className='button-flex'>  
                <a className='simple-button small-margin-top' href="https://www.linkedin.com/messaging/compose/?recipient=chris-selwood" alt="linkedin" rel="noreferrer" target='_blank'>
                    <h4>Message Me!</h4>
                </a>
                <a className='blue-button small-margin-top ' href={CV} alt="resume" rel="noreferrer" target='_blank'>
                    <h4>Download my CV</h4>
                </a>
            </div>
            <img className='face large-padding-top large-margin-top' src={Chris} alt='chris'/>
        </div>
    );
}

export default Card;
