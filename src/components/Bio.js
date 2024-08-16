import React, {useEffect} from 'react';
import "../styles/Bio.css"

const Bio = ({deviceClass}) => {

    return (
        <div className="reset-padding medium-padding-bottom prevent-select ${deviceClass}">
            <h1 className='medium-margin-bottom'>About</h1>
            <h4 className='small-padding-bottom'>I'm a first-class graduate of Software Engineering
                who has worked in various data, software development and management jobs for over a decade in <a href='https://www.sainsburys.co.uk' alt="sainsburys" rel="noreferrer" target='_blank'><b>Retail management</b></a>, <a href='https://www.marksandspencer.com' alt="marksandspencer" rel="noreferrer" target='_blank'><b>Data Analysis</b></a>, <b>construction</b> and <b>electric vehicle</b> industries.
            </h4>
            <h4 className='small-padding-bottom'>
                This September I will be beginning my new journey into my passion; <b>Cyber Security</b>, by studying for my MSc. I couldn't be more excited to dedicate
                my time and skills to making the digital world a safer place.  
            </h4>
            <h4 className='small-padding-bottom'>I recently gained two years of experience in management, exploring my capabilities running large teams under pressure. I managed a team of 15 staff; focusing on consistent delivery, working standards and skills coaching. Previously, I helped large and small companies transform their data analysis.</h4>
            <h4 className="bio-blog-link">
                    Check back soon for my new  
                        <a href="chrisselwoodblog.blogger.com" alt="blog" rel="noreferrer" target='_blank'>
                            &nbsp;<b>Blog!</b>
                        </a>
            </h4>
        </div>
    );
}

export default Bio;