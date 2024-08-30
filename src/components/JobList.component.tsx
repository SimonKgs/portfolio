import React from 'react'
import {Job} from '.';
import { workExperiences } from '../data/cv.data';
import { WorkExperienceInterface } from '../interfaces/cv.interfaces';

export const JobList: React.FC = () => {

    const workList: WorkExperienceInterface[] = [...workExperiences];
    const workByYear = workList.sort((a, b) => b.year - a.year)
    
    return (
        <>
            <p className='title m2 underline'>Full Experience</p>
            <div className="skill-list-container">
                { workByYear.map((job) => (
                    <Job key={`${job.company}_${job.year}`} job={job} />
                ))}
            </div>
        </>
    )
}