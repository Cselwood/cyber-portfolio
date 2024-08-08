import React, {useEffect} from 'react';
import "../styles/Bio.css"

const Bio = ({deviceClass}) => {

    useEffect(() => {
        const floatingLinks = document.querySelectorAll('.floating strong');
        floatingLinks.forEach(link => {
            const text = link.textContent;
            link.innerHTML = '';
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.setProperty('--i', index);
                link.appendChild(span);
            });
        });
    }, []);

    return (
        <div className="bio-container prevent-select bio-top ${deviceClass}">
            <p>I'm a first-class graduate of Software Engineering
                who has worked in various data, software development and managements jobs for over a decade in the <b>retail</b>, <b>construction</b> and <b>electric vehicle</b> industries.
            </p>
            <p>
                This September I will be beginning my new journey into my passion; <b>Cyber Security</b>, by studying for my MSc. I couldn't be more excited to dedicate
                my time and skills to making the digital world a safer place.  
            </p>
            <p>I recently gained two years of experience in management, exploring my capabilities running large teams under pressure. I managed a team of 15 staff; focusing on consistent delivery, working standards and skills coaching. Previously, I helped large and small companies transform their data analysis.</p>
            <p>
                <a className='floating'>Check back soon for my new <strong>Blog!</strong>
                </a>
            </p>
        </div>
    );
}

export default Bio;