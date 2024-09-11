import React, { useState, useEffect, useRef } from 'react';
import {ReactComponent as Sains} from "../assets/sains.svg";
import {ReactComponent as MS} from "../assets/MS.svg";
import {ReactComponent as Stef} from "../assets/Stef.svg";
import {ReactComponent as Zapi} from "../assets/Zapi.svg";
import Icon from '@mdi/react';
import { mdiWrench } from '@mdi/js';
import { mdiDiamondOutline } from '@mdi/js';
import { mdiCircleSmall } from '@mdi/js';
import "../styles/Job.css"

const Job = ({year, title, company, METRICARRAY, HARDSKILLS, SOFTSKILLS, website, weblabel, location}) => {
    const CompanySVG = (company) => {
        switch (company) {
            case "Sainsbury's":
                return <Sains className='job-logo'/>;
            case "Marks & Spencer":
                return <MS className='job-logo small-margin-bottom'/>;
            case "Stef & Philips":
                return <Stef className='job-logo small-margin-bottom'/>;
            case "Zapi UK":
                return <Zapi className='job-logo small-margin-bottom'/>;
            default:
                return null;
        }
    };

    return (
        <div className="job-container shadow small-padding-bottom medium-margin-bottom" >
            <div className="job-list">
                <div className='job-list-first-flex small-padding-bottom medium-padding-top'>
                    <div className='description-width'>
                        <h3 className='job-name small-padding-bottom small-margin-bottom small-padding-top small-margin-top '>
                            {title}
                        </h3>
                        <b>{year}</b>
                        <p className='small-padding-top small-margin-bottom'>{location}</p>
                        <a className='job-website small-margin-bottom small-margin-top blue-button' href={website} alt={company} rel="noreferrer" target='_blank'>
                            <p>Go to {weblabel}</p>
                        </a>
                    </div>
                    
                    <div className='company-width'>
                        {CompanySVG(company)}
                    </div>
                </div>
                <div className='metric-container'>
                    <div className='small-margin-bottom'>
                        <div className='small-margin-top'>
                            {METRICARRAY?.map((metric, index) => (
                                <div key={index}>
                                    <h4 className='metric-title'>
                                        <b>{metric.metric_title}</b>
                                    </h4>
                                    <div className='metric-bulletpoint'>
                                        <p className='job-metric-description small-padding-bottom small-margin-bottom small-margin-top'>
                                            {metric.metric_description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='job-skills'>
                        <div className='diamond-outer'>
                            <Icon className='diamond' path={mdiWrench} size={1} />
                        </div>
                        <div className='diamond-flex'>
                            {HARDSKILLS?.map((skill, index) => (
                            <div key={index}>
                                
                                <p className='hard-skill skill right-hand-margin micro-padding-top micro-padding-bottom '> 
                                    {skill.skill_title}                                </p>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='job-skills small-margin-bottom small-padding-top'>
                        <div className='diamond-outer'>
                            <Icon className='diamond' path={mdiDiamondOutline} size={1} />
                        </div>
                        <div className='diamond-flex'>
                            {SOFTSKILLS?.map((skill, index) => (
                            <div key={index}>
                                <p  className='soft-skill skill right-hand-margin micro-padding-top micro-padding-bottom '>
                                    {skill.skill_title}
                                </p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='job-skills small-margin-bottom '>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Job; 