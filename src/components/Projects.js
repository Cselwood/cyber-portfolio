import React from "react";
import Icon from '@mdi/react';
import { mdiRocket } from '@mdi/js';
import "../styles/Projects.css";

function Projects() {
    return(
    <div className="medium-padding-top medium-padding-bottom projects-container rounded" id="projects">
        <Icon className="rocket" path={mdiRocket} size={3} />
        <h1 className="small-margin-top">
            <b className="landing-name">Project Section</b>
        </h1>
        <h2 className="medium-margin-top small-padding-bottom">Coming Soon</h2>
    </div>
    );
}


export default Projects;