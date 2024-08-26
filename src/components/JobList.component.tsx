import React from 'react'
import { detailsStyles } from '../styles'
import {Job} from '.';
import { workExperiences } from '../data/cv.data';
import { WorkExperienceInterface } from '../interfaces/cv.interfaces';

export const JobList: React.FC = () => {

    const workList: WorkExperienceInterface[] = [...workExperiences];
    const workByYear = workList.sort((a, b) => b.year - a.year)
    
    return (
        <>
            <p className={detailsStyles.title}>Full Experience</p>
            <div className="skill-list-container">
                { workByYear.map((job) => (
                    <Job key={`${job.company}_${job.year}`} job={job} />
                ))}
            </div>
        </>
    )
}