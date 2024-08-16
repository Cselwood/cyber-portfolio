import React from 'react';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import '../styles/Card.css';

function Card({ currentSection }) {    
    const scrollToSection = (sectionId) => {
        const section  = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({behavior: "smooth"});
            }
    };

    return (
        <div className={`${currentSection}`}>
            <h1 className='small-margin-bottom'>Chris Selwood</h1>
            <h2 className='small-margin-bottom'>Cyber Security MSc <a href="https://www.westminster.ac.uk/" alt="UniWestminster" rel='noreferrer' target='_blank'>@UniWestminster</a></h2>
            <h3 className='small-margin-bottom'>(September 2024 - September 2025)</h3>
            <h3 className='small-margin-bottom'>London, UK</h3>
            <h4 className='small-margin-bottom'>Driven by a passion for cyber security, ethical hacking, and building a safer digital world.</h4>

            <div className="nav-wrapper medium-margin-top">
                <div className="nav-section small-padding-bottom " onClick={() => scrollToSection("about")} alt="about">
                    <span className={`${currentSection === 'about' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}><strong>About</strong></h5>
                </div>
                <div className='nav-section small-padding-bottom ' onClick={() => scrollToSection("experience")} alt="experience">
                    <span className={`${currentSection === 'experience' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link small-padding-botton ${currentSection === 'experience' ? 'active' : ''}`}><strong>Experience</strong></h5>
                </div>
                <div className='nav-section small-padding-bottom ' onClick={() => scrollToSection("blog")} alt="blog">
                    <span className={`${currentSection === 'blog' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link ${currentSection === 'blog' ? 'active' : ''}`}><strong>Blog</strong></h5>
                </div>
            </div>
            
            <div className='links'>
                <a className='link' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'> 
                    <Icon path={mdiLinkedin} size={1.2} />
                </a>
                <a className='link' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                    <Icon path={mdiGithub} size={1.2} />
                </a>
            </div>
        </div>
    );
}

export default Card;
