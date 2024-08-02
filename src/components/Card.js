import React from 'react';
import Icon from '@mdi/react';
import {ReactComponent as UK} from "../assets/UK.svg"
import { mdiLinkedin, mdiGithub, mdiCardAccountMail   } from '@mdi/js';
import Photo from "../components/Photo";
import '../styles/Card.css';

function Card() {
    return (
        <div className="card prevent-select">
            <h1 className='prevent-select'>Chris Selwood</h1>
            <h2>Student @ Cyber Security MSc · London, UK 
                <UK className='location-svg' /></h2> 
            <h3>Driven by a passion for cyber security, ethical hacking, and building a safer digital world.</h3>
            <Photo className="photo"/>
            <div className='location-card'>
            </div>
            <div className='links'>
                <a className='link' href='https://www.linkedin.com/in/chris-selwood/' alt='LinkedIn' target='select'> 
                    <Icon path={mdiLinkedin} size={1.2} />
                </a>
                <a className='link' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                    <Icon path={mdiGithub} size={1.2} />
                </a>
                <a className='link' href='https://github.com/Cselwood' alt='GitHub' target='select'>
                    <Icon path={mdiCardAccountMail} size={1.2} />
                </a>
            </div>
        </div>
    );
}

export default Card;