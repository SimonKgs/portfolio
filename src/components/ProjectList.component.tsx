import React from 'react'

import { projectStyles } from '../styles';
import { projectsData } from '../data/cv.data';
import { Project } from './';


export const ProjectList: React.FC = () => {
    return (
        <section id='projects'>
          <p className={projectStyles['title']}>Featured Projects</p>
          <div className={projectStyles['project-container']}>
            {projectsData.slice(0, 4).map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </section>
      );
}
