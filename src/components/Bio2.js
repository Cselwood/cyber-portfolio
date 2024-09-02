import React from 'react';
import {ReactComponent as Sains} from "../assets/sains.svg";
import {ReactComponent as MS} from "../assets/MS.svg";
import {ReactComponent as Stef} from "../assets/Stef.svg";
import {ReactComponent as Zapi} from "../assets/Zapi.svg";
import {ReactComponent as Dome} from "../assets/dome.svg";
import {ReactComponent as NewBrand} from "../assets/newbrand.svg";
import Icon from '@mdi/react';
import { mdiBriefcaseOutline } from '@mdi/js';
import Degree from "../assets/degree_scan.pdf";
import ccna from "../assets/cisco.svg";
import uni from "../assets/uni.svg";
import "../styles/Bio.css"
import "../styles/Certs.css"

const Bio2 = () => {
    return (
        <div className="reset-padding prevent-select bio-container medium-margin-top">
            <h2 className='small-margin-bottom'>What I'm studying.</h2>
            <p className='small-padding-top medium-margin-bottom bio-paragraph'>
                This September, I’m embarking on an exciting new chapter by pursuing an MSc (September 2024 - September 2025) while also studying for my CCNA certification. I'm eager to deepen my expertise and contribute to making the digital world a safer place.
            </p>

            <div className='certs-container'>
                <div className='ccna-container left-hand-margin right-hand-margin medium-margin-bottom small-padding-bottom'>
                    <div className='certs-svg-container'>
                        <img className='bio-svg' src={ccna} alt="ccna"/>
                    </div>
                    <h2 className='certs-title small-margin-bottom'>Cisco Certified Network Associate</h2>
                    <p className='certs-description small-margin-top'>Cisco CCNA 200-301</p>
                    <p className='certs-description small-margin-top'>Network Fundamentals, IP Connectivity, Security Basics</p>
                    <b className='certs-description small-margin-top'>Estimated Completion Date:</b>
                    <b className='certs-description small-margin-top small-margin-bottom hover2'>
                        December, 2024
                    </b>
                    <a className='small-margin-top small-margin-bottom simple-button--blue' href='https://www.cisco.com/c/en/us/training-events/training-certifications/exams/current-list/ccna-200-301.html' alt="cisco" target='_blank' rel='noreferrer'>
                        <h4>Show me more.</h4>
                    </a>
                </div>
                <div className='ccna-container left-hand-margin right-hand-margin medium-margin-bottom small-padding-bottom'>
                    <div className='certs-svg-container'>
                        <img className='bio-svg' src={uni} alt="Uni"/>
                    </div>
                    <h2 className='certs-title small-margin-bottom'>MSc Cyber Security & Forensics</h2>
                    <b className='certs-description small-margin-top'>Beginning Date:</b>
                    <b className='certs-description small-margin-top small-margin-bottom hover2'>
                        September, 2024
                    </b>
                    <b className='certs-description small-margin-top'>Completion Date:</b>
                    <b className='certs-description small-margin-top small-margin-bottom hover2'>
                        September, 2025
                    </b>
                    <a className='small-margin-top simple-button--blue' href='https://www.westminster.ac.uk/computer-science-and-engineering-courses/2024-25/september/full-time/cyber-security-and-forensics-msc' alt="course-details" target='_blank' rel='noreferrer'>
                        <h4>Check it out!</h4>
                    </a>
                </div>
            </div>

            <a className='blue-button medium-margin-bottom' href="https://www.linkedin.com/messaging/compose/?recipient=chris-selwood" alt="linkedin" rel="noreferrer" target='_blank'>
                <h4>Ask me how it's going.</h4>
            </a>

            <h2 className='small-margin-bottom'>What I've earned.</h2>
            <div className='earned-container medium-margin-bottom medium-margin-top'>
                <img className='bio-svg small-padding-bottom' src={uni} alt="Uni"/>
                <h2>BEng Software Engineering</h2>
                <p className='small-padding-top'>1st Class with Honours (2017)</p>
                <p className='small-padding-top'>Winner of High Achievement Scholarship Award (2015)</p>
                <p className='small-padding-top'>Dean's List Member (2015, 2016, 2017)</p>
                <a href={Degree} target='_blank' alt="Degree" rel="noreferrer">
                    <p className='small-padding-top hover2'>See my degree.</p>
                </a>
            </div>

            <div className='business-container medium-padding-bottom'>
                <Icon className='medium-margin-top bio2-icon--briefcase' path={mdiBriefcaseOutline} size={2} />
                <h2 className='small-margin-top small-margin-bottom'>Companies I've worked with.</h2>
                <a className='simple-button--grey small-margin-bottom small-margin-top' href='#jobs'>
                    <p>Learn More</p>
                </a>
                <p className='left-hand-padding right-hand-padding small-margin-top medium-margin-bottom'>Collaborating with industry leaders and dynamic small businesses to drive success.</p>
                <div className='svg-container small-margin-top'>
                    <Zapi className="business"/>
                    <MS className="business"/>
                    <Sains className="business"/>
                    <Stef className="business"/>
                    <Dome className="business"/>
                    <NewBrand className="business"/>
                </div>
            </div>

        </div>
    );
}

export default Bio2;