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
            <b className='blocky'>Hello</b>
            <h1 className='small-margin-bottom'>I'm Chris Selwood</h1>
            <h3 className='small-margin-bottom blocky'>Student - Cyber Security MSc</h3>
            <h3 className='small-margin-bottom'>
                <a href="https://twitter.com/UniWestminster" alt="UniWestminster" rel="chrisselwood.com" target='_blank'>@UniWestminster (Sep 2024 - Sep 2025)        
                </a>
            </h3>
            <div className="nav-wrapper medium-margin-top">
                <div className="nav-section small-padding-bottom " onClick={() => scrollToSection("about")} alt="about">
                    <span className={`${currentSection === 'about' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link blocky ${currentSection === 'about' ? 'active' : ''}`}><strong>About</strong></h5>
                </div>
                <div className='nav-section small-padding-bottom ' onClick={() => scrollToSection("experience")} alt="experience">
                    <span className={`${currentSection === 'experience' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link blocky small-padding-botton ${currentSection === 'experience' ? 'active' : ''}`}><strong>Experience</strong></h5>
                </div>
                <div className='nav-section small-padding-bottom ' onClick={() => scrollToSection("blog")} alt="blog">
                    <span className={`${currentSection === 'blog' ? 'active' : ''}`}></span>
                    <h5 className={`nav-link blocky ${currentSection === 'blog' ? 'active' : ''}`}><strong>Blog</strong></h5>
                </div>
            </div>

            <div className='links medium-margin-bottom'>
                <a className='link small-margin-bottom' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'> 
                    <div className='icon-name-flex'>   
                        <Icon path={mdiLinkedin} size={1.2}/>
                        <h3 className='icon-name loose'>/chris-selwood</h3>
                    </div>
                </a>
                <a className='link small-margin-bottom' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                    <div className='icon-name-flex'>   
                        <Icon path={mdiGithub} size={1.2} />
                        <h3 className='icon-name loose'>/cselwood</h3>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Card;
