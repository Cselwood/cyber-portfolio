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
            <b className='blocky hello-line'>Hello</b>
            <div className='name-flex'>
                <h1 className='medium-margin-bottom'>I'm Chris Selwood</h1>
                <div className='links'>
                    <a className='link left-hand-margin' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'>
                        <Icon className='icon' path={mdiLinkedin} size={1.5}/>
                    </a>
                    <a className='link left-hand-margin' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                        <Icon className='icon' path={mdiGithub} size={1.5} />
                    </a>
                </div>
            </div>
            <h3 className='medium-margin-top small-margin-bottom blocky student-line'>Student - Cyber Security & Forensics MSc</h3>
            <h3 className='small-margin-bottom  student-line'>(Sep 2024 - Sep 2025)</h3>
            <h3 className='small-margin-bottom uni-line'>
                <a href="https://twitter.com/UniWestminster" alt="UniWestminster" rel="noreferrer" target='_blank'>
                    <b>@UniWestminster</b>       
                </a>
            </h3>
            <div className="nav-wrapper medium-margin-top">
                <div className="nav-section small-padding-bottom " onClick={() => scrollToSection("about")} alt="about">
                    <span className={`${currentSection === 'about' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link blocky ${currentSection === 'about' ? 'active' : ''}`}><strong>About</strong></h5>
                </div>
                <div className='nav-section small-padding-bottom ' onClick={() => scrollToSection("experience")} alt="experience">
                    <span className={`${currentSection === 'experience' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link blocky ${currentSection === 'experience' ? 'active' : ''}`}><strong>Experience</strong></h5>
                </div>
                <div className='nav-section small-padding-bottom ' onClick={() => scrollToSection("blog")} alt="blog">
                    <span className={`${currentSection === 'blog' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link blocky ${currentSection === 'blog' ? 'active' : ''}`}><strong>Blog</strong></h5>
                </div>
            </div>

            
        </div>
    );
}

export default Card;
