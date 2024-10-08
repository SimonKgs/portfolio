import React from 'react'
import { educationData } from '../data/cv.data'
import { EducationInterface } from '../interfaces/cv.interfaces';
import { Education} from './';

export const EducationList: React.FC = () => {

    const educationList: EducationInterface[] = [...educationData];
    const educationByYear = educationList.sort((a, b) => b.year - a.year)
    
    return (
        <>
            <p className="title m2 underline">Education & Certifications</p>
            <div className="skill-list-container">
                { educationByYear.map((education) => (
                    <Education key={`${education.degree}`} education={education} />
                ))}
            </div>
        </>
    )
}