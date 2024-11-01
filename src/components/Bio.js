import React from 'react';
import Icon from '@mdi/react';
import { mdiCarElectricOutline  } from '@mdi/js';
import { mdiShoppingOutline  } from '@mdi/js';
import { mdiCurrencyGbp  } from '@mdi/js';
import { mdiStoreOutline  } from '@mdi/js';
import { mdiAccountHardHatOutline } from '@mdi/js';
import "../styles/Bio.css"

const Bio = () => {
    return (
        <div>
            <h2 className='alt small-margin-bottom small-padding-bottom'>Who am I?</h2>

            <p className='small-margin-bottom'>Over a decade of experience in operations, data, and tech-driven innovation.</p>
            <p className='small-margin-bottom'>Expert in optimising finance, data and retail systems.</p>
            <p className='small-margin-bottom'>Driven by a genuine passion for cyber security, focusing on blue-team roles.</p>
            <p className='small-margin-bottom'>Results-focused, resilient, and growth-oriented.</p>
            <p className='small-margin-bottom'>More than anything, driven by a genuine passion for cyber security.</p>
            
            <a href='#jobs'>
                <p className='hover2 small-margin-bottom'>Explore My Work</p>
            </a>

            <div className="industries-flex small-padding-top medium-margin-bottom">
                <a href="https://www.zapigroup.com/en/" rel="noreferrer" target="_blank" alt="zapi">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                        <Icon className='small-margin-bottom industry-icon' path={mdiCarElectricOutline } size={1.5}/>
                        <p className='hover2 industry-text'>Developed national EV operations.</p>
                    </div>
                </a>
                <a href="https://www.marksandspencer.com" rel="noreferrer" target="_blank" alt="marksandspencer">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                        <Icon className='small-margin-bottom industry-icon' path={mdiCurrencyGbp } size={1.5}/>
                        <p className='hover2 industry-text'> Revamped financial analytics.</p>
                    </div>
                </a>
                <a href="https://www.sainsburys.co.uk" rel="noreferrer" target="_blank" alt="sainsburys">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                        <Icon className='small-margin-bottom industry-icon' path={mdiStoreOutline } size={1.5}/>
                        <p className='hover2 industry-text'>Drove retail growth.</p>
                    </div>
                </a>
                <a href="https://www.newbrandmedia.com/" rel="noreferrer" target="_blank" alt="zapi">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                        <Icon className='small-margin-bottom industry-icon' path={mdiShoppingOutline } size={1.5}/>
                        <p className='hover2 industry-text'>Developed high-impact websites.</p>
                    </div>
                </a>
                <a href="https://stefphilips.com/" rel="noreferrer" target="_blank" alt="stef&philips">
                    <div className='industry-flex small-margin-bottom small-margin-top'>
                        <Icon className='small-margin-bottom industry-icon' path={mdiAccountHardHatOutline} size={1.5}/>
                        <p className='hover2 industry-text'>Automated workflows.</p>
                    </div>
                </a> 
            </div>
            
            <div className='seperator small-margin-top small-margin-bottom'></div> 
        </div>
    );
}

export default Bio;