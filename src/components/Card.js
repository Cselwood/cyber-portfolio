import React from 'react';
import Icon from '@mdi/react';
import { ReactComponent as UK } from "../assets/UK.svg";
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import Photo from "../components/Photo";
import '../styles/Card.css';

function Card({ currentSection }) {    
    const scrollToSection = (sectionId) => {
        const section  = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({behavior: "smooth"});
            }
    };

    return (
        <div className={`card prevent-select ${currentSection}`}>
            <h1 className='prevent-select'>Chris Selwood</h1>
            <h2>Student @ Cyber Security MSc · London, UK 
                <UK className='location-svg' /></h2> 
            <h3>Driven by a passion for cyber security, ethical hacking, and building a safer digital world.</h3>
            <Photo className="photo" />
            <div className='location-card'></div>
            <div className='links'>
                <a className='link' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'> 
                    <Icon path={mdiLinkedin} size={1.2} />
                </a>
                <a className='link' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                    <Icon path={mdiGithub} size={1.2} />
                </a>
            </div>
            <div className="nav-wrapper">
                <div className="nav-section" onClick={() => scrollToSection("about")} alt="about">
                    <span className={`${currentSection === 'about' ? 'active' : ''}`}></span>
                    <h5 className={currentSection === 'about' ? 'active' : ''}>About</h5>
                </div>
                <div className='nav-section' onClick={() => scrollToSection("experience")} alt="experience">
                    <span className={`${currentSection === 'experience' ? 'active' : ''}`}></span>
                    <h5 className={currentSection === 'experience' ? 'active' : ''}>Experience</h5>
                </div>
                <div className='nav-section' onClick={() => scrollToSection("blog")} alt="blog">
                    <span className={`${currentSection === 'blog' ? 'active' : ''}`}></span>
                    <h5 className={currentSection === 'blog' ? 'active' : ''}>Blog</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;
