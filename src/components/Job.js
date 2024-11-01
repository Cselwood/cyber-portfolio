import React from 'react';
import Icon from '@mdi/react';
import { mdiWrench } from '@mdi/js';
import { mdiDiamondOutline } from '@mdi/js';
import "../styles/Job.css"

const Job = ({year, title, company, METRICARRAY, HARDSKILLS, SOFTSKILLS, location}) => {
    return (
        <div className="job-container small-margin-top small-padding-top small-padding-bottom medium-margin-bottom">
            <div>
                <div className='small-padding-bottom'>
                    <h4 className='alt small-padding-bottom'>
                        {title}
                    </h4>
                    <p className='small-padding-bottom'>{company}</p>
                    <p className='small-padding-bottom'>{year}</p>
                    <p>{location}</p>
                </div>
                <div className='metric-container'>
                    <div className='small-margin-bottom'>
                        <li className='small-margin-top'>
                            {METRICARRAY?.map((metric, index) => (
                                <ul key={index}>
                                    <p className='job-metric-description small-padding-bottom small-margin-bottom small-margin-top'>
                                        <b>{metric.metric_title}</b> {metric.metric_description}
                                    </p>
                                </ul>
                            ))}
                        </li>
                    </div>
                </div>
                
                    <div className='job-skills'>
                        <div className='diamond-outer'>
                            <Icon className='diamond' path={mdiWrench} size={1} />
                        </div>
                        <div className='diamond-flex'>
                            {HARDSKILLS?.map((skill, index) => (
                            <div key={index}>
                                
                                <p className='alt skill right-hand-margin micro-padding-top '> 
                                    {skill.skill_title}                                </p>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='job-skills small-margin-bottom small-padding-bottom small-padding-top'>
                        <div className='diamond-outer'>
                            <Icon className='diamond' path={mdiDiamondOutline} size={1} />
                        </div>
                        <div className='diamond-flex'>
                            {SOFTSKILLS?.map((skill, index) => (
                            <div key={index}>
                                <p  className='alt skill right-hand-margin micro-padding-top'>
                                    {skill.skill_title}
                                </p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='seperator-small small-margin-top'></div> 
            </div>
        </div>
    );
}

export default Job; 