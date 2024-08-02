import React from 'react';
import Chris from "../assets/chris.png";
import "../styles/Photo.css"

function Photo() {
    return (
        <div className="prevent-select circular-container">
            <img className='face' src={Chris}/>
        </div>
    );
}

export default Photo;