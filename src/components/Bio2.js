import React, { useState } from 'react';
import {ReactComponent as Sains} from "../assets/sains.svg";
import {ReactComponent as MS} from "../assets/MS.svg";
import {ReactComponent as Stef} from "../assets/Stef.svg";
import {ReactComponent as Zapi} from "../assets/Zapi.svg";
import {ReactComponent as Dome} from "../assets/dome.svg";
import {ReactComponent as NewBrand} from "../assets/newbrand.svg";
import Icon from '@mdi/react';
import { mdiBriefcaseOutline } from '@mdi/js';
import "../styles/Bio.css"
import "../styles/Carousel.css"

const images = ["../assets/chris.png", "../assets/chris.png", "../assets/chris.png"];

const Bio2 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const phrases = [
        "Mastering ethical hacking.",
        "Embracing every challenge.",
        "Securing the digital world."
    ];

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="reset-padding prevent-select bio-container medium-margin-top">
            <h3 className='medium-padding-bottom bio-paragraph'>
                This September I will be beginning my new journey into my passion; , by studying for my MSc <b className='hover2'>(September 2024 - September 2025)</b>. I couldn't be more excited to dedicate
                my time and skills to making the digital world a safer place. 
            </h3>

            {/* 
            <div className="carousel medium-margin-top medium-margin-bottom">
                <div className="phrases-container">
                    {phrases.map((phrase, index) => (
                        <div key={index} className={`small-margin-top ${index === currentIndex ? 'active' : ''}`} onClick={() => handleClick(index)}>
                            <h3 className='carousal-phrase hover3'>
                                {phrase}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="image-container">
                    <img src={images[currentIndex]} alt="Carousel" />
                </div>
            </div>
            */}
            
            <div className='business-container medium-padding-bottom'>
                <Icon className='medium-margin-top bio2-icon--briefcase' path={mdiBriefcaseOutline} size={2} />
                <h2 className='small-margin-top small-margin-bottom'>Companies I've Worked With</h2>
                <a className='simple-button--grey small-margin-bottom small-margin-top' href='#jobs'>
                    <p>Learn More</p>
                </a>
                <p className='small-margin-top medium-margin-bottom'>Collaborating with industry leaders and dynamic small businesses to drive success.</p>
                <div className='svg-container small-margin-top'>
                    <Zapi className="business"/>
                    <MS className="business"/>
                    <Sains className="business sainsburys"/>
                    <Stef className="business"/>
                    <Dome className="business"/>
                    <NewBrand className="business"/>
                </div>
            </div>

        </div>
    );
}

export default Bio2;