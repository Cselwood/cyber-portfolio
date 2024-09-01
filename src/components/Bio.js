import React from 'react';
import Icon from '@mdi/react';
import { mdiGreaterThan } from '@mdi/js';
import { mdiCarElectricOutline  } from '@mdi/js';
import { mdiShoppingOutline  } from '@mdi/js';
import { mdiCurrencyGbp  } from '@mdi/js';
import { mdiStoreOutline  } from '@mdi/js';
import { mdiAccountHardHatOutline } from '@mdi/js';
import Degree from "../assets/degree_scan.pdf"
import "../styles/Bio.css"

const Bio = () => {
    return (
        <div className="global-section reset-padding prevent-select bio-container">
            <h1 className='small-margin-bottom about'>Who am I?</h1>
                <a href="#jobs">
                    <p className="hover2 bio-experience-link">
                        View my work history <Icon className='bio-icon--arrow' path={mdiGreaterThan} size={0.4} />
                    </p>
                </a>
            <h3 className='small-margin-bottom medium-margin-top'>
                I'm a new MSc student studying Cyber Security & Forensics, <br/>and a <a href={Degree} target='_blank' rel='noreferrer'><b className='hover2'>first-class graduate</b></a> of Software Engineering.
            </h3>
            <h3 className='medium-margin-bottom'>
                I have a decade of experience in varied roles in data,<br/> software development and management. 
            </h3>
            <div className="industries-flex medium-margin-bottom">
                <a href="https://www.zapigroup.com/en/" rel="noreferrer" target="_blank" alt="zapi">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                    <Icon className='small-margin-bottom industry-icon' path={mdiCarElectricOutline } size={1.5}/>
                        <b className='hover3 industry-text'>Orchestrated national operations for a leading, international, EV firm.</b>
                    </div>
                </a>
                <a href="https://www.marksandspencer.com" rel="noreferrer" target="_blank" alt="marksandspencer">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                        <Icon className='small-margin-bottom industry-icon' path={mdiCurrencyGbp } size={1.5}/>
                        <b className='hover3 industry-text'> Championed financial operations with advanced database solutions.</b>
                    </div>
                </a>
                <a href="https://www.sainsburys.co.uk" rel="noreferrer" target="_blank" alt="sainsburys">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                        <Icon className='small-margin-bottom industry-icon' path={mdiStoreOutline } size={1.5}/>
                        <b className='hover3 industry-text'>Led a team to success as a retail manager, driving growth and excellence.</b>
                    </div>
                </a>
                <a href="https://www.newbrandmedia.com/" rel="noreferrer" target="_blank" alt="zapi">
                        <div className='industry-flex small-margin-bottom small-margin-top'>
                            <Icon className='small-margin-bottom industry-icon' path={mdiShoppingOutline } size={1.5}/>
                            <b className='hover3 industry-text'>Developed a high-impact website and spearheaded marketing strategies for a start-up.</b>
                        </div>
                    </a>
                <a href="https://stefphilips.com/" rel="noreferrer" target="_blank" alt="stef&philips">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                    <Icon className='small-margin-bottom industry-icon' path={mdiAccountHardHatOutline} size={1.5}/>
                        <b className='hover3 industry-text'>Created innovative workflow solutions; automating processes and accounting.</b>
                    </div>
                </a> 
            </div>
        </div>
    );
}

export default Bio;