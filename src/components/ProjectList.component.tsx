import React from 'react'

import { projectStyles } from '../styles';
import { projects } from '../data/cv.data';
import { Project } from './Project.component';


export const ProjectList: React.FC = () => {
    return (
        <section id='projects'>
          <p className={projectStyles['title']}>Featured Projects</p>
          <div className={projectStyles['project-container']}>
            {projects.slice(0, 4).map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </section>
      );
}
