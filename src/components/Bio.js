import React from 'react';
import {ReactComponent as Sains} from "../assets/sains.svg";
import {ReactComponent as MS} from "../assets/MS.svg";
import {ReactComponent as Stef} from "../assets/Stef.svg";
import {ReactComponent as Zapi} from "../assets/Zapi.svg";
import {ReactComponent as Dome} from "../assets/dome.svg";
import "../styles/Bio.css"

const Bio = ({deviceClass}) => {



    return (
        <div className="reset-padding prevent-select ${deviceClass}">
            <h1 className='medium-margin-bottom white'>About</h1>
            <h4 className='small-margin-bottom white'>I'm a first-class graduate of Software Engineering, in London,
                who has worked in various data, software development and management jobs for over a decade in the 
                <a href="https://www.zapigroup.com/en/" rel="noreferrer" target="_blank" alt="zapi">
                    <b className='hover2'> electric vehicle & robotics</b>
                </a>,
                <a href="https://www.marksandspencer.co.uk" rel="noreferrer" target="_blank" alt="marksandspencer">
                    <b className='hover2'> finance</b>
                </a>,  
                <a href="https://www.sainsburys.co.uk" rel="noreferrer" target="_blank" alt="sainsburys">
                    <b className='hover2'> retail management</b>
                </a> and
                <a href="https://stefphilips.com/" rel="noreferrer" target="_blank" alt="stef&philips">
                    <b className='hover2'> construction</b>
                </a> industries.
            </h4>
            <h4 className='small-margin-bottom white'>
                This September I will be beginning my new journey into my passion; <b className='hover2'>Cyber Security</b>, by studying for my MSc <b className='hover2'>(September 2024 - September 2025)</b>. I couldn't be more excited to dedicate
                my time and skills to making the digital world a safer place. 
            </h4>
            <h4 className='small-padding-bottom small-padding-top white'>I recently gained two years of experience in management, exploring my capabilities running large teams under pressure. I managed a team of 15 staff; focusing on consistent delivery, working standards and skills coaching. Previously, I helped large and small companies transform their data analysis.</h4>
            <h4 className='small-padding-bottom small-padding-top white'>For one of my side projects I was lead front-end designer and ReactJS programmer for 
                <a href="https://domekleener.co.uk/" alt="domekleener.co.uk" rel='noreferrer' target='_blank'> <b className='hover2'>Domekleener</b></a>
                , an exciting security startup in London. </h4>
            <h4 className='small-padding-bottom small-padding-top small-margin-bottom white'>Currently training for my 
                <a href='https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html' alt="CCNA" rel='noreferrer' target='_blank'> <b className="hover2" >CCNA</b></a>
                , alongside my Masters.
                </h4>
            <h4 className="bio-blog-link medium-margin-bottom white">
                    Check back soon for my new  
                        <a href="https://chrisselwoodblog.blogspot.com" alt="blog" rel="noreferrer" target='_blank'>
                            &nbsp;
                            <b className='hover2'>
                                <span>B</span>
                                <span>L</span>
                                <span>O</span>
                                <span>G</span>
                                <span>!</span>
                            </b>
                        </a>
            </h4>
            <h2 className='medium-margin-top medium-margin-bottom white'>Companies I've Worked With</h2>
            <div className='svg-container small-margin-top'>
                <Zapi className="business"/>
                <MS className="business"/>
                <Sains className="business sainsburys"/>
                <Stef className="business"/>
                <Dome className="business"/>
            </div>
        </div>
    );
}

export default Bio;