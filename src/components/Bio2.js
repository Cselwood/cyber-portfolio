import React from 'react';
import {ReactComponent as Sains} from "../assets/sains.svg";
import {ReactComponent as MS} from "../assets/MS.svg";
import {ReactComponent as Stef} from "../assets/Stef.svg";
import {ReactComponent as Zapi} from "../assets/Zapi.svg";
import {ReactComponent as Dome} from "../assets/dome.svg";
import {ReactComponent as NewBrand} from "../assets/newbrand.svg";
import Degree from "../assets/degree_scan.pdf";
import ccna from "../assets/cisco.svg";
import uni from "../assets/uni.svg";
import "../styles/Bio.css"
import "../styles/Certs.css"

const Bio2 = () => {
    return (
        <div className="medium-margin-top">
            <h2 className='alt medium-margin-bottom'>What I'm studying.</h2>

            <h4>MSC Cyber Security & Forensics</h4>
            <img className='bio-svg' src={uni} alt="Uni"/>
            <p className='small-padding-bottom'>Sep. 2024 - Sep. 2025</p>

            <ul className='small-margin-top small-padding-top small-margin-bottom small-padding-bottom'>
                <li>
                    <p><b>Mastering Core Frameworks:</b> PTES, STRIDE, DREAD, Attack Trees and advanced risk assessment.</p>
                </li>
                <li>
                    <p><b>Real-world Environments:</b> Network configuration, vulnerability analysis, and secure protocol deployment.</p>
                </li>
                <li>
                    <p><b>Deep dive into encryption:</b> Advanced AES, RSA, and future-proof cryptographic techniques.</p>
                </li>
                <li>
                    <p><b>Blue-team defence skills:</b> Threat detection, response, and proactive system fortification.</p>
                </li>
                <li>
                    <p><b>Advanced Penetration Testing:</b> Cutting-edge techniques for identifying and mitigating security vulnerabilities.</p>
                </li>
            </ul>

            <a className='blue-button small-margin-top medium-margin-bottom small' href='https://www.westminster.ac.uk/computer-science-and-engineering-courses/2024-25/september/full-time/cyber-security-and-forensics-msc' alt="course-details" target='_blank' rel='noreferrer'>
                <p>Check it out!</p>
            </a>

            <div className='seperator small-margin-bottom'></div> 

            
            <h4 className='small-margin-top small-padding-top'>Cisco Certified Network Associate - CCNA 200-301</h4>
            <img className='bio-svg' src={ccna} alt="Uni"/>
            <p className='small-padding-bottom'>Estimated Jan. 2025</p>

            <ul className='small-margin-top small-padding-top small-margin-bottom small-padding-bottom'>
                <li>
                    <p><b>Network Fundamentals:</b> Mastering IP, subnetting, and routing basics.</p>
                </li>
                <li>
                    <p><b>Switching & Routing:</b> Configuring Cisco switches and routers.</p>
                </li>
                <li>
                    <p><b>Security Essentials:</b> Implementing secure network protocols.</p>
                </li>
                <li>
                    <p><b>Troubleshooting Skills:</b> Diagnosing and resolving network issues.</p>
                </li>
                <li>
                    <p><b>IP Services:</b> Managing DHCP, NAT, and DNS setups.</p>
                </li>
            </ul>

            <a className='simple-button--white medium-margin-bottom' href="https://www.linkedin.com/messaging/compose/?recipient=chris-selwood" alt="linkedin" rel="noreferrer" target='_blank'>
                <p>Ask me more!</p>
            </a>

            <div className='seperator small-margin-bottom small-padding-bottom'></div> 

            <h2 className='alt small-margin-top small-padding-top small-margin-bottom'>What I've earned.</h2>

            <ul className='small-margin-bottom small-padding-bottom'>
                <li>
                    <img className='bio-svg small-padding-top' src={uni} alt="Uni"/>
                </li>
                <li>
                    <p><b>Course:</b> BEng Software Engineering</p>
                </li>
                <li>
                    <p><b>Class:</b> First-Class with Honours (1:1)</p>
                </li>
                <li>
                    <p><b>Graduated:</b> July 2017</p>
                </li>
                <li>
                    <p className=''>Winner of High Achievement Scholarship Award (2015)</p>
                </li>
                <li>
                    <p className=''>Dean's List Member (2015, 2016, 2017)</p>
                </li>
                <li>
                    <a href={Degree} target='_blank' alt="Degree" rel="noreferrer">
                        <p className='hover2'>See my degree.</p>
                    </a>
                </li>
            </ul>

            <h2 className='alt small-margin-top medium-padding-top medium-margin-bottom'>Companies I've worked with.</h2>
                <div className='svg-container small-margin-top'>
                    <Zapi className="business"/>
                    <MS className="business"/>
                    <Sains className="business"/>
                    <Stef className="business"/>
                    <Dome className="business"/>
                    <NewBrand className="business"/>
                </div>

        <div className='seperator small-margin-top small-margin-bottom small-padding-bottom'></div> 

        </div>
    );
}

export default Bio2;