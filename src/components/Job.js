import React, {useState, useRef, useEffect} from 'react';
import Icon from '@mdi/react';
import { mdiArrowDown, mdiArrowUp } from '@mdi/js';
import "../styles/Job.css"

const Job = ({year, title, company, description, METRICARRAY, HARDSKILLS, SOFTSKILLS}) => {
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
        <button className="job-container prevent-select medium-margin-bottom" onClick={toggleExpand}>
            <div className='job-year medium-margin-top'><b>{year}</b></div>
            <ul className="job-list">
                <li><h2>{title} · {company}</h2></li>
                <li>
                    <ul className='job-metrics'>
                        {METRICARRAY?.map((metric, index) => (
                            <li key={index} className='metric-flex '>
                                <p className='job-metric-title'>{metric.metric_title} <strong className='job-metric-description'>{metric.metric_description}</strong>
                                </p>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <div className='job-skills'>
                        {HARDSKILLS?.map((skill, index) => (
                            <div key={index}>
                                <p  className='hard-skill'>
                                    {skill.skill_title}
                                </p>
                            </div>
                        ))}
                        
                        {SOFTSKILLS?.map((skill, index) => (
                            <div key={index}>
                                <p  className='soft-skill'>
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
                    <p className='job-description'>{description}</p>
                </div>
                
                
            </ul>
        </button>
    );
}

export default Job; 