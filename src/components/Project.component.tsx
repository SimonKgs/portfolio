import React from 'react'
import { ProjectInterface } from '../interfaces/cv.interfaces';
import { projectStyles } from '../styles';

export const Project: React.FC<{ project: ProjectInterface }> = ({ project }) => {
    const { description, name, projectImg, projectUrl } = project;

    return (
        <div className={projectStyles['project']}>
            <div className={projectStyles['project-img-container']}>
                <img src={ projectImg } alt={name} />
            </div>
            <div className={projectStyles['project-info-container']}>
                <p className={projectStyles['title']}>{ name }</p>
                {/* Getting the p from the description and avoiding the last one that is empty */}
                {description.split(".").map( (pargraph, index) => (
                    ( pargraph !== '') &&
                        <p key={`${index}_paragraph`}>{pargraph}.</p>
                ))}
                {(projectUrl) &&
                    <a href={projectUrl} target='_blank'>Visit {name}</a>
                }
            </div>
        </div>
    )
}
