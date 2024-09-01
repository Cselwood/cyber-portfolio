import React, {useState, useRef, useEffect} from 'react';
import Icon from '@mdi/react';
import { mdiArrowDown, mdiArrowUp } from '@mdi/js';
import "../styles/Job.css"

const Job = ({year, title, company, description, METRICARRAY, HARDSKILLS, SOFTSKILLS, site}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isExpanded) contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        else contentRef.current.style.maxHeight = '0px';
    }, [isExpanded]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <button className="job-container small-padding-top small-padding-bottom medium-margin-bottom backgrounded shadow rounded" onClick={toggleExpand}>
            <ul className="job-list flex-column-standard">
                <li><h2 className='h1-small job-name small-margin-bottom small-margin-top'>{title}</h2></li>
                <li>
                    <div className='job-name small-margin-bottom'>
                        <b>
                            {site ? (
                                <a href={site} rel='noreferrer' alt={company} target='_blank'>
                                    {company}
                                </a>
                            ) : (
                                company
                            )}
                        </b>
                    </div>
                </li>
                <li><div className='job-year small-margin-bottom'><b>{year}</b></div></li>
                <li>
                    <ul className='no-padding small-margin-bottom small-margin-top'>
                        {METRICARRAY?.map((metric, index) => (
                            <li key={index} className='small-margin-top'>
                                <b className='small-margin-bottom small-margin-top'>{metric.metric_title} 
                                    <p className='job-metric-description small-margin-bottom small-margin-top'>{metric.metric_description}</p>
                                </b>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <div className='job-skills small-margin-bottom small-margin-top'>
                        {HARDSKILLS?.map((skill, index) => (
                            <div key={index}>
                                <p className='hard-skill skill right-hand-margin micro-padding-top micro-padding-bottom micro-margin-bottom '> 
                                    {skill.skill_title}
                                </p>
                            </div>
                        ))}
                        
                        {SOFTSKILLS?.map((skill, index) => (
                            <div key={index}>
                                <p  className='soft-skill skill right-hand-margin micro-padding-top micro-padding-bottom micro-margin-bottom '>
                                    {skill.skill_title}
                                </p>
                            </div>
                        ))}
                    </div>
                </li>

                <div>
                    {isExpanded ? <Icon className='icon-white' path={mdiArrowUp} size={1}/> : <Icon className='icon-white' path={mdiArrowDown} size={1}/>}
                </div>
                
                <div className='job-description-container' ref={contentRef}>
                    <h3 className='small-margin-bottom'>Full Description</h3>
                    <p className='job-description small-margin-bottom'>{description}</p>
                </div>
            </ul>
        </button>
    );
}

export default Job; 